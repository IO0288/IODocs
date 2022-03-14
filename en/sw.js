(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"c7ad9027cb76d37541bd3a469282d8dd","url":"404.html"},{"revision":"10ee16c949f5d5edff78b2da55ced76e","url":"assets/css/styles.a60a2eaf.css"},{"revision":"a205a2a2778b825814c2f01858bf7a17","url":"assets/js/01a85c17.ae3bc158.js"},{"revision":"bcc3dc74049108e55d4c89dec4c18b7e","url":"assets/js/02bbaa45.5320c87e.js"},{"revision":"0c3e6fec26e5b739b2385cd08169e0d6","url":"assets/js/0b3c5dd7.44e9b5dd.js"},{"revision":"d1c084b50dc0dfe09c4a73f3daf9e43f","url":"assets/js/0df6edc2.422ac5bd.js"},{"revision":"f50db67d98e36ee44c78473b63306685","url":"assets/js/131.dff2d530.js"},{"revision":"b58228d57fcba156286047d72043b123","url":"assets/js/15c11874.5d7de338.js"},{"revision":"a81d3e6bfe14d4e3fd5819b718c89a1f","url":"assets/js/17896441.a27b8a33.js"},{"revision":"9fa44f790e7f745d5a1e91d1aae23303","url":"assets/js/1a4e3797.ade90a06.js"},{"revision":"fede46b5031ff7bb7faaa5a296ddc11a","url":"assets/js/1be78505.b7aca7d2.js"},{"revision":"c699d788c287ad460a13d58c6def03a3","url":"assets/js/1f391b9e.03cb3a6b.js"},{"revision":"dfb4b0ad43d9c3ecc32b04f781324911","url":"assets/js/230.4a28605a.js"},{"revision":"27dbf4981b44070615ac3de39700c675","url":"assets/js/283.73b652dd.js"},{"revision":"dc44476c5a980e01f068f4af1491b098","url":"assets/js/393be207.a9daca4b.js"},{"revision":"b4ed0d3da3f9d7684e6013cfa2df5beb","url":"assets/js/398e9369.61311144.js"},{"revision":"ec9b891c4aeec8c493d484f985d860b0","url":"assets/js/3e5f1c1d.5f55ead0.js"},{"revision":"3c6deaba797ff3bf9593ec309cf4d312","url":"assets/js/3f3d5867.1867a3e1.js"},{"revision":"7408af8d049426bc4e08f12b20bfa7ff","url":"assets/js/443.6f5b3bd0.js"},{"revision":"402ffae5119fc6894ba01c14f4b4f1f1","url":"assets/js/499a19c6.1558d8d6.js"},{"revision":"d28d7479f119be3914822c31c3a598f1","url":"assets/js/525.cbf2648c.js"},{"revision":"f1e65cdfb2f0547faea5868ecc0b03a0","url":"assets/js/53d4a3b9.97f86eb5.js"},{"revision":"9eca1c168b476d978ec80814e047456f","url":"assets/js/59362658.a738ff61.js"},{"revision":"57e5a6a9bc7597b352c84c74b80d525b","url":"assets/js/5b44acae.9f84c2e2.js"},{"revision":"e5124e6f906c9d60936dec30d6a3a3aa","url":"assets/js/6875c492.8eed9205.js"},{"revision":"76e8c09b2af5e653d255eea4422dd753","url":"assets/js/73664a40.0e474248.js"},{"revision":"1db6bd955b70f8722287e4f62142ffb2","url":"assets/js/75.0d804234.js"},{"revision":"5b65817104df927ef7dab8d3bf0b55cd","url":"assets/js/7661071f.56feb551.js"},{"revision":"986c88928be2bc463c14cd22db025756","url":"assets/js/7bfc7419.ff41e9ad.js"},{"revision":"5b5ae9ae765bf956f28a2158f739ef36","url":"assets/js/7cdb8f2b.46b51718.js"},{"revision":"66371d9c9140e3831add0474dcf0ac1a","url":"assets/js/814f3328.854fc264.js"},{"revision":"ac8b67f638562b7aa9089e649977b9aa","url":"assets/js/8717b14a.0ba9fdf6.js"},{"revision":"7e1aff378126f95de6faab84f8bbed1b","url":"assets/js/897.4f77648c.js"},{"revision":"7803a155314479b4b9c7cd99fb70bca8","url":"assets/js/8c597e0f.8f6b0548.js"},{"revision":"e522484337cf1d1295e6f5bd188833b8","url":"assets/js/8e3d14ef.89228ee3.js"},{"revision":"957c2ca9cd4ff20c89c8812716bd32e9","url":"assets/js/925b3f96.925b9d49.js"},{"revision":"6a6722699ef070f1a15fc2e2934be86d","url":"assets/js/935f2afb.d56d586c.js"},{"revision":"bd7c0d5381d0c41ff9b68f7cee4e65d7","url":"assets/js/9e4087bc.1b7ef802.js"},{"revision":"d3d26b80d4ebb6a000ad02449bb457e9","url":"assets/js/a6aa9e1f.1f87d477.js"},{"revision":"917125ade4a36b58baea033243df5601","url":"assets/js/ad22c282.01fb515f.js"},{"revision":"9e94f9016c7b375250a766e876264ab5","url":"assets/js/c4f5d8e4.2340f962.js"},{"revision":"e1cad77feb152c6b3249a3b232725074","url":"assets/js/c9e2653a.6a3fc742.js"},{"revision":"def7e915478b0050dd9ba6406497f45d","url":"assets/js/ccc49370.fe57ce40.js"},{"revision":"fc4e3d5e4c1a6292589ced5efb45dcfe","url":"assets/js/d9f32620.b1582b67.js"},{"revision":"6c1cbea80cd6e58bee7a251d11920505","url":"assets/js/e273c56f.a2f4f86e.js"},{"revision":"07a4756c3ad50756fa8e2fa157f55023","url":"assets/js/edaa5198.744d7f1d.js"},{"revision":"914b387beb2c8c98311c487dcc7945f6","url":"assets/js/f4f34a3a.5f76912a.js"},{"revision":"ed94038def9a5d546c3984d8121a222d","url":"assets/js/main.30ba84d8.js"},{"revision":"8b95320b95d8fc4b0d6a02dc9bdaa08a","url":"assets/js/runtime~main.08028ecc.js"},{"revision":"e35aac13cd0a25793e293bfe953df0bb","url":"blog.html"},{"revision":"580fc24dcfdc9ba2232f854823b21091","url":"blog/archive.html"},{"revision":"d28e5c701a47392072aec349ae5de44c","url":"blog/first-blog-post.html"},{"revision":"cf3f0eec201d9ab63a616f6a22eeab8c","url":"blog/long-blog-post.html"},{"revision":"0ae42aa18334c200dd7fcef094568a7d","url":"blog/mdx-blog-post.html"},{"revision":"79006357159b24751dec27387a4eb895","url":"blog/tags.html"},{"revision":"8dbf5da1779add844318464d85386f50","url":"blog/tags/docusaurus.html"},{"revision":"40d32e81d3654212e63ed99e1ac36429","url":"blog/tags/facebook.html"},{"revision":"70394d3ad251e4ed9167629d98d5983c","url":"blog/tags/hello.html"},{"revision":"953d15a0145fa238a10b3f991eb29f27","url":"blog/tags/hola.html"},{"revision":"266b6961732cb179e978f95a73cdf122","url":"blog/welcome.html"},{"revision":"1307b5a7e66a95fc7c556606127d9ae0","url":"docs/create-new-page/create-a-blog-post.html"},{"revision":"e598dbc7adf4da3e537e7444c4046b62","url":"docs/create-new-page/create-a-document.html"},{"revision":"18acaa33ee828df971ba46d702c97a2a","url":"docs/create-new-page/create-a-page.html"},{"revision":"005d445eb500c041c49d22369c1cfdc7","url":"docs/create-new-page/markdown-features.html"},{"revision":"536730bfb2a91b44b1ed7f3314c19a8b","url":"docs/create-new-page/temp1/create-a-page.html"},{"revision":"a46273b6fed40b509becea2b6b2afe2a","url":"docs/intro.html"},{"revision":"8d2014c23f307e4d5b1d7f451603610d","url":"index.html"},{"revision":"b5a5eae8c0b3bd48a6361ccf31b2f7fc","url":"manifest.json"},{"revision":"79436a8e9814c4ebbc3d6ec596518a48","url":"markdown-page.html"},{"revision":"38bf58d9d90c53e2ef77d9d65c4df993","url":"search-index.json"},{"revision":"2cb3552bbe476eca8bb20bbeaeea93be","url":"search.html"},{"revision":"192a6a160f31b1689a4c6233bdbbb803","url":"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();
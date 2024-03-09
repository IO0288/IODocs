"use strict";(self.webpackChunkio_docs=self.webpackChunkio_docs||[]).push([[176],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),g=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=g(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=g(t),f=a,u=c["".concat(i,".").concat(f)]||c[f]||m[f]||p;return t?r.createElement(u,l(l({ref:n},s),{},{components:t})):r.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<p;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>g});var r=t(8168),a=(t(6540),t(5680));const p={id:"ffmpeg",title:"ffmpeg\u64cd\u4f5c",sidebar_class_name:"green",tags:["note","ffmpeg"]},l=void 0,o={unversionedId:"3Notes/ffmpeg",id:"3Notes/ffmpeg",title:"ffmpeg\u64cd\u4f5c",description:"-loglevel error \u65e5\u5fd7\u7ea7\u522b",source:"@site/docs/3Notes/ffmpeg.md",sourceDirName:"3Notes",slug:"/3Notes/ffmpeg",permalink:"/IODocs/docs/3Notes/ffmpeg",draft:!1,editUrl:"https://github.com/IO0288/IODocs/blob/master/docs/3Notes/ffmpeg.md",tags:[{label:"note",permalink:"/IODocs/docs/tags/note"},{label:"ffmpeg",permalink:"/IODocs/docs/tags/ffmpeg"}],version:"current",frontMatter:{id:"ffmpeg",title:"ffmpeg\u64cd\u4f5c",sidebar_class_name:"green",tags:["note","ffmpeg"]},sidebar:"tutorialSidebar",previous:{title:"Blender\u64cd\u4f5c",permalink:"/IODocs/docs/3Notes/blender"},next:{title:"Q&A",permalink:"/IODocs/docs/5Q-A/Q&A"}},i={},g=[{value:"Eg.",id:"eg",level:2},{value:"\u521b\u5efa\u89c6\u9891\u7f29\u7565\u56fe",id:"\u521b\u5efa\u89c6\u9891\u7f29\u7565\u56fe",level:3},{value:"\u6dfb\u52a0\u6c34\u5370",id:"\u6dfb\u52a0\u6c34\u5370",level:3},{value:"\u9ad8\u8d28\u91cfGIF\u52a8\u56fe",id:"\u9ad8\u8d28\u91cfgif\u52a8\u56fe",level:3},{value:"\u5c4f\u5e55\u5f55\u5236",id:"\u5c4f\u5e55\u5f55\u5236",level:3}],s={toc:g},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'ffmpeg  -i "2024-03-07 18-27-40 1920x1080 H.mkv" \n        -c:v h264_nvenc \n        -preset slow \n        -crf 20 -r 30 \n        "2024-03-07 18-27-40 1920x1080 HZ.mkv"\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-loglevel error")," \u65e5\u5fd7\u7ea7\u522b"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-f concat"),"\u62fc\u63a5"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-i")," \u8f93\u5165\u6587\u4ef6"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-c:v h264_nvenc/hevc_nvenc")," \u7f16\u89e3\u7801\u5668:\u89c6\u9891",(0,a.yg)("strong",{parentName:"p"},"\u540c\u7b49\u53c2\u6570\u4e0b\uff0c\u786c\u89e3\u7801\u7387\u4e0d\u5982\u8f6f\u89e3")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-codecs")," \u67e5\u770b\u53ef\u7528\u7f16\u7801\u5668"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-preset")," \u9884\u8bbe"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u89c6\u9891\u8d28\u91cf(\u65e0\u635f0-51\u6700\u5dee)")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-qp")," \u56fa\u5b9aQP\u91cf\u5316\uff0c\u7814\u7a76\u7528\u9014"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-crf")," \u56fa\u5b9a\u7801\u7387\u56e0\u5b50\uff0c\u52a8\u6001QP\uff0c\u6587\u4ef6\u5b58\u50a8\uff0c\u5c3d\u53ef\u80fd\u597d\u7684\u6548\u679c"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-b/b:a/b:v")," CBR\u56fa\u5b9a\u7801\u7387\uff0c\u540c\u4e0b\uff0c\u6d41\u5a92\u4f53"),(0,a.yg)("p",null,"VBR\u52a8\u6001\u7801\u7387\uff0c\u540c\u4e0b\uff0c\u6d41\u5a92\u4f53\uff0c\u52a8\u9759\u573a\u666f"),(0,a.yg)("p",null,"ABR\u5e73\u5747\u7801\u7387\uff0c\u540c\u4e0b\uff0c\u6d41\u5a92\u4f53\uff0c\u963f\u91cc\u4e91\u9ed8\u8ba4"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"---")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-r")," fps"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-b/b:a/b:v")," bitrate"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"eg. -b 4000k -minrate 4000k -maxrate 4000k -bufsize 1835k")," "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-vf/af")," \u89c6\u9891/\u97f3\u9891\u8fc7\u6ee4\u5668(\u6ee4\u955c)"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-vn/an/sn/dn")," \u5220\u9664\u89c6\u9891\u8f68/\u97f3\u8f68/\u5b57\u5e55/\u6570\u636e\u6d41"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-ss 00:00:00")," \u7247\u6bb5\u8d77\u59cb\u4f4d\u7f6e"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-t 00:00:05")," \u7247\u6bb5\u7ed3\u675f\u4f4d\u7f6e"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-c")," \u76f4\u63a5\u62f7\u8d1d\u539f\u59cb\u6570\u636e(\u800c\u4e0d\u662f\u91cd\u65b0\u7f16\u7801)"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-y")," \u5728\u4e0d\u8be2\u95ee\u7684\u60c5\u51b5\u4e0b\u8986\u76d6\u8f93\u51fa\u6587\u4ef6"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-pass 2")," \u4e8c\u6b21\u7f16\u7801"),(0,a.yg)("h2",{id:"eg"},"Eg."),(0,a.yg)("h3",{id:"\u521b\u5efa\u89c6\u9891\u7f29\u7565\u56fe"},"\u521b\u5efa\u89c6\u9891\u7f29\u7565\u56fe"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'ffmpeg -i input.mp4 -vf "fps=1/10,scale=-2:720" thumbnail-%03d.jpg\n')),(0,a.yg)("h3",{id:"\u6dfb\u52a0\u6c34\u5370"},"\u6dfb\u52a0\u6c34\u5370"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'ffmpeg -i input.mp4 -i input.jpg -filter_complex "overlay=100:100" output.mp4\n')),(0,a.yg)("h3",{id:"\u9ad8\u8d28\u91cfgif\u52a8\u56fe"},"\u9ad8\u8d28\u91cfGIF\u52a8\u56fe"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ffmpeg  -i input.mp4 \n        -ss 0 -t 3 \n        -filter_complex [0:v]fps=15,scale=-1:256,split[a][b];[a]palettegen[p];[b][p]paletteuse \n        output.gif\n")),(0,a.yg)("h3",{id:"\u5c4f\u5e55\u5f55\u5236"},"\u5c4f\u5e55\u5f55\u5236"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ffmpeg  -hide_banner \n        -loglevel error \n        -stats -f gdigrab \n        -framerate 60 \n        -offset_x 0 -offset_y 0 \n        -video_size 1920x1080 \n        -draw_mouse 1 \n        -i desktop \n        -c:v h264_nvenc \n        -r 60 -pix_fmt yuv420p \n        -y screen_record.mp4\n")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/663671239"},"ffmpeg\u547d\u4ee4\uff08\u683c\u5f0f\u652f\u6301\uff09")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://blog.csdn.net/suiyueruge1314/article/details/131949399"},"ffmpeg\u5e38\u7528\u529f\u80fd")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://avmedia.0voice.com/?id=40523"},"ffmpeg\u53c2\u8003\u6587\u6863")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_30251829/article/details/97397870"},"FFmpeg \u5e38\u7528\u9009\u9879\u529f\u80fd\u8bf4\u660e")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://ffmpeg.org/documentation.html"},"ffmpeg\u5b98\u65b9\u82f1\u6587\u6587\u6863")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/485519347"},"FFmpeg X264\u7f16\u7801\u53c2\u6570")))}m.isMDXComponent=!0}}]);
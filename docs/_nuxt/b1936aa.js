(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[10],{373:function(t,e,n){"use strict";var strong=n(386),r=n(374),o="Map";t.exports=n(387)(o,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,o),t);return e&&e.v},set:function(t,e){return strong.def(r(this,o),0===t?0:t,e)}},strong,!0)},374:function(t,e,n){var r=n(33);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},386:function(t,e,n){"use strict";var r=n(40).f,o=n(104),c=n(226),l=n(67),d=n(224),f=n(225),h=n(169),v=n(229),m=n(170),_=n(34),y=n(165).fastKey,w=n(374),k=_?"_s":"size",x=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var v=t((function(t,r){d(t,v,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[k]=0,null!=r&&f(r,n,t[h],t)}));return c(v.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[k]=0},delete:function(t){var n=w(this,e),r=x(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[k]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!x(w(this,e),t)}}),_&&r(v.prototype,"size",{get:function(){return w(this,e)[k]}}),v},def:function(t,e,n){var r,o,c=x(t,e);return c?c.v=n:(t._l=c={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[k]++,"F"!==o&&(t._i[o]=c)),t},getEntry:x,setStrong:function(t,e,n){h(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?v(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,v(1))}),n?"entries":"values",!n,!0),m(e)}}},387:function(t,e,n){"use strict";var r=n(25),o=n(15),c=n(41),l=n(226),meta=n(165),d=n(225),f=n(224),h=n(33),v=n(30),m=n(168),_=n(103),y=n(171);t.exports=function(t,e,n,w,k,x){var j=r[t],O=j,C=k?"set":"add",S=O&&O.prototype,$={},E=function(t){var e=S[t];c(S,t,"delete"==t||"has"==t?function(a){return!(x&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return x&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof O&&(x||S.forEach&&!v((function(){(new O).entries().next()})))){var M=new O,T=M[C](x?{}:-0,1)!=M,P=v((function(){M.has(1)})),D=m((function(t){new O(t)})),B=!x&&v((function(){for(var t=new O,e=5;e--;)t[C](e,e);return!t.has(-0)}));D||((O=e((function(e,n){f(e,O,t);var r=y(new j,e,O);return null!=n&&d(n,k,r[C],r),r}))).prototype=S,S.constructor=O),(P||B)&&(E("delete"),E("has"),k&&E("get")),(B||T)&&E(C),x&&S.clear&&delete S.clear}else O=w.getConstructor(e,t,k,C),l(O.prototype,n),meta.NEED=!0;return _(O,t),$[t]=O,o(o.G+o.W+o.F*(O!=j),$),x||w.setStrong(O,t,k),O}},388:function(t,e,n){"use strict";n(7),n(4),n(5),n(9),n(10);var r=n(2),o=(n(389),n(26)),c=n(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:d({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},389:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("e8b41e5e",content,!0,{sourceMap:!1})},390:function(t,e,n){var r=n(12)(!1);r.push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=r},391:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("63c9496b",content,!0,{sourceMap:!1})},392:function(t,e,n){var r=n(12)(!1);r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},416:function(t,e,n){window,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n=function(t,e,i,n,r,o,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}({name:"VueWebCam",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:500},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},selectFirstDevice:{type:Boolean,default:!1},deviceId:{type:String,default:null},playsinline:{type:Boolean,default:!0},resolution:{type:Object,default:null,validator:function(t){return t.height&&t.width}}},data:function(){return{source:null,canvas:null,camerasListEmitted:!1,cameras:[]}},watch:{deviceId:function(t){this.changeCamera(t)}},mounted:function(){this.setupMedia()},beforeDestroy:function(){this.stop()},methods:{legacyGetUserMediaSupport:function(){return function(t){var e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return e?new Promise((function(i,n){e.call(navigator,t,i,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}},setupMedia:function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=this.legacyGetUserMediaSupport()),this.testMediaAccess()},loadCameras:function(){var t=this;navigator.mediaDevices.enumerateDevices().then((function(e){for(var i=0;i!==e.length;++i){var n=e[i];"videoinput"===n.kind&&t.cameras.push(n)}})).then((function(){t.camerasListEmitted||(t.selectFirstDevice&&t.cameras.length>0&&(t.deviceId=t.cameras[0].deviceId),t.$emit("cameras",t.cameras),t.camerasListEmitted=!0)})).catch((function(e){return t.$emit("notsupported",e)}))},changeCamera:function(t){this.stop(),this.$emit("camera-change",t),this.loadCamera(t)},loadSrcStream:function(t){var e=this;"srcObject"in this.$refs.video?this.$refs.video.srcObject=t:this.source=window.HTMLMediaElement.srcObject(t),this.$refs.video.onloadedmetadata=function(){e.$emit("video-live",t)},this.$emit("started",t)},stopStreamedVideo:function(t){var e=this,i=t.srcObject;i.getTracks().forEach((function(t){t.stop(),e.$emit("stopped",i),e.$refs.video.srcObject=null,e.source=null}))},stop:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.stopStreamedVideo(this.$refs.video)},start:function(){this.deviceId&&this.loadCamera(this.deviceId)},pause:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.pause()},resume:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.play()},testMediaAccess:function(){var t=this,e={video:!0};this.resolution&&(e.video={},e.video.height=this.resolution.height,e.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(e).then((function(e){e.getTracks().forEach((function(t){t.stop()})),t.loadCameras()})).catch((function(e){return t.$emit("error",e)}))},loadCamera:function(t){var e=this,i={video:{deviceId:{exact:t}}};this.resolution&&(i.video.height=this.resolution.height,i.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(i).then((function(t){return e.loadSrcStream(t)})).catch((function(t){return e.$emit("error",t)}))},capture:function(){return this.getCanvas().toDataURL(this.screenshotFormat)},getCanvas:function(){var t=this.$refs.video;if(!this.ctx){var e=document.createElement("canvas");e.height=t.videoHeight,e.width=t.videoWidth,this.canvas=e,this.ctx=e.getContext("2d")}var i=this.ctx,n=this.canvas;return i.drawImage(t,0,0,n.width,n.height),n}}},(function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"video",attrs:{width:this.width,height:this.height,src:this.source,autoplay:this.autoplay,playsinline:this.playsinline}})}),[],!1,null,null,null).exports;function r(t){t.component("vue-web-cam",n)}i.d(e,"version",(function(){return o})),i.d(e,"WebCam",(function(){return n})),"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.default=r;var o="__VERSION__"}])},419:function(t,e,n){"use strict";var r=n(2),o=(n(62),n(44),n(7),n(46),n(373),n(32),n(16),n(29),n(4),n(5),n(9),n(10),n(228),n(0)),c=n(66),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(n,r){return n[t+Object(l.x)(r)]=e(),n}),{})}var _=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},k=m("justify",(function(){return{type:String,default:null,validator:w}})),x=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:x}})),O={align:Object.keys(y),justify:Object.keys(k),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:w}},k),{},{alignContent:{type:String,default:null,validator:x}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=$.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},420:function(t,e,n){var r;!function(){function n(t){return(t=t.toString(16)).length<2&&(t="0"+t),t}function o(){var t=function(){try{return Array.from((window.crypto||window.msCrypto).getRandomValues(new Uint8Array(16)))}catch(e){for(var t=[];t.length<16;)t.push(256*Math.random()&255);return t}}();return t[6]=15&t[6]|64,t[8]=63&t[8]|128,(t=t.map(n).join("").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/)).shift(),t.join("-")}var c=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;o.valid=function(t){return c.test(t)},window&&(window.uuid4=o),t.exports&&(t.exports=o),void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},421:function(t,e,n){"use strict";n(227);var r=n(166);e.a=Object(r.a)("flex")},422:function(t,e,n){"use strict";n(227);var r=n(166);e.a=Object(r.a)("layout")},423:function(t,e,n){"use strict";var r=n(2),o=(n(18),n(44),n(391),n(52)),c=n(19),l=n(26),d=n(47),f=n(102),h=n(8),v=n(1),m=n(6);e.a=Object(h.a)(o.a,c.a,d.a,Object(f.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(v.g)(n+footer+r),paddingLeft:Object(v.g)(o),paddingRight:Object(v.g)(c),paddingTop:Object(v.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(v.o)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(v.o)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),style:o.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);
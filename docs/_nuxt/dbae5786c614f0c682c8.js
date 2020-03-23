(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[4],{431:function(e,t,n){"use strict";n.r(t);n(10),n(6),n(4),n(3),n(8);var c=n(2),o=n(385),r=(n(86),{name:"Camera",components:{"vue-web-cam":n(386).WebCam},data:function(){return{img:null,camera:null,deviceId:null,state:!1,devices:[]}},computed:{device:function(){var e=this;return this.devices.find((function(t){return t.deviceId===e.deviceId}))}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=Object(o.a)(this.devices),t=e[0];e.slice(1);t&&(this.camera=t.deviceId,this.deviceId=t.deviceId,this.state=!0)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onStarted:function(e){this.state=!0},onStopped:function(e){this.state=!1},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(e){console.log("On Error Event",e)},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e},onImageSave:function(){this.$emit("imageSave",this.img),this.img=null},onImageDelete:function(){this.img=null}}}),l=n(61),v=n(85),d=n.n(v),m=n(194),f=n(340),h=n(338),_=n(124),I=n(110),w=n(125),C=n(81),S=n(50),y=n(127),k=n(374),O=n(389),j=n(357),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[e.img?n("v-img",{attrs:{src:e.img}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.img&&e.state,expression:"!img && state"}],staticClass:"justify-center",on:{click:e.onCapture}},[n("vue-web-cam",{ref:"webcam",attrs:{"device-id":e.deviceId,height:"100%"},on:{started:e.onStarted,stopped:e.onStopped,error:e.onError,cameras:e.onCameras,"camera-change":e.onCameraChange}})],1),e._v(" "),e.state?e._e():n("v-row",{staticClass:"py-12",attrs:{align:"center",justify:"center"}},[n("v-icon",{attrs:{color:"error","x-large":""}},[e._v("visibility_off")])],1),e._v(" "),n("v-card-actions",{staticClass:"pt-0"},[e.img?[n("div",{staticClass:"flex-grow-1"}),e._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.onImageDelete}},[n("v-icon",[e._v("delete")])],1),e._v(" "),n("v-btn",{attrs:{icon:"",color:"success"},on:{click:e.onImageSave}},[n("v-icon",[e._v("check")])],1)]:[n("v-menu",{attrs:{"offset-y":!0,"close-on-content-click":!0},scopedSlots:e._u([{key:"activator",fn:function(t){var c=t.on;return[n("v-btn",e._g({attrs:{icon:""}},c),[n("v-icon",[e._v("settings")])],1)]}}])},[e._v(" "),n("v-list",{attrs:{shaped:"",dense:""}},[n("v-subheader",[e._v(" "+e._s(e.$t("component.camera.settings.device"))+" ")]),e._v(" "),n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.deviceId,callback:function(t){e.deviceId=t},expression:"deviceId"}},e._l(e.devices,(function(t){return n("v-list-item",{key:t.deviceId,attrs:{value:t.deviceId},on:{click:function(n){return e.onCameraChange(t.deviceId)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.label)}})],1)],1)})),1)],1)],1),e._v(" "),e.state?n("v-btn",{attrs:{icon:""},on:{click:e.onStop}},[n("v-icon",[e._v("videocam")])],1):n("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.onStart}},[n("v-icon",[e._v("videocam_off")])],1)]],2)],1)}),[],!1,null,"29b57e00",null),V=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardActions:h.a,VIcon:_.a,VImg:I.a,VList:w.a,VListItem:C.a,VListItemContent:S.a,VListItemGroup:y.a,VListItemTitle:S.b,VMenu:k.a,VRow:O.a,VSubheader:j.a});var x=n(57),U=n(390),$=n.n(U);function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var P={components:{Camera:V},data:function(){return{imageUploadSuccess:!1,imageUploadFail:!1}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(x.b)({initRecognition:"recognition/initRecognition"}),{newImage:function(image){var e=this;this.imageUploadSuccess=!1,this.imageUploadFail=!1;var t=$()();this.$webworker.mqttWorker.sendImage(image,t).then((function(){e.imageUploadSuccess=!0,e.imageUploadFail=!1,e.initRecognition({correlationId:t,image:image})})).catch((function(t){e.imageUploadSuccess=!1,e.imageUploadFail=!0,console.log(t)}))}})},E=n(391),D=n(392),L=n(393),R=Object(l.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("Camera",{on:{imageSave:e.newImage}})],1),e._v(" "),n("div",{staticClass:"text-center ma-2"},[n("v-snackbar",{staticClass:"text-center",attrs:{color:"success"},model:{value:e.imageUploadSuccess,callback:function(t){e.imageUploadSuccess=t},expression:"imageUploadSuccess"}},[e._v("\n      "+e._s(e.$t("recognize.success"))+"\n      "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.imageUploadSuccess=!1}}},[n("v-icon",[e._v("close")])],1)],1),e._v(" "),n("v-snackbar",{staticClass:"text-center",attrs:{color:"error"},model:{value:e.imageUploadFail,callback:function(t){e.imageUploadFail=t},expression:"imageUploadFail"}},[e._v("\n      "+e._s(e.$t("recognize.fail"))+"\n      "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.imageUploadFail=!1}}},[n("v-icon",[e._v("close")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=R.exports;d()(R,{VBtn:m.a,VFlex:E.a,VIcon:_.a,VLayout:D.a,VSnackbar:L.a})}}]);
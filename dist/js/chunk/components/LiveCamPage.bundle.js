(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{578:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.cssLoaded&&e.LiveCamInfo?r("div",{staticClass:"live-cam-page"},[r("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",class:{scroll:e.scroll}},[r("div",{staticClass:"container"},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item live-cam-page-back",attrs:{title:e.$t("LiveCamPage.Back")},on:{click:e.goBack}},[r("i",{staticClass:"fas fa-chevron-left"})])]),e._v(" "),r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item",attrs:{title:e.$t("LiveCamPage.Share")},on:{click:e.shareUrl}},[r("i",{staticClass:"fas fa-share-alt"})]),e._v(" "),e.ReportUrl?r("li",{staticClass:"nav-item"},[r("a",{attrs:{href:e.ReportUrl,target:"_blank",title:e.$t("LiveCamPage.Report")}},[r("i",{staticClass:"far fa-paper-plane"})])]):e._e()])])]),e._v(" "),r("live-cam-info-box",{key:"live_cam_info_"+e.LiveCamKey,attrs:{"live-cam-key":e.LiveCamKey}})],1):e._e()};i._withStripped=!0;var n=r(65),a=r(7),o=r(2);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}({},r(23).a);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={state:function(){return{}},mutations:{},actions:{},getters:{},namespaced:!0};!function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}({module_name:"Common/Demo"},f);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={components:{LiveCamInfoBox:function(){return Promise.all([r.e(9),r.e(0),r.e(18)]).then(r.bind(null,582))}},filters:{},mixins:[n.a],props:{LiveCamKey:{type:String,default:""}},data:function(){return{cssLoaded:!1}},computed:v(v({},Object(o.c)(["LiveCamListFlag","LiveCamList","PageSetting_scrollTop"])),{},{LiveCamInfo:function(){return this.LiveCamListFlag?!!this.LiveCamList[this.LiveCamKey]&&this.LiveCamList[this.LiveCamKey]:null},ReportUrl:function(){var e="";return this.LiveCamInfo&&(e=this.$t("LiveCamPage.ReportUrl",{liveCamKey:this.LiveCamInfo.key})),e},scroll:function(){return this.PageSetting_scrollTop>0}}),watch:{LiveCamInfo:{immediate:!0,deep:!0,handler:function(e){!1===e?this.$router.push(this.prevRoute):this.setTitle()}}},beforeCreate:function(){this.$store.state["Common/Demo"]||this.$store.registerModule("Common/Demo",f)},created:function(){var e=this;a.b.register([{rel:"stylesheet",type:"text/css",href:"/dist/css/page/live-cam-page.css",onload:function(){e.cssLoaded=!0}}])},mounted:function(){this.setPageTitle(this.$t("Menu.LiveCam")),this.setTitle()},updated:function(){},destroyed:function(){},methods:v(v(v({},Object(o.b)({})),Object(o.d)({setShareUrlInfo:"setShareUrlInfo"})),{},{setTitle:function(){if(this.LiveCamInfo){var e="";this.LiveCamInfo&&this.LiveCamInfo.video&&(e=this.LiveCamInfo.video.title.substr(0,30)),this.setPageTitle("".concat(this.$t("Menu.LiveCam"),": ").concat(e))}},goBack:function(){this.prevRoute&&this.$router.push(this.prevRoute)},shareUrl:function(){var e={title:document.title,url:window.location.href};this.setShareUrlInfo(e)}})},h=r(13),O=Object(h.a)(b,i,[],!1,null,"2fdd08de",null);O.options.__file="components/LiveCamPage/main.vue";t.default=O.exports}}]);
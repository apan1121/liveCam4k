(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{119:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return m}));!function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}}({},n(19).a);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={setCurrentPoint:function(t,e){t.currentPoint=o(o({lat:0,lng:0,zoom:0},t.currentPoint),e)}};function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p="Page/MapPage",m={state:function(){return{currentPoint:{lat:28.413553833301172,lng:33.646757625192066,zoom:2}}},mutations:s,actions:{},getters:{LiveCamList:function(t,e,n,r){var a=n.LiveCamList;return Object.values(a)},currentPoint:function(t){return t.currentPoint}},namespaced:!0};!function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}}({module_name:p},m)},123:function(t,e,n){"use strict";(function(t){var r=n(2),a=n(3),i=n(14),o=n.n(i),c=(n(198),n(199),n(200),n(201),n(202),n(65)),s=n(81),l=n(119);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={components:{},filters:{},mixins:[c.a,s.a],props:{},data:function(){return{initFlag:!1,localFlag:!1,localStorageFlag:!1,moveFlag:!1,map:null}},computed:p(p(p({},Object(r.c)(["CurrentPosition","WeatherStatus","WeatherIcon","MapProviderUrl"])),Object(r.c)(l.a,["LiveCamList","currentPoint"])),{},{locale:function(){return this.$i18n.locale}}),watch:{initFlag:function(){this.init()},CurrentPosition:{immediate:!0,deep:!0,handler:function(){if(this.map&&this.CurrentPosition&&"success"===this.CurrentPosition.status){var t=this.CurrentPosition,e=t.lat,n=t.lng;this.setYourPoint(e,n,!this.localStorageFlag)}}},LiveCamList:{immediate:!0,handler:function(){this.map&&this.setLiveCamPoint()}}},beforeCreate:function(){var t=l.a.split("/");this.$store.hasModule([t[0]])||this.$store.registerModule([t[0]],{state:{},mutations:{},getter:{},action:{},namespaced:!0}),this.$store.hasModule(t)||this.$store.registerModule(t,l.b)},created:function(){var t=this;a.b.register([{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",onload:function(){t.initFlag=!0}},{rel:"stylesheet",type:"text/css",href:"/dist/css/page/map-page.css"},{rel:"stylesheet",type:"text/css",href:"/dist/css/page/components/live-cam-card.css"}])},mounted:function(){this.setPageTitle(this.$t("Menu.Map"))},updated:function(){},destroyed:function(){},methods:p(p(p({},Object(r.b)({})),Object(r.d)({setCurrentPoint:"".concat(l.a,"/setCurrentPoint")})),{},{carryFormatter:a.d.carryFormatter,init:function(){var t=this,e=this;setTimeout((function(){e.map=o.a.map("map",{}).fitWorld(),o.a.tileLayer(e.MapProviderUrl,{maxZoom:18,attribution:"  ",id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(e.map);var n=t.$route.query,r=a.c.get("MapLatLng",!1);if(void 0!==n.lat&&void 0!==n.lng)e.$router.replace({name:"MapPage"}),e.map.setView(new o.a.LatLng(n.lat,n.lng),e.currentPoint.zoom);else if(r){e.localStorageFlag=!0;var i=r.lat,c=r.lng,s=r.zoom;if(e.map.setView(new o.a.LatLng(i,c),s||13),e.CurrentPosition&&"success"===e.CurrentPosition.status){var l=e.CurrentPosition,u=l.lat,p=l.lng;t.setYourPoint(u,p)}}else if(e.CurrentPosition&&"success"===e.CurrentPosition.status){console.log(33333);var m=e.CurrentPosition,f=m.lat,d=m.lng;t.setYourPoint(f,d,e.currentPoint.zoom)}else console.log(44444),e.map.setView(new o.a.LatLng(e.currentPoint.lat,e.currentPoint.lng),e.currentPoint.zoom);e.LiveCamList.length>0&&e.setLiveCamPoint(),e.map.on("move",(function(){var t=e.map.getCenter(),n=t.lat,r=t.lng,a=e.map.getZoom();e.moveCurrentPoint(n,r,a)})),e.map.on("zoomend",(function(){var t=e.map.getCenter(),n=t.lat,r=t.lng,a=e.map.getZoom();e.moveCurrentPoint(n,r,a)}))}),300)},setYourPoint:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this;o.a.marker(new o.a.LatLng(t,e)).addTo(r.map).bindPopup(r.$t("MapPage.YourCurrentPosition")),!r.moveFlag&&n&&r.map.setView(new o.a.LatLng(t,e),13),r.localFlag||(r.localFlag=!0,o.a.control.locate({icon:"fas fa-map-marker-alt"}).addTo(r.map))},setLiveCamPoint:function(){var e=this,n=this;clearTimeout(n.setLiveCamPointTimer),n.setLiveCamPointTimer=setTimeout((function(){var r=a.a.get("ASSETS_HOST"),i=new o.a.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),c=o.a.markerClusterGroup();n.LiveCamList.forEach((function(s){if(s.gps&&s.gps.lat&&s.gps.lng){var l=s.video.thumbnail.url,u=s.gps,m=u.lat,f=u.lng,d=(s.key,s.city),g=(s.youtube_id,s.video),v=s.weather,h=p(p({view_count:0,like_count:0,dislike_count:0,favorite_count:0,comment_count:0},g.statistics),{},{temp:v.temp,humidity:v.humidity,wind_speed:n.transSpeed(v.wind_speed),weather_icon:v.weather_icon,weather_status:v.weather_status}),b=a.d.carryFormatter(h.view_count),P=a.d.carryFormatter(h.like_count),y=n.transTemp(h.temp,0),O=h.humidity,w=(h.wind_speed,h.weather_icon),j=h.weather_status,L=n.$router.matcher.match({name:"LiveCamPage",params:{LiveCamKey:s.key}}),C="".concat(r,"#").concat(L.fullPath),_="".concat(e.$t("Video.view_count"),": ").concat(h.view_count),k="".concat(e.$t("Video.like_count"),": ").concat(h.like_count),S="".concat(e.$t("Weather.temp"),": ").concat(y),$="".concat(e.$t("Weather.humidity"),": ").concat(h.humidity," %"),D="".concat(e.$t("Weather.weather_status"),": ").concat(e.$t("WeatherStatus."+j)),F=e.WeatherIcon[w],z='\n                        <div class="live-cam-card">\n                            <a href=\''.concat(C,'\'>\n                                <div class="live-cam-card-wrapper" statistics-type="video">\n                                    <div class="live-cam-thumb lazyload" data-src="').concat(l,'">\n                                        <i class="icon far fa-play-circle"></i>\n                                    </div>\n                                    <div rel=\'video\' class="live-cam-statistics">\n                                        <span class="statistic-item" title="').concat(_,'">\n                                            <i class="fas fa-eye"></i>\n                                            ').concat(b,'\n                                        </span>\n                                        <span class="statistic-item" title="').concat(k,'">\n                                            <i class="fas fa-thumbs-up"></i>\n                                            ').concat(P,'\n                                        </span>\n                                    </div>\n                                    <div rel=\'weather\' class="live-cam-statistics">\n                                        <span class="statistic-item" title="').concat(S,'">\n                                            <i class="fas fa-thermometer-half"></i>\n                                            ').concat(y,'\n                                        </span>\n                                        <span class="statistic-item" title="').concat($,'">\n                                            <i class="fas fa-tint"></i>\n                                            ').concat(O,' %\n                                        </span>\n                                        <span class="statistic-item" title="').concat(D,'">\n                                            <i class="icon ').concat(F,'"></i>\n                                        </span>\n                                    </div>\n                                    <div class="live-cam-title ellipsis">').concat(d," ").concat(g.title,"</div>\n                                </div>\n                            </a>\n                        </div>\n                        "),M=o.a.marker(new o.a.LatLng(m,f),{icon:i}).bindPopup(z).on("click",(function(){n.map.panTo(new o.a.LatLng(s.gps.lat,s.gps.lng)),t(".leaflet-popup-content-wrapper").find(".icon").off("click").on("click",(function(t){t.stopPropagation(),t.preventDefault(),n.$router.push({name:"LiveCamPage",params:{LiveCamKey:s.key}})}));var e=["video","weather"];t(".leaflet-popup-content-wrapper").find(".live-cam-statistics").off("click").on("click",(function(n){n.stopPropagation(),n.preventDefault();var r=t(this).parents(".live-cam-card-wrapper"),a=r.attr("statistics-type"),i=e.indexOf(a);i=(i+1)%e.length,a=e[i],r.attr("statistics-type",a)})),t("body").trigger("lazyImg")}));c.addLayer(M)}})),n.map.addLayer(c)}),100)},moveCurrentPoint:function(t,e,n){a.c.set("MapLatLng",{lat:t,lng:e,zoom:n}),this.setCurrentPoint({lat:t,lng:e,zoom:n}),this.moveFlag=!0}})}}).call(this,n(25))},584:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var a=n(123).a,i=n(9),o=Object(i.a)(a,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"map",attrs:{id:"map"}})])}],!1,null,"065bbf98",null);o.options.__file="components/MapPage/main.vue";e.default=o.exports}}]);
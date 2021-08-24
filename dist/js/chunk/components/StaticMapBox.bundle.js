(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{571:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"map",attrs:{id:"static-map"}})};n._withStripped=!0;var a=o(2),r=o(7),i=o(14),s=o.n(i);o(196),o(197),o(198),o(199),o(200);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var p={components:{},filters:{},props:{lat:{type:Number,default:0},lng:{type:Number,default:0},zoom:{type:Number,default:0},zoomControl:{type:Boolean,default:!0},dragging:{type:Boolean,default:!0}},data:function(){return{initFlag:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},Object(a.c)(["MapProviderUrl"])),watch:{initFlag:function(){this.init()}},created:function(){var t=this;r.b.register([{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",onload:function(){t.initFlag=!0}},{rel:"stylesheet",type:"text/css",href:"/dist/css/page/map-page.css"},{rel:"stylesheet",type:"text/css",href:"/dist/css/page/components/live-cam-card.css"}])},mounted:function(){},methods:{init:function(){var t=this;setTimeout((function(){t.map=s.a.map("static-map",{zoomControl:t.zoomControl}).fitWorld(),s.a.tileLayer(t.MapProviderUrl,{maxZoom:t.zoom,attribution:"   ",id:"static-mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(t.map),t.map.setView(new s.a.LatLng(t.lat,t.lng),t.zoom),s.a.marker(new s.a.LatLng(t.lat,t.lng)).on("click",(function(){t.$emit("click-point",new s.a.LatLng(t.lat,t.lng))})).addTo(t.map),t.dragging||(t.map.dragging.disable(),t.map.touchZoom.disable(),t.map.doubleClickZoom.disable(),t.map.scrollWheelZoom.disable())}),300)}}},u=o(13),m=Object(u.a)(p,n,[],!1,null,"2d01f060",null);m.options.__file="components/StaticMapBox/main.vue";e.default=m.exports}}]);
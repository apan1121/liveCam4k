(window.webpackJsonp=window.webpackJsonp||[]).push([[17,19,20,21,22],{65:function(t,e,n){"use strict";(function(t){e.a={props:{},data:function(){return{prevRoute:null}},computed:{},methods:{setPageTitle:function(t){var e=this.$t("WebTitle");t=t?"".concat(t," - ").concat(e):e,window.document.title=t}},beforeDestroyed:function(){},destroyed:function(){},mounted:function(){},beforeRouteEnter:function(e,n,r){t("body").attr("page-name",e.name),r((function(t){t.prevRoute=n}))}}}).call(this,n(25))},81:function(t,e,n){"use strict";var r=n(3),o=n(2),i=n(50);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.n(i)()(i.allMeasures);e.a={props:{},data:function(){return{}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.c)(["SettingUnits"])),methods:{transTemp:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t;return n=r.d.calcTemperatureUnit(n,this.SettingUnits.temperature,e)},transLength:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t;return n=r.d.calcLengthUnit(n,this.SettingUnits.length,e)},transSpeed:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t;return n=r.d.calcSpeedUnit(n,this.SettingUnits.length,e)}},beforeDestroyed:function(){},destroyed:function(){},mounted:function(){}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{202:function(t,e,n){"use strict";n.r(e);n(204);var r=n(1),l=[{path:"/",title:"Introduction",type:"title-slide"},{path:"/what-are-systems/",title:"What are systems?",type:"title-slide"},{path:"/examples/writing/",title:"Writing",type:"interactive-slide"},{path:"/examples/space/",title:"Space",type:"interactive-slide"},{path:"/examples/human-body/",title:"Human Body",type:"interactive-slide"},{path:"/components/",title:"Contain components",type:"section-slide"},{path:"/components/cities/",title:"Cities",type:"interactive-slide"},{path:"/more-than-sum-of-parts/",title:"More than the sum of their parts",type:"section-slide"},{path:"/more-than-sum-of-parts/music/",title:"Music",type:"interactive-slide"},{path:"/relationships/",title:"Have relationships",type:"section-slide"},{path:"/relationships/food-web/",title:"Food web",type:"interactive-slide"},{path:"/processes/",title:"Have processes",type:"section-slide"},{path:"/processes/recipes/",title:"Recipes",type:"interactive-slide"},{path:"/cycles/",title:"Cycles",type:"section-slide"},{path:"/cycles/life-cycles/",title:"Life Cycles",type:"interactive-slide"},{path:"/surprising/",title:"Are surprising",type:"section-slide"},{path:"/surprising/pendulums/",title:"Pendulums",type:"interactive-slide"},{path:"/contain-systems/",title:"Contain other systems",type:"section-slide"},{path:"/contain-systems/communities/",title:"Communities",type:"interactive-slide"},{path:"/understand-other-systems/",title:"Help us understand other systems",type:"section-slide"},{path:"/understand-other-systems/branching-systems/",title:"Branching systems",type:"interactive-slide"},{path:"/conclusion/",title:"The end!",type:"title-slide"}],o={props:["completed"],data:function(){var path=this.$route.fullPath,t=l.findIndex((function(t){return t.path==path}));return{path:path,slides:l,currentIndex:t,next:l[t+1]}},watch:{completed:{handler:function(t){this.complete=void 0===t||this.completed,r.default.set(this.slides[this.currentIndex],"completed",this.complete)},immediate:!0}}},c=n(26),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"progress"},this._l(this.slides,(function(t){return e("Tooltip",{attrs:{content:t.title}},[e("nuxt-link",{class:["slide",t.type,t.completed?"completed":""],attrs:{to:t.path}})],1)})),1),this._v(" "),e("div",{staticClass:"links"},[this.next?e("NextButton",{attrs:{to:this.next.path,disabled:!this.complete}}):this._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NextButton:n(203).default})},203:function(t,e,n){"use strict";n.r(e);var r={props:["to"]},l=n(26),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Button",{attrs:{type:"primary",rel:"noopener noreferrer",to:this.to}},[this._v("\n  Next\n  "),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)}),[],!1,null,null,null);e.default=component.exports},204:function(t,e,n){"use strict";var r=n(2),l=n(27).findIndex,o=n(105),c=n(18),d=!0,h=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d||!h},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},224:function(t,e,n){"use strict";n.r(e);var r=n(225),l=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},225:function(t,e){},331:function(t,e,n){t.exports=n.p+"videos/components.f4fa664.mp4"},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slide"},[e("div",{staticClass:"content"},[this._m(0),this._v(" "),e("video",{attrs:{height:"450",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:n(331),type:"video/mp4"}})])]),this._v(" "),e("NavBar")],1)},l=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"section-title"},[this._v("\n      Systems are made of "),e("em",[this._v("components")])])}]},440:function(t,e,n){"use strict";n.r(e);var r=n(429),l=n(224);for(var o in l)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(o);var c=n(26),component=Object(c.a)(l.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{NavBar:n(202).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{202:function(t,e,n){"use strict";n.r(e);n(204);var r=n(1),o=[{path:"/",title:"Introduction",type:"title-slide"},{path:"/what-are-systems/",title:"What are systems?",type:"title-slide"},{path:"/examples/writing/",title:"Writing",type:"interactive-slide"},{path:"/examples/space/",title:"Space",type:"interactive-slide"},{path:"/examples/human-body/",title:"Human Body",type:"interactive-slide"},{path:"/components/",title:"Contain components",type:"section-slide"},{path:"/components/cities/",title:"Cities",type:"interactive-slide"},{path:"/more-than-sum-of-parts/",title:"More than the sum of their parts",type:"section-slide"},{path:"/more-than-sum-of-parts/music/",title:"Music",type:"interactive-slide"},{path:"/relationships/",title:"Have relationships",type:"section-slide"},{path:"/relationships/food-web/",title:"Food web",type:"interactive-slide"},{path:"/processes/",title:"Have processes",type:"section-slide"},{path:"/processes/recipes/",title:"Recipes",type:"interactive-slide"},{path:"/cycles/",title:"Cycles",type:"section-slide"},{path:"/cycles/life-cycles/",title:"Life Cycles",type:"interactive-slide"},{path:"/surprising/",title:"Are surprising",type:"section-slide"},{path:"/surprising/pendulums/",title:"Pendulums",type:"interactive-slide"},{path:"/contain-systems/",title:"Contain other systems",type:"section-slide"},{path:"/contain-systems/communities/",title:"Communities",type:"interactive-slide"},{path:"/understand-other-systems/",title:"Help us understand other systems",type:"section-slide"},{path:"/understand-other-systems/branching-systems/",title:"Branching systems",type:"interactive-slide"},{path:"/conclusion/",title:"The end!",type:"title-slide"}],l={props:["completed"],data:function(){var path=this.$route.fullPath,t=o.findIndex((function(t){return t.path==path}));return{path:path,slides:o,currentIndex:t,next:o[t+1]}},watch:{completed:{handler:function(t){this.complete=void 0===t||this.completed,r.default.set(this.slides[this.currentIndex],"completed",this.complete)},immediate:!0}}},c=n(26),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"progress"},this._l(this.slides,(function(t){return e("Tooltip",{attrs:{content:t.title}},[e("nuxt-link",{class:["slide",t.type,t.completed?"completed":""],attrs:{to:t.path}})],1)})),1),this._v(" "),e("div",{staticClass:"links"},[this.next?e("NextButton",{attrs:{to:this.next.path,disabled:!this.complete}}):this._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NextButton:n(203).default})},203:function(t,e,n){"use strict";n.r(e);var r={props:["to"]},o=n(26),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Button",{attrs:{type:"primary",rel:"noopener noreferrer",to:this.to}},[this._v("\n  Next\n  "),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,n){"use strict";n.r(e);var r={props:["title","instructions","subtitle"],data:function(){return{completed:!1}},created:function(){var t=this;this.$on("complete",(function(){t.completed=!0}))}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("h2",{staticClass:"instructions",domProps:{innerHTML:t._s(t.instructions)}}),t._v(" "),t._t("default"),t._v(" "),n("h3",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.subtitle)}})],2),t._v(" "),n("NavBar",{attrs:{completed:t.completed}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(202).default})},267:function(t,e,n){"use strict";n.r(e);var r=n(268),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},268:function(t,e){},379:function(t,e,n){var map={"./dingo.png":380,"./echidna.png":381,"./emu.png":382,"./falcon.png":383,"./grass.png":384,"./grasshopper.png":385,"./gumtree.png":386,"./honey-eater.png":387,"./kangaroo.png":388,"./kookaburra.png":389,"./lizard.png":390,"./magpie.png":391,"./termite.png":392,"./wattle.png":393,"./wombat.png":394};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=379},380:function(t,e,n){t.exports=n.p+"img/dingo.d9f2fcd.png"},381:function(t,e,n){t.exports=n.p+"img/echidna.3db2aea.png"},382:function(t,e,n){t.exports=n.p+"img/emu.3a5643c.png"},383:function(t,e,n){t.exports=n.p+"img/falcon.0edbbb1.png"},384:function(t,e,n){t.exports=n.p+"img/grass.d96b386.png"},385:function(t,e,n){t.exports=n.p+"img/grasshopper.4d2a69f.png"},386:function(t,e,n){t.exports=n.p+"img/gumtree.9242bf1.png"},387:function(t,e,n){t.exports=n.p+"img/honey-eater.24c8b36.png"},388:function(t,e,n){t.exports=n.p+"img/kangaroo.324f538.png"},389:function(t,e,n){t.exports=n.p+"img/kookaburra.dd36c38.png"},390:function(t,e,n){t.exports=n.p+"img/lizard.24bf5dc.png"},391:function(t,e,n){t.exports=n.p+"img/magpie.af3f88e.png"},392:function(t,e,n){t.exports=n.p+"img/termite.75ec38c.png"},393:function(t,e,n){t.exports=n.p+"img/wattle.7530f6c.png"},394:function(t,e,n){t.exports=n.p+"img/wombat.96a101f.png"},409:function(t,e,n){"use strict";n.r(e);n(108),n(221),n(151),n(36),n(155),n(28);var r=n(283),o={data:function(){return{organisms:[{name:"wattle"},{name:"grass"},{name:"gumtree"},{name:"grasshopper",eats:["grass"]},{name:"termite",eats:["wattle","gumtree","grass"]},{name:"emu",eats:["grasshopper"]},{name:"echidna",eats:["termite"]},{name:"lizard",eats:["wattle"]},{name:"wombat",eats:["grass"]},{name:"kangaroo",eats:["grass"]},{name:"honey-eater",eats:["gumtree"]},{name:"magpie",eats:["termite","grasshopper"]},{name:"kookaburra",eats:["termite","lizard"]},{name:"falcon",eats:["lizard"]},{name:"dingo",eats:["echidna","emu"]}]}},mounted:function(){var t=this,data={nodes:this.organisms.map((function(t){return{id:t.name,label:t.name,shape:"circularImage",image:n(379)("./"+t.name+".png")}})),edges:this.organisms.map((function(t){return(t.eats||[]).map((function(e){return{from:t.name,to:e}}))})).reduce((function(a,b){return a.concat(b)}),[])};new r.Network(this.$el,data,{nodes:{color:{background:"white"}},edges:{color:"#49bd9a",width:4,arrows:"to"},layout:{hierarchical:{nodeSpacing:10,levelSeparation:120,sortMethod:"directed",shakeTowards:"leaves"}}}).on("select",(function(e){var n=t.organisms.find((function(t){return"grasshopper"==t.name}));-1!=e.nodes.indexOf(n.eats[0])&&t.$parent.$emit("complete")}))}},l=n(26),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"interactive"})}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("InteractivePage",{attrs:{title:"Plants and animals <em>eat each other</em>",subtitle:"Food webs",instructions:"Find the grasshopper's food",next:"../../processes/"}},[e("FoodWebInteractive")],1)},o=[]},458:function(t,e,n){"use strict";n.r(e);var r=n(420),o=n(267);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);var c=n(26),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{FoodWebInteractive:n(409).default,InteractivePage:n(205).default})}}]);
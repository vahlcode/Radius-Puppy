(this["webpackJsonpborder-radius-app"]=this["webpackJsonpborder-radius-app"]||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.a0a914c4.svg"},27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),l=(a(32),a(2)),i=a(3),s=a(5),u=a(4),m=a(13),d=a(6),p=(a(33),a(20),a(1)),h=a(14),f=(a(34),a(35),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={role:e.role,state:e.state,text:e.children,radius:e.radius},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.role,t=this.state.state,a=this.state.text;return r.a.createElement("button",{className:"".concat(e," ").concat(t," button")},a)}}]),a}(n.Component));f.defaultProps={role:"get-code",state:"normal",text:"Get started",radius:!0};var g=f,b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showThemes:!1,themes:["linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)","linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)","linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)","linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)","linear-gradient(to right, #43e97b 0%, #38f9d7 100%)","#1673ff"],logo:e.logo},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.querySelector(".switch-background").addEventListener("click",(function(t){e.setState(Object(p.a)(Object(p.a)({},e.state),{},{showThemes:!e.state.showThemes}))}));for(var t=document.querySelectorAll(".themes button"),a=0;a<t.length;a++)t[a].addEventListener("click",(function(e){var t=e.target.dataset.color;document.documentElement.style.setProperty("--app-background",t)}))}},{key:"render",value:function(){var e=this.state.showThemes,t=this.state.themes,a=this.state.logo,n=window.innerHeight;return r.a.createElement("header",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"branding"},r.a.createElement("img",{src:a,alt:"Logo"})),r.a.createElement("div",{className:"cta"},r.a.createElement(g,{role:"switch-background",state:"icon"},r.a.createElement("span",{className:"icon icon-moondroplet"})),r.a.createElement(g,{role:"get-code",state:"icon"},r.a.createElement("span",{className:"icon icon-moonterminal"})))),r.a.createElement("div",{className:"themes",style:{transform:e?"translateY(0)":"translateY(-".concat(n,"px)")}},t.map((function(e,t){return r.a.createElement("button",{"data-color":e,style:{background:e},key:t})}))))}}]),a}(n.Component),v=(a(36),a(37),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"})}}]),a}(n.Component)),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(v,null))}}]),a}(n.Component),y=(a(38),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:"right"},r.a.createElement("div",{className:"radius-slider"},r.a.createElement("div",{className:"input-group"},r.a.createElement("h6",null,"Top left"),r.a.createElement("input",{type:"range",min:"0",max:"1000",step:"0.5",id:"top-left"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("h6",null,"Top right"),r.a.createElement("input",{type:"range",min:"0",max:"1000",step:"0.5",id:"top-right"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("h6",null,"Bottom right"),r.a.createElement("input",{type:"range",min:"0",max:"1000",step:"0.5",id:"bottom-right"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("h6",null,"Bottom left"),r.a.createElement("input",{type:"range",min:"0",max:"1000",step:"0.5",id:"bottom-left"}))),r.a.createElement("div",{className:"app-size"},r.a.createElement("span",{className:"info"},"This attributes are for prototypes only. They are not included in the final generated code."),r.a.createElement("div",{className:"input-group"},r.a.createElement("h6",null,"Element height"),r.a.createElement("input",{type:"range",min:"100",max:"400",step:"0.5",id:"app-height"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("h6",null,"Element width"),r.a.createElement("input",{type:"range",min:"100",max:"400",step:"0.5",id:"app-width"}))))}}]),a}(n.Component)),O=a(24),j=a.n(O),w=(a(39),a(40),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showCode:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.querySelector(".get-code").addEventListener("click",(function(){return e.setState(Object(p.a)(Object(p.a)({},e.state),{},{showCode:!e.state.showCode}))})),j.a.highlightAll()}},{key:"render",value:function(){var e,t=this.state.showCode;if(JSON.parse(localStorage.getItem("radius"))){var a=JSON.parse(localStorage.getItem("radius")),n=a.BOTTOM_LEFT,o=a.BOTTOM_RIGHT,c=a.TOP_RIGHT,l=a.TOP_LEFT;e=".app {\n\tborder-top-left-radius: ".concat(l,";\n            \n\tborder-top-right-radius: ").concat(c,";\n            \n\tborder-bottom-right-radius: ").concat(o,";\n            \n\tborder-bottom-left-radius: ").concat(n,";\n}")}return r.a.createElement("div",{className:"code",style:{transform:t?"translateY(0)":"translateY(100%)"}},r.a.createElement("pre",{className:"line-numbers language-css "},r.a.createElement("code",{className:"language-css"},e)),r.a.createElement(g,{role:"copy-code",state:"normal"},r.a.createElement("span",{className:"icon icon-mooncopy"})," Copy Code"))}}]),a}(n.Component)),S=(a(41),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={show:e.show,text:e.children},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.show;this.setState(Object(p.a)(Object(p.a)({},this.state),{},{show:t}))}},{key:"render",value:function(){var e=this.state.show,t=this.state.text;return r.a.createElement("div",{className:"alert",style:{transform:e?"translateX(0)":"translateX(200%)"}},t)}}]),a}(n.Component)),T=(a(42),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loaded:e.loaded},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)(Object(p.a)({},this.state),{},{loaded:e.loaded}))}},{key:"render",value:function(){var e=this.state.loaded;return r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"border",style:{display:e?"none":"inline-block"}}),"Loading.. Please Wait!"),r.a.createElement("div",{className:"pattern"}))}}]),a}(n.Component)),x=a(25),N=a.n(x),k=a(51),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showAlert:!1},n.tl=new k.b({delay:.5}),n.copyColor=n.copyColor.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("main"),a=document.querySelector("aside"),n=document.querySelector(".preloader"),r=document.querySelector(".loader");setTimeout((function(){e.tl.fromTo(n,1.2,{xPercent:0,ease:k.a},{xPercent:100,ease:k.a}).to(r,1.2,{css:{display:"none"}},.1).from(t,1.2,{x:-window.innerWidth,ease:k.a},1).from(a,1.2,{x:window.innerWidth,ease:k.a},2)}),1500),localStorage.getItem("radius")||localStorage.setItem("radius",JSON.stringify({TOP_LEFT:"100px",TOP_RIGHT:"100px",BOTTOM_RIGHT:"100px",BOTTOM_LEFT:"100px"}));var o=document.querySelector("#top-left"),c=document.querySelector("#top-right"),l=document.querySelector("#bottom-left"),i=document.querySelector("#bottom-right"),s=document.querySelector(".tool-tip");o.addEventListener("input",(function(e){var t=Math.floor(e.target.value)+"px";document.documentElement.style.setProperty("--border-top-left-radius",t);var a=JSON.parse(localStorage.getItem("radius")),n=Object(p.a)(Object(p.a)({},a),{},{TOP_LEFT:t});localStorage.setItem("radius",JSON.stringify(n)),s.innerHTML=t,e.target.addEventListener("mousemove",(function(e){s.setAttribute("style","top: ".concat(e.pageY-s.offsetHeight-20,"px; left: ").concat(e.pageX-s.offsetHeight/2,"px"))}))})),c.addEventListener("input",(function(e){var t=Math.floor(e.target.value)+"px";document.documentElement.style.setProperty("--border-top-right-radius",t);var a=JSON.parse(localStorage.getItem("radius")),n=Object(p.a)(Object(p.a)({},a),{},{TOP_RIGHT:t});localStorage.setItem("radius",JSON.stringify(n)),s.innerHTML=t,e.target.addEventListener("mousemove",(function(e){s.setAttribute("style","top: ".concat(e.pageY-s.offsetHeight-20,"px; left: ").concat(e.pageX-s.offsetHeight/2,"px"))}))})),l.addEventListener("input",(function(e){var t=Math.floor(e.target.value)+"px";document.documentElement.style.setProperty("--border-bottom-left-radius",t);var a=JSON.parse(localStorage.getItem("radius")),n=Object(p.a)(Object(p.a)({},a),{},{BOTTOM_LEFT:t});localStorage.setItem("radius",JSON.stringify(n)),s.innerHTML=t,e.target.addEventListener("mousemove",(function(e){s.setAttribute("style","top: ".concat(e.pageY-s.offsetHeight-20,"px; left: ").concat(e.pageX-s.offsetHeight/2,"px"))}))})),i.addEventListener("input",(function(e){var t=Math.floor(e.target.value)+"px";document.documentElement.style.setProperty("--border-bottom-right-radius",t);var a=JSON.parse(localStorage.getItem("radius")),n=Object(p.a)(Object(p.a)({},a),{},{BOTTOM_RIGHT:t});localStorage.setItem("radius",JSON.stringify(n)),s.innerHTML=t,e.target.addEventListener("mousemove",(function(e){s.setAttribute("style","top: ".concat(e.pageY-s.offsetHeight-20,"px; left: ").concat(e.pageX-s.offsetHeight/2,"px"))}))}));var u=document.querySelector("#app-height"),m=document.querySelector("#app-width");u.addEventListener("input",(function(e){var t=Math.floor(e.target.value)+"px";document.documentElement.style.setProperty("--app-height",t),s.innerHTML=t,e.target.addEventListener("mousemove",(function(e){s.setAttribute("style","top: ".concat(e.pageY-s.offsetHeight-20,"px; left: ").concat(e.pageX-s.offsetHeight/2,"px"))}))})),m.addEventListener("input",(function(e){var t=Math.floor(e.target.value)+"px";document.documentElement.style.setProperty("--app-width",t),s.innerHTML=t,e.target.addEventListener("mousemove",(function(e){s.setAttribute("style","top: ".concat(e.pageY-s.offsetHeight-20,"px; left: ").concat(e.pageX-s.offsetHeight/2,"px"))}))})),document.querySelector(".copy-code").addEventListener("click",(function(t){var a=document.querySelector(".code pre");e.copyColor(a),setTimeout((function(){return e.setState(Object(p.a)(Object(p.a)({},e.state),{},{showAlert:!1}))}),5e3)}))}},{key:"copyColor",value:function(e){var t;window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),document.selection?((t=document.body.createTextRange()).moveToElementText(e),t.select().createTextRange(),document.execCommand("copy"),this.setState(Object(p.a)(Object(p.a)({},this.state),{},{showAlert:!0}))):window.getSelection&&((t=document.createRange()).selectNode(e),window.getSelection().addRange(t),document.execCommand("copy"),this.setState(Object(p.a)(Object(p.a)({},this.state),{},{showAlert:!0})))}},{key:"render",value:function(){var e=this.state.showAlert;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"tool-tip"}),r.a.createElement(T,null),r.a.createElement(b,{logo:N.a}),r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(S,{show:e},"Copied! ! ",r.a.createElement("span",{role:"img","aria-label":"congratulations!"},"\ud83c\udf89")))}}]),a}(r.a.Component),H=Object(d.f)(L),C=(a(47),a(15)),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("h1",null,"Easily Create Beautiful and Decorative Elements For Your Applications with Border Radius."),r.a.createElement(m.b,{to:"/app"},r.a.createElement(g,{onClick:this.goToApp},"Get Started")),r.a.createElement("div",{className:"social-media"},r.a.createElement("span",null,"Made with ",r.a.createElement("span",{className:"icon icon-moonheart"})," by Valentine Elum"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/vahlcode"},r.a.createElement("span",{className:"icon icon-moontwitter"}))),r.a.createElement("li",null,r.a.createElement(C.a,{href:"https://github.com/vahlcode/Radius-puppy","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-show-count":"true","aria-label":"Star vahlcode/Radius-puppy on GitHub"},"Star")),r.a.createElement("li",null,r.a.createElement(C.a,{href:"https://github.com/vahlcode","data-color-scheme":"no-preference: light; light: light; dark: dark;","aria-label":"Follow @vahlcode on GitHub"},"Follow @vahlcode")),r.a.createElement("li",null,r.a.createElement(C.a,{href:"https://github.com/vahlcode/Radius-puppy/fork","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-show-count":"true","aria-label":"Fork vahlcode/Radius-puppy on GitHub"},"Fork")))))}}]),a}(n.Component),I=Object(d.f)(M),P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:I}),r.a.createElement(d.a,{path:"/app",component:H})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c7ebadf2.chunk.js.map
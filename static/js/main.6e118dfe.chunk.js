(this["webpackJsonpmy-react-blog"]=this["webpackJsonpmy-react-blog"]||[]).push([[0],{101:function(e,t,a){e.exports=a(186)},110:function(e,t,a){var n={"./blog":67,"./blog.js":67,"./contact-us":68,"./contact-us.js":68,"./home":80,"./home.js":80,"./login":79,"./login.js":79};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=110},111:function(e,t,a){e.exports=a.p+"static/media/bg1.62ce8ed2.jpg"},112:function(e,t,a){e.exports=a.p+"static/media/bg2.e9874232.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/bg3.35976950.jpg"},114:function(e,t,a){e.exports=a.p+"static/media/bg4.d899ba9f.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/img01_b.606da62a.png"},116:function(e,t,a){e.exports=a.p+"static/media/img02_b.3095b936.png"},117:function(e,t,a){e.exports=a.p+"static/media/img03_b.275b4f89.png"},118:function(e,t,a){e.exports=a.p+"static/media/img04_b.44b6fa23.png"},119:function(e,t,a){e.exports=a.p+"static/media/img05_b.f83fad29.png"},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=a(43),s=a(26),l=a(189),m=[{title:"Home",path:"/"},{title:"blog",path:"/blog"},{title:"Contact Us",path:"/contact-us"},{title:"Login",path:"/login"}];function u(e){var t=e.user,a=Object(n.useState)(!1),c=Object(i.a)(a,2),o=c[0],u=c[1];return r.a.createElement("nav",{className:"site-navigation"},r.a.createElement("span",{className:"menu-title"},"My React Blog"),r.a.createElement("div",{className:"menu-content-container ".concat(o&&"active")},r.a.createElement("ul",null,m.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.b,{to:e.path},e.title))}))),r.a.createElement("span",{className:"menu-avatar-container"},r.a.createElement(l.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",size:38}),r.a.createElement("span",{className:"menu-avatar-name"},"".concat(t.firstName," ").concat(t.lastName)))),r.a.createElement("i",{className:"ionicons icon ion-ios-menu",onClick:function(){return u(!o)}}))}var g=a(5);function p(){return function(e){try{return r.a.createElement(a(110)("./".concat(e)).default)}catch(t){return console.warn(t),r.a.createElement((function(){return 404}))}}(Object(g.g)().params.page)}var f=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,{user:{firstName:"HS",lastName:"Coder"}}),r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/:page",component:p}),r.a.createElement(g.b,{path:"/",render:function(){return r.a.createElement(g.a,{to:"/home"})}}),r.a.createElement(g.b,{component:function(){return 404}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(183),a(184),a(185);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("div",null,"Blog")}},68:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("div",null,"ContactUs")}},69:function(e,t,a){var n={"./bg1.jpg":111,"./bg2.jpg":112,"./bg3.jpg":113,"./bg4.jpg":114,"./img01_b.png":115,"./img02_b.png":116,"./img03_b.png":117,"./img04_b.png":118,"./img05_b.png":119};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=69},79:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("div",null,"Login")}},80:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(53),r=a(0),c=a.n(r),o=a(65);function i(e){var t=e.post,n=e.tagsOnTop,r=window.innerWidth,i={backgroundImage:'url("'.concat(a(69)("./".concat(t.image)),'")')},s=r>900?Object(o.a)(Object(o.a)({},i),t.style):i;return c.a.createElement("a",{className:"masonry-post overlay",style:s,href:t.link},c.a.createElement("div",{className:"image-text",style:{justifyContent:n?"space-between":"flex-end"}},c.a.createElement(f,{tags:t.categories}),c.a.createElement("div",null,c.a.createElement("h2",{className:"image-title"},t.title),c.a.createElement("span",{className:"image-date"},t.date))))}function s(e){var t=e.posts,a=e.columns,n=e.tagsOnTop;return c.a.createElement("section",{className:"masonry",style:{gridTemplateColumns:"repeat(".concat(a,", minmax(275px, 1fr)))")}},t.map((function(e,t){return c.a.createElement(i,{post:e,index:t,tagsOnTop:n,key:t})})))}var l=a(43),m=a(26),u=a(187);function g(e){var t=e.posts,n=Object(r.useState)(9),o=Object(l.a)(n,2),i=o[0],s=o[1],g=Object(r.useState)(1),p=Object(l.a)(g,2),d=p[0],b=p[1],E=Object(r.useMemo)((function(){var e=d*i,a=e-i;return t.slice(a,e)}),[d,i,t]);return Object(r.useEffect)((function(){window.scroll({top:"500",left:"0",behavior:"smooth"})}),[d,i]),c.a.createElement("section",{className:"grid-pagination-container"},c.a.createElement("section",{className:"post-grid container"},E.map((function(e,t){return c.a.createElement("div",{className:"post-container"},c.a.createElement("figure",null,c.a.createElement(m.b,{to:e.link},c.a.createElement("img",{src:a(69)("./".concat(e.image)),alt:e.image}))),c.a.createElement(f,{tags:e.categories}),c.a.createElement("h2",null,e.title),c.a.createElement("p",{className:"author-text"},c.a.createElement("span",null,"By:",c.a.createElement(m.b,{to:"/authors/".concat(e.author)},e.author)),c.a.createElement("span",null,"- ",e.date)),c.a.createElement("p",{className:"description-text"},e.description),c.a.createElement(m.b,{to:e.link},"Read More..."))}))),c.a.createElement(u.a,{simple:!0,showSizeChanger:!0,onShowSizeChange:s,pageSize:i,total:t.length,defaultCurrent:d,onChange:b}))}var p={"Tech Culture":"rgb(255, 59, 48)","Tech News":"rgb(0, 113, 164)","Brain Health":"rgb(255, 45, 85)",Vue:"rgb(52, 199, 89)",React:"rgb(64, 156, 255)",JavaScript:"rgb(255, 179, 64)",Cloud:"rgb(175, 82, 250)"};function f(e){var t=e.tags;return c.a.createElement("div",{className:"tags-container"},t.map((function(e,t){return c.a.createElement("span",{key:t,className:"tag",style:{backgroundColor:p[e]}},e.toUpperCase())})))}var d=a(18),b=a.n(d),E=[{title:"Software Engineer Salary in 2020",date:b()().format("YYYY-MM-DD"),categories:["Tech Culture"],link:"#",image:"img01_b.png"},{title:"GraphQL vs REST",date:b()().format("YYYY-MM-DD"),categories:["React","JavaScript"],link:"#",image:"img02_b.png"},{title:"A Day in the Life of a Programmer",date:b()().format("YYYY-MM-DD"),categories:["Tech Culture"],link:"#",image:"img03_b.png"},{title:"Brain Hacks for learning to program",date:b()().format("YYYY-MM-DD"),categories:["Brain Health"],link:"#",image:"img04_b.png"},{title:"React vs Vue",date:b()().format("YYYY-MM-DD"),categories:["React","Vue"],link:"#",image:"img05_b.png"}],h=[{title:"Can anyone code?",date:b()().format("YYYY-MM-DD"),categories:["Tech Culture","Tech News"],link:"#",image:"bg1.jpg"},{title:"Using AWS S3 for Storing Blog Images",date:b()().format("YYYY-MM-DD"),categories:["Cloud"],link:"#",image:"bg2.jpg"},{title:"Popular Programming Languages in 2020",date:b()().format("YYYY-MM-DD"),categories:["Tech News","Tech Culture"],link:"#",image:"bg3.jpg"},{title:"Brain Hacks for Learning to Program",date:b()().format("YYYY-MM-DD"),categories:["Brain Health"],link:"#",image:"bg4.jpg"}],v=function(e,t){e.forEach((function(e,a){e.style=t[a],e.author="HS Coder",e.description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."}))},N=[].concat(Object(n.a)(E),Object(n.a)(h),Object(n.a)(h));v(E,{1:{gridArea:"1 / 2 / 3 / 3"}}),v(h,{0:{gridArea:"1 / 1 / 2 / 3",height:"300px"},1:{height:"300px"},3:{height:"630px",marginLeft:"30px",width:"630px"}});var Y=h.pop();function j(){return c.a.createElement("main",{className:"home"},c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("section",{className:"featured-posts-container"},c.a.createElement(s,{posts:h,columns:2,tagsOnTop:!0}),c.a.createElement(i,{post:Y,tagsOnTop:!0})))),c.a.createElement("section",{className:"bg-white"},c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",null,"Recent Posts"),c.a.createElement(g,{posts:N})))),c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(s,{posts:E,colums:3}))))}}},[[101,1,2]]]);
//# sourceMappingURL=main.6e118dfe.chunk.js.map
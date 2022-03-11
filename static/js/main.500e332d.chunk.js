(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(11),i=n.n(c),r=(n(35),n(36),n(12)),o=n(13),d=n(14),l=n(17),u=n(70),h=n(71),j=n(67),b=n(68),m=n(69),g=n(1),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={subject:"",email:"",message:""},a}return Object(o.a)(n,[{key:"handleSubmit",value:function(e,t,n){n&&(t||(t="Hello!"),window.location.href="mailto:joeybergermusic@gmail.com?subject=".concat(t,"&body=").concat(this.state.message))}},{key:"render",value:function(){var e=this;return Object(g.jsx)(j.a,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"subject",value:this.state.subject,onChange:this.onNameChange.bind(this)})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Message"}),Object(g.jsx)("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(g.jsx)("button",{className:"btn btn-primary submit-button",onClick:function(t){e.handleSubmit(t,e.state.subject,e.state.message)},children:"Submit"})]})})})})}},{key:"onNameChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),n}(s.a.Component),f={software:{header:"Software Engineer",listContent:["Experience in React, Node JS, MongoDB, Swift, C++, C#, Python, Solidity.","Software engineer in the gaming industry with 10 years experience, working for major manufacturers like IGT and Microgaming.","Designed math models for several successful slot games.","iOS developer for personal projects and clients. Guitar Mult and Old EKG among apps I have engineered.","I love to build, run and test!"],mediaLinks:["https://www.youtube.com/watch?v=lE82TdaYKkQ","https://www.youtube.com/watch?v=Fwn1hTJ-05w&t","https://www.youtube.com/watch?v=CI4QAZSd-8w&t","https://www.youtube.com/watch?v=a2kD_QdWtaI&t"]},sound:{header:"Composition And Sound Design",listContent:["I have composed music and sound design for over 200 released products in the slot machine and iOS industry.","I curtail sound for optimal exerience while coding reactive scenarios to heigten player experience. Code and sound goes hand in hand!","I have an equisite taste for timing and I love creating the perfect musical landscape for successful products!"],mediaLinks:["https://soundcloud.com/joeybergermusic/thegunslinger-stephenking-sound-design-by-joey-berger","https://www.youtube.com/watch?v=B6OCikGPa3A","https://www.youtube.com/watch?v=sWncFLJAJbI","https://www.youtube.com/watch?v=1f3tIzJtdbo"]},guitar:{header:"Guitarist/Teacher",listContent:["Professional musician for 17 years, playing across the US as a hired musician.","Adjunct Faculty at the University of Nevada, Reno for 12 years."]}},O=n(22),p=n.n(O),v=n(23),w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).scrollToDiv=function(e,t){e.preventDefault();var n=document.getElementById(t),s=t.includes("contact")?0:a.containerPadding;window.scrollTo({top:n.offsetTop-s,left:0,behavior:"smooth"}),a.setNavBarExpanded(void 0,!1)},a.setNavBarExpanded=function(e,t){e&&e.preventDefault(),a.setState((function(){return{expanded:t}}))},a.state={expanded:!1},a.containerPadding=50;var s=v.isMobile?.7*window.innerWidth:500;return a.reactPlayerDimensions={width:"".concat(s,"px"),height:.75*s},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"container-xs",children:[Object(g.jsxs)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",expanded:this.state.expanded,children:[Object(g.jsx)(u.a.Brand,{children:"Joey Berger"}),Object(g.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(t){return e.setNavBarExpanded(t,!e.state.expanded)}}),Object(g.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsx)(h.a,{className:"mr-auto"}),Object(g.jsxs)(h.a,{children:[Object(g.jsx)(h.a.Link,{onClick:function(t){e.scrollToDiv(t,"software")},children:"Software Engineer"}),Object(g.jsx)(h.a.Link,{onClick:function(t){e.scrollToDiv(t,"sound")},children:"Composition/Sound Design"}),Object(g.jsx)(h.a.Link,{onClick:function(t){e.scrollToDiv(t,"guitar")},children:"Guitarist"}),Object(g.jsx)(h.a.Link,{onClick:function(t){e.scrollToDiv(t,"contact")},children:"Contact"})]})]})]}),Object(g.jsxs)("div",{className:"image-container",children:[Object(g.jsx)("div",{className:"background-img ".concat(v.isMobile?"mobile-source":""," fade-in")}),Object(g.jsx)(j.a,{className:"centered",children:Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(m.a,{sm:12,lg:12,className:"d-none d-xl-block centered",children:["Joey Berger",Object(g.jsx)("div",{className:"header-subtext",children:"Software Engineer - Sound Designer - Composer - Guitarist"})]}),Object(g.jsxs)(m.a,{sm:12,lg:12,className:"d-none d-lg-block d-xl-none centered-lg",children:["Joey Berger",Object(g.jsx)("div",{className:"header-subtext",children:"Software Engineer - Sound Designer - Composer - Guitarist"})]}),Object(g.jsxs)(m.a,{sm:12,lg:12,className:"d-none d-md-block d-lg-none centered-md",children:["Joey Berger",Object(g.jsx)("div",{className:"header-subtext-md",children:"Software Engineer - Sound Designer - Composer - Guitarist"})]}),Object(g.jsx)(m.a,{xs:12,className:"d-none d-sm-block d-md-none centered-sm",children:"Joey Berger"}),Object(g.jsx)(m.a,{xs:12,className:"d-none d-xs-block d-sm-none centered-xs",children:"Joey Berger"})]})})]}),Object(g.jsxs)("div",{className:"scrollable-container",children:[Object(g.jsx)(j.a,{fluid:!0,className:"info-container white-background",id:"software",style:{padding:"".concat(this.containerPadding,"px")},children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(m.a,{md:{span:11,offset:1},children:[Object(g.jsx)("h1",{children:f.software.header}),Object(g.jsx)("ul",{children:f.software.listContent.map((function(e){return Object(g.jsx)("li",{children:e},e)}))}),Object(g.jsx)(j.a,{children:Object(g.jsx)(b.a,{className:"media-container",children:f.software.mediaLinks.map((function(t){return Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a,{url:t,width:e.reactPlayerDimensions.width,height:e.reactPlayerDimensions.height,controls:!0,className:"media"})},t)}))})})]})})}),Object(g.jsx)(j.a,{fluid:!0,className:"info-container",id:"sound",style:{padding:"".concat(this.containerPadding,"px")},children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(m.a,{md:{span:11,offset:1},children:[Object(g.jsx)("h1",{children:f.sound.header}),Object(g.jsx)("ul",{children:f.sound.listContent.map((function(e){return Object(g.jsx)("li",{children:e},e)}))}),Object(g.jsx)(j.a,{children:Object(g.jsx)(b.a,{className:"media-container",children:f.sound.mediaLinks.map((function(t){return Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a,{url:t,width:e.reactPlayerDimensions.width,height:e.reactPlayerDimensions.height,className:"media"})},t)}))})})]})})}),Object(g.jsx)(j.a,{fluid:!0,className:"info-container white-background",id:"guitar",style:{padding:"".concat(this.containerPadding,"px")},children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(m.a,{md:{span:11,offset:1},children:[Object(g.jsx)("h1",{children:f.guitar.header}),Object(g.jsx)("ul",{children:f.guitar.listContent.map((function(e){return Object(g.jsx)("li",{children:e},e)}))})]})})}),Object(g.jsx)("h1",{className:"contact-header",id:"contact",children:"Contact"}),Object(g.jsx)("div",{id:"contact",className:"contact-container",children:Object(g.jsx)(x,{})})]})]})}}]),n}(s.a.Component);n(64);var y=function(){return Object(a.useEffect)((function(){document.title="Joey Berger"}),[]),Object(g.jsx)("div",{children:Object(g.jsx)(w,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),k()}},[[65,1,2]]]);
//# sourceMappingURL=main.500e332d.chunk.js.map
(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(11),c=n.n(s),o=(n(35),n(36),n(12)),r=n(13),l=n(14),d=n(17),h=n(70),u=n(71),g=n(67),j=n(68),b=n(69),m=n(1),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={subject:"",email:"",message:""},a}return Object(r.a)(n,[{key:"handleSubmit",value:function(e,t,n){n&&(t||(t="Hello!"),window.location.href="mailto:joeybergermusic@gmail.com?subject=".concat(t,"&body=").concat(this.state.message))}},{key:"render",value:function(){var e=this;return Object(m.jsx)(g.a,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"subject",value:this.state.subject,onChange:this.onNameChange.bind(this)})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Message"}),Object(m.jsx)("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(m.jsx)("button",{className:"btn btn-primary submit-button",onClick:function(t){e.handleSubmit(t,e.state.subject,e.state.message)},children:"Submit"})]})})})})}},{key:"onNameChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),n}(i.a.Component),A={software:{header:"Software Engineer",listContent:["Experience in React, Node JS, MongoDB, Swift, C++, C#, Python, Solidity.","Software engineer in the gaming industry with 10 years experience, working for major manufacturers like IGT and Microgaming.","Designed math models for several successful slot games.","iOS developer for personal projects and clients. Guitar Mult and Old EKG among apps I have engineered.","I love to build, run and test!"],mediaLinks:["https://www.youtube.com/watch?v=lE82TdaYKkQ","https://www.youtube.com/watch?v=Fwn1hTJ-05w&t","https://www.youtube.com/watch?v=CI4QAZSd-8w&t","https://www.youtube.com/watch?v=a2kD_QdWtaI&t"]},sound:{header:"Composition And Sound Design",listContent:["I have composed music and sound design for over 200 released products in the slot machine and iOS industry.","I curtail sound for optimal exerience while coding reactive scenarios to heigten player experience. Code and sound goes hand in hand!","I have an equisite taste for timing and I love creating the perfect musical landscape for successful products!"],mediaLinks:["https://soundcloud.com/joeybergermusic/thegunslinger-stephenking-sound-design-by-joey-berger","https://www.youtube.com/watch?v=B6OCikGPa3A","https://www.youtube.com/watch?v=sWncFLJAJbI","https://www.youtube.com/watch?v=1f3tIzJtdbo"]},guitar:{header:"Guitarist/Teacher",listContent:["Professional musician for 17 years, playing across the US as a hired musician.","Adjunct Faculty at the University of Nevada, Reno for 12 years."]}},O=n(22),x=n.n(O),C=n(23),f=n.p+"static/media/github.ecf329c2.png",v=n.p+"static/media/linkedin.21f0f510.png",I=n.p+"static/media/guitar-mult.8159b2a8.png",w=n.p+"static/media/old-ekg.035f4d62.png",k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).scrollToDiv=function(e,t){e.preventDefault();var n=document.getElementById(t),i=t.includes("contact")?0:a.containerPadding;window.scrollTo({top:n.offsetTop-i,left:0,behavior:"smooth"}),a.setNavBarExpanded(void 0,!1)},a.setNavBarExpanded=function(e,t){e&&e.preventDefault(),a.setState((function(){return{expanded:t}}))},a.openTab=function(e,t){e.preventDefault(),window.open(t,"_blank")},a.state={expanded:!1},a.containerPadding=50;var i=C.isMobile?.7*window.innerWidth:500;return a.reactPlayerDimensions={width:"".concat(i,"px"),height:.75*i},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"container-xs",children:[Object(m.jsxs)(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",expanded:this.state.expanded,children:[Object(m.jsx)(h.a.Brand,{children:"Joey Berger"}),Object(m.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(t){return e.setNavBarExpanded(t,!e.state.expanded)}}),Object(m.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(u.a,{className:"mr-auto"}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(u.a.Link,{onClick:function(t){e.scrollToDiv(t,"software")},children:"Software Engineer"}),Object(m.jsx)(u.a.Link,{onClick:function(t){e.scrollToDiv(t,"sound")},children:"Composition/Sound Design"}),Object(m.jsx)(u.a.Link,{onClick:function(t){e.scrollToDiv(t,"guitar")},children:"Guitarist"}),Object(m.jsx)(u.a.Link,{onClick:function(t){e.scrollToDiv(t,"links")},children:"Links"}),Object(m.jsx)(u.a.Link,{onClick:function(t){e.scrollToDiv(t,"contact")},children:"Contact"})]})]})]}),Object(m.jsxs)("div",{className:"image-container",children:[Object(m.jsx)("div",{className:"background-img ".concat(C.isMobile?"mobile-source":""," fade-in")}),Object(m.jsx)(g.a,{className:"centered",children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{sm:12,lg:12,className:"d-none d-xl-block centered",children:["Joey Berger",Object(m.jsx)("div",{className:"header-subtext",children:"Software Engineer - Sound Designer - Composer - Guitarist"})]}),Object(m.jsxs)(b.a,{sm:12,lg:12,className:"d-none d-lg-block d-xl-none centered-lg",children:["Joey Berger",Object(m.jsx)("div",{className:"header-subtext",children:"Software Engineer - Sound Designer - Composer - Guitarist"})]}),Object(m.jsxs)(b.a,{sm:12,lg:12,className:"d-none d-md-block d-lg-none centered-md",children:["Joey Berger",Object(m.jsx)("div",{className:"header-subtext-md",children:"Software Engineer - Sound Designer - Composer - Guitarist"})]}),Object(m.jsx)(b.a,{xs:12,className:"d-none d-sm-block d-md-none centered-sm",children:"Joey Berger"}),Object(m.jsx)(b.a,{xs:12,className:"d-none d-xs-block d-sm-none centered-xs",children:"Joey Berger"})]})})]}),Object(m.jsxs)("div",{className:"scrollable-container",children:[Object(m.jsx)(g.a,{fluid:!0,className:"info-container white-background",id:"software",style:{padding:"".concat(this.containerPadding,"px")},children:Object(m.jsx)(j.a,{children:Object(m.jsxs)(b.a,{md:{span:11,offset:1},children:[Object(m.jsx)("h1",{children:A.software.header}),Object(m.jsx)("ul",{children:A.software.listContent.map((function(e){return e.includes("Guitar Mult")?Object(m.jsxs)("li",{children:["iOS developer for personal projects and clients. ",Object(m.jsx)("a",{href:"https://apps.apple.com/us/app/guitar-mult/id1533512980",children:"Guitar Mult"})," and ",Object(m.jsx)("a",{href:"https://apps.apple.com/us/app/old-ekg/id1448210793",children:"Old EKG"})," among apps I have engineered."]}):Object(m.jsx)("li",{children:e},e)}))}),Object(m.jsx)(g.a,{children:Object(m.jsx)(j.a,{className:"media-container",children:A.software.mediaLinks.map((function(t){return Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{url:t,width:e.reactPlayerDimensions.width,height:e.reactPlayerDimensions.height,controls:!0,className:"media"})},t)}))})})]})})}),Object(m.jsx)(g.a,{fluid:!0,className:"info-container",id:"sound",style:{padding:"".concat(this.containerPadding,"px")},children:Object(m.jsx)(j.a,{children:Object(m.jsxs)(b.a,{md:{span:11,offset:1},children:[Object(m.jsx)("h1",{children:A.sound.header}),Object(m.jsx)("ul",{children:A.sound.listContent.map((function(e){return Object(m.jsx)("li",{children:e},e)}))}),Object(m.jsx)(g.a,{children:Object(m.jsx)(j.a,{className:"media-container",children:A.sound.mediaLinks.map((function(t){return Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{url:t,width:e.reactPlayerDimensions.width,height:e.reactPlayerDimensions.height,className:"media"})},t)}))})})]})})}),Object(m.jsx)(g.a,{fluid:!0,className:"info-container white-background",id:"guitar",style:{padding:"".concat(this.containerPadding,"px")},children:Object(m.jsx)(j.a,{children:Object(m.jsxs)(b.a,{md:{span:11,offset:1},children:[Object(m.jsx)("h1",{children:A.guitar.header}),Object(m.jsx)("ul",{children:A.guitar.listContent.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})]})})}),Object(m.jsx)(g.a,{fluid:!0,className:"info-container",id:"links",style:{padding:"".concat(this.containerPadding,"px")},children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(b.a,{md:{span:11,offset:1},children:Object(m.jsx)("h1",{children:"Links"})}),Object(m.jsxs)(b.a,{md:{span:11,offset:2},className:"d-flex justify-content-start",children:[Object(m.jsx)("img",{src:f,alt:"Github",onClick:function(t){e.openTab(t,"https://github.com/joeyBerger/")}}),Object(m.jsx)("img",{src:v,alt:"LinkedIn",onClick:function(t){e.openTab(t,"https://www.linkedin.com/in/berger-joseph/")}}),Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAYAAABR/1EXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXGVYSWZNTQAqAAAACAAEAQYAAwAAAAEAAgAAARIAAwAAAAEAAQAAASgAAwAAAAEAAgAAh2kABAAAAAEAAAA+AAAAAAACoAIABAAAAAEAAACaoAMABAAAAAEAAACaAAAAAJXNYtkAAALkaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTU0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNTQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8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",alt:"UNR",onClick:function(t){e.openTab(t,"https://www.unr.edu/music/people/joey-berger")}})]}),Object(m.jsxs)(b.a,{style:{marginTop:"40px"},md:{span:11,offset:2},className:"d-flex justify-content-start",children:[Object(m.jsx)("img",{src:I,alt:"Guitar Mult",onClick:function(t){e.openTab(t,"https://apps.apple.com/us/app/guitar-mult/id1533512980/")}}),Object(m.jsx)("img",{src:w,alt:"Old EKG",onClick:function(t){e.openTab(t,"https://apps.apple.com/us/app/old-ekg/id1448210793/")}})]})]})}),Object(m.jsxs)("div",{className:"white-background contact-container",children:[Object(m.jsx)("h1",{className:"contact-header",id:"contact",children:"Contact"}),Object(m.jsx)("div",{id:"contact",children:Object(m.jsx)(p,{})})]})]})]})}}]),n}(i.a.Component);n(64);var N=function(){return Object(a.useEffect)((function(){document.title="Joey Berger"}),[]),Object(m.jsx)("div",{children:Object(m.jsx)(k,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),E()}},[[65,1,2]]]);
//# sourceMappingURL=main.4f728e1b.chunk.js.map
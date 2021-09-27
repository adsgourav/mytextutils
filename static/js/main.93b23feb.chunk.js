(this.webpackJsonpmytextutils=this.webpackJsonpmytextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),l=a.n(r),o=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h1",{className:"mb-4",children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",value:n,id:"myBox",style:{backgroundColor:"dark"===e.mode?"#1a3a53":"white",color:"dark"===e.mode?"white":"black"},rows:"8",onChange:function(e){r(e.target.value)},placeholder:"Enter Text Here"})}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"#00508f":"#0d6efd"},onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Convert to Uppercase","success")},children:"Convert to Uppercase"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"#00508f":"#0d6efd"},onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Convert to Lowercase","success")},children:"Convert to Lowercase"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"#00508f":"#0d6efd"},onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Copy to Clipboard","info")},children:"Copy Text"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"#00508f":"#0d6efd"},onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Remove Extra Spaces","success")},children:"Remove Extra Spaces"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"#00508f":"#0d6efd"},onClick:function(){r("")},children:"Clear All"})]}),Object(s.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h1",{children:"Your Text Summary"}),Object(s.jsx)("p",{children:Object(s.jsxs)("b",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," WORDS - ",n.length," CHARACTERS"]})})]})]})}i.defaultProps={title:"Set title here",aboutText:"set about here"};var b=function(e){return Object(s.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(s.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(s.jsx)("strong",{children:e.alert.msg})})})};var m=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),l=Object(o.a)(r,2),m=l[0],u=l[1],h=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",aboutText:"About TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",h("Dark Mode Enabled","success")):(n("light"),document.body.style.backgroundColor="#ddecea",h("Light Mode Enabled","success"))}}),Object(s.jsx)(b,{alert:m}),Object(s.jsx)(d,{heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:a,showAlert:h})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),r(e),l(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.93b23feb.chunk.js.map
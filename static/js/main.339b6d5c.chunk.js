(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),r=a.n(o),l=a(1),i=a(13),u=a(14),s=(a(60),a(61),function(e){var t=e.name;return c.a.createElement("div",{className:"Navlink"},c.a.createElement(i.b,{to:"/".concat(t),className:"Navlink__link"},"".concat(t)))}),m=function(){return c.a.createElement("header",{className:"Navbar"},c.a.createElement("section",{className:"logo-box"},c.a.createElement(i.b,{to:"/Home",className:"logo-link"},c.a.createElement("div",{className:"logo-icon"}),c.a.createElement("div",{className:"logo-name"},"faceblur"))),c.a.createElement("section",{className:"navigation-box"},c.a.createElement("div",{className:"navigation-link"},c.a.createElement(s,{name:"Home"})),c.a.createElement("div",{className:"navigation-link"},c.a.createElement(s,{name:"About"})),c.a.createElement("div",{className:"navigation-link"},c.a.createElement(s,{name:"Register"})),c.a.createElement("div",{className:"navigation-link"},c.a.createElement(s,{name:"Login"}))))},d=a(23),g=a(24),h=a(26),p=a(25),E=a(27),b=(a(63),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"Home"},c.a.createElement("div",{className:"display"},c.a.createElement("div",{className:"display__box"},c.a.createElement("h1",{className:"display__box--description"},"Come and Anonymize Your Photos with Machine Learning and AI"),c.a.createElement(i.b,{to:"/Faceblur",className:"display__box--button"},"Try It Now!"))))}}]),t}(c.a.Component)),f=function(){return c.a.createElement("div",{className:"About"},"About Linkage")},v=function(e){var t=e.handleRegisterSubmit,a=e.handleRegisterNameChange,n=e.handleRegisterEmailChange,o=e.handleRegisterPasswordChange,r=Object(l.c)(function(e){return e.registerName}),i=Object(l.c)(function(e){return e.registerEmail}),u=Object(l.c)(function(e){return e.registerPassword});return c.a.createElement("div",{className:"Register"},c.a.createElement("h1",null,"Something register"),c.a.createElement("form",{onSubmit:t},c.a.createElement("div",{className:"form__field"},c.a.createElement("label",{className:"form__label"},"Name"),c.a.createElement("input",{type:"text",value:r,onChange:a,placeholder:"name"})),c.a.createElement("div",{className:"form__field"},c.a.createElement("label",{className:"form__label"},"Name"),c.a.createElement("input",{type:"text",value:i,onChange:n,placeholder:"email"})),c.a.createElement("div",{className:"form__field"},c.a.createElement("label",{className:"form__label"},"Name"),c.a.createElement("input",{type:"password",value:u,onChange:o,placeholder:"password"})),c.a.createElement("button",{type:"submit"},"REGISTER \u2192")))},_=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Login"))}}]),t}(c.a.Component),N=a(50),y=(a(64),function(e){var t=e.bound,a=Object(l.c)(function(e){return e.imageDimensions.height}),n=Object(l.c)(function(e){return e.imageDimensions.width}),o={top:t.top_row*a,left:t.left_col*n,bottom:t.bottom_row*a,right:t.right_col*n},r={top:o.top,left:o.left,bottom:o.bottom,right:o.right,height:o.bottom-o.top,width:o.right-o.left},i=Object(l.c)(function(e){return e.radioOption});return c.a.createElement("div",{className:"BoundingBox",style:Object(N.a)({},r,{border:".3rem solid black"},{backgroundColor:"black",borderRadius:"50%"}),onClick:function(){console.log("the bounding box was clicked"),console.log("radio option is ".concat(i," and ").concat(typeof i))}})}),A=(a(65),function(e){var t=e.boundingBoxes,a={height:Object(l.c)(function(e){return e.imageDimensions.height}),width:Object(l.c)(function(e){return e.imageDimensions.width})};return c.a.createElement("div",{className:"BoundingBoxes",style:a},function(e){return e.map(function(e,t){return c.a.createElement(y,{key:t,bound:e})})}(t))}),O=(a(66),function(e){var t=e.handleSubmit,a=e.handleChange,n=Object(l.c)(function(e){return e.input}),o=Object(l.c)(function(e){return e.imageURL}),r=Object(l.c)(function(e){return e.faceData});console.log(r);var i=r.map(function(e){return e.region_info.bounding_box}),u=Object(l.c)(function(e){return e.radioOption});console.log("the current radio option is ".concat(u));return c.a.createElement("main",{className:"Faceblur"},c.a.createElement("section",{className:"Faceblur__options"},c.a.createElement("h1",null,"https://i.ytimg.com/vi/L4Z-pXRHQVA/maxresdefault.jpg"),c.a.createElement("form",{className:"Faceblur__form",onSubmit:t},c.a.createElement("div",{className:"Faceblur__form__input-query"},c.a.createElement("input",{value:n,onChange:a,className:"input-field"}),c.a.createElement("button",{type:"submit",className:"input-button"},"Submit \u2192")),c.a.createElement("div",{className:"Faceblur__form__radio-buttons",id:"radio-group"},"detect"===u?c.a.createElement("input",{type:"radio",name:"choice",value:"detect",checked:"checked"}):c.a.createElement("input",{type:"radio",name:"choice",value:"detect"}),c.a.createElement("label",{className:"radio-label__detect"},"DETECT"),"blur"===u?c.a.createElement("input",{type:"radio",name:"choice",value:"blur",checked:"checked"}):c.a.createElement("input",{type:"radio",name:"choice",value:"blur"}),c.a.createElement("label",{className:"radio-label__blur"},"BLUR"),"pitch"===u?c.a.createElement("input",{type:"radio",name:"choice",value:"pitch",checked:"checked"}):c.a.createElement("input",{type:"radio",name:"choice",value:"pitch"}),c.a.createElement("label",{className:"radio-label__pitch"},"PITCH"))),c.a.createElement("h1",null,"Hover Over And Click On Faces To Toggle")),c.a.createElement("section",{className:"Faceblur__display"},c.a.createElement("div",{className:"Faceblur__display--box"},c.a.createElement("img",{src:o,alt:"",className:"Faceblur__display--image",id:"inputImage"}),c.a.createElement(A,{boundingBoxes:i}))))}),C=(a(67),function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("a",{href:"https://github.com/tenglin2/faceblur",target:"_blank",rel:"noopener noreferrer",className:"Footer__link"},c.a.createElement("span",{className:"Footer__link--text"},"Source Code Link")))}),w=(a(68),a(33)),R=a.n(w),G=a(49),j=a.n(G),k=function(e){return console.log("name is",e),{type:"REGISTER_NAME_CHANGE",payload:e}},I=function(e){return console.log("emial is",e),{type:"REGISTER_EMAIL_CHANGE",payload:e}},S=function(e){return console.log("password is",e),{type:"REGISTER_PASSWORD_CHANGE",payload:e}},H=new R.a.App({apiKey:j.a}),x=function(){var e=Object(l.b)(),t=(Object(l.c)(function(e){return e.name}),Object(l.c)(function(e){return e.input})),a=(Object(l.c)(function(e){return e.imageURL}),function(t){var a;console.log("updates the input value"),e((a=t.target.value,console.log("on submit this should trigger"),{type:"INPUT_CHANGE",payload:a}))}),n=function(e){e.preventDefault(),console.log("register submission triggers"),d()},o=function(t){console.log("register name change"),e(k(t.target.value))},r=function(t){console.log("register email change"),e(I(t.target.value))},s=function(t){console.log("register password change"),e(S(t.target.value))},d=function(){e(k("")),e(I("")),e(S(""))};return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(u.a,{exact:!0,path:"/(|Home)",component:b}),c.a.createElement(u.a,{exact:!0,path:"/About",component:f}),c.a.createElement(u.a,{exact:!0,path:"/Register",render:function(e){return c.a.createElement(v,Object.assign({},e,{handleRegisterSubmit:n,handleRegisterNameChange:o,handleRegisterEmailChange:r,handleRegisterPasswordChange:s}))}}),c.a.createElement(u.a,{exact:!0,path:"/Login",component:_}),c.a.createElement(u.a,{exact:!0,path:"/Faceblur",render:function(n){return c.a.createElement(O,Object.assign({},n,{handleSubmit:(Object(l.c)(function(e){return e.imageURL}),function(a){var n;a.preventDefault(),console.log("submission works."),console.log("current input value is ".concat(t)),e((n=t,console.log("the image url that the action takes is ".concat(n)),{type:"CHANGE_IMAGE_URL",payload:n})),H.models.predict(R.a.FACE_DETECT_MODEL,t).then(function(t){console.log(t.outputs[0].data.regions);var a=t.outputs[0].data.regions;e({type:"CHANGE_FACE_DATA",payload:a});var n=document.getElementById("inputImage"),c={height:n.height,width:n.width};e(function(e){return{type:"CHANGE_IMAGE_DIMENSIONS",payload:e}}(c))},function(e){console.log("we have an error..."),console.log(e)}),console.log("FLAAAGGGGGAGGAGAG: we need to find the radio button value, I believe is named choice");var c=document.querySelector('input[name="choice"]:checked').value;console.log(c),e({type:"CHANGE_RADIO_OPTION",payload:c})}),handleChange:a}))}}),c.a.createElement(C,null)))},T=a(17),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;arguments.length>1&&arguments[1];return e},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"george",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return t.payload;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_CHANGE":return t.payload;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_NAME_CHANGE":return t.payload;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_EMAIL_CHANGE":return t.payload;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_PASSWORD_CHANGE":return t.payload;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IMAGE_URL":return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FACE_DATA":return t.payload;default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IMAGE_DIMENSIONS":return t.payload;default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"detect",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_RADIO_OPTION":return t.payload;default:return e}},z=Object(T.b)({count:D,name:F,input:L,registerName:M,registerEmail:P,registerPassword:B,imageURL:U,faceData:q,imageDimensions:J,radioOption:W}),K=Object(T.c)(z);r.a.render(c.a.createElement(l.a,{store:K},c.a.createElement(x,null)),document.getElementById("root"))},49:function(e,t){e.exports="a3a79f1b2f5242c3b881a5fe456f94e6"},51:function(e,t,a){e.exports=a(106)},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.339b6d5c.chunk.js.map
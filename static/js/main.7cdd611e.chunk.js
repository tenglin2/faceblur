(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),l=a(1),i=a(13),u=a(14),s=(a(61),a(62),function(e){var t=e.name;return o.a.createElement("div",{className:"Navlink"},o.a.createElement(i.b,{to:"/".concat(t),className:"Navlink__link"},"".concat(t)))}),m=function(){return o.a.createElement("header",{className:"Navbar"},o.a.createElement("section",{className:"logo-box"},o.a.createElement(i.b,{to:"/Home",className:"logo-link"},o.a.createElement("div",{className:"logo-icon"}),o.a.createElement("div",{className:"logo-name"},"faceblur"))),o.a.createElement("section",{className:"navigation-box"},o.a.createElement("div",{className:"navigation-link"},o.a.createElement(s,{name:"Home"})),o.a.createElement("div",{className:"navigation-link"},o.a.createElement(s,{name:"About"})),o.a.createElement("div",{className:"navigation-link"},o.a.createElement(s,{name:"Register"})),o.a.createElement("div",{className:"navigation-link"},o.a.createElement(s,{name:"Login"}))))},d=a(24),g=a(25),p=a(27),h=a(26),b=a(28),E=(a(64),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"Home"},o.a.createElement("div",{className:"display"},o.a.createElement("div",{className:"display__box"},o.a.createElement("h1",{className:"display__box--description"},"Come and Anonymize Your Photos with Machine Learning and AI"),o.a.createElement(i.b,{to:"/Faceblur",className:"display__box--button"},"Try It Now!"))))}}]),t}(o.a.Component)),f=function(){return o.a.createElement("div",{className:"About"},"About Linkage")},v=function(e){var t=e.handleRegisterSubmit,a=e.handleRegisterNameChange,n=e.handleRegisterEmailChange,r=e.handleRegisterPasswordChange,c=Object(l.c)(function(e){return e.registerName}),i=Object(l.c)(function(e){return e.registerEmail}),u=Object(l.c)(function(e){return e.registerPassword});return o.a.createElement("div",{className:"Register"},o.a.createElement("h1",null,"Something register"),o.a.createElement("form",{onSubmit:t},o.a.createElement("div",{className:"form__field"},o.a.createElement("label",{className:"form__label"},"Name"),o.a.createElement("input",{type:"text",value:c,onChange:a,placeholder:"name"})),o.a.createElement("div",{className:"form__field"},o.a.createElement("label",{className:"form__label"},"Name"),o.a.createElement("input",{type:"text",value:i,onChange:n,placeholder:"email"})),o.a.createElement("div",{className:"form__field"},o.a.createElement("label",{className:"form__label"},"Name"),o.a.createElement("input",{type:"password",value:u,onChange:r,placeholder:"password"})),o.a.createElement("button",{type:"submit"},"REGISTER \u2192")))},N=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Login"))}}]),t}(o.a.Component),_=a(51),y=a(20),A=(a(65),function(e){var t,a=e.bound,n=o.a.useState(1),r=Object(y.a)(n,2),c=r[0],i=r[1],u=o.a.useState({border:".3rem solid black"}),s=Object(y.a)(u,2),m=s[0],d=s[1],g=o.a.useState({backgroundImage:"url(/img/blur.jpg)",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover",borderRadius:"50%",filter:"blur(.3rem)"}),p=Object(y.a)(g,2),h=p[0],b=p[1],E=o.a.useState({backgroundColor:"black",borderRadius:"50%"}),f=Object(y.a)(E,2),v=f[0],N=f[1],A=Object(l.c)(function(e){return e.imageDimensions.height}),O=Object(l.c)(function(e){return e.imageDimensions.width}),k={top:a.top_row*A,left:a.left_col*O,bottom:a.bottom_row*A,right:a.right_col*O},C={top:k.top,left:k.left,bottom:k.bottom,right:k.right,height:k.bottom-k.top,width:k.right-k.left},G=Object(l.c)(function(e){return e.radioOption});return"detect"===G?t=m:"blur"===G?t=h:"pitch"===G?t=v:console.log("SOMETHING WENT WRONG WITH ASSIGNMENT!"),o.a.createElement("div",{className:"BoundingBox",style:Object(_.a)({},C,t),onClick:function(){console.log("the bounding box was clicked"),console.log("radio option is ".concat(G," and ").concat(typeof G)),"detect"===G?1===c?(i(0),d({})):(i(1),d({border:".3rem solid black"})):"blur"===G?1===c?(i(0),b({})):(i(1),b({backgroundImage:"url(/img/blur.jpg)",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover",borderRadius:"50%",filter:"blur(.3rem)"})):"pitch"===G?1===c?(i(0),N({})):(i(1),N({backgroundColor:"black",borderRadius:"50%"})):console.log("SOMETHING WENT WRONG WITH SETTING STATE!")}})}),O=(a(66),function(e){var t=e.boundingBoxes,a={height:Object(l.c)(function(e){return e.imageDimensions.height}),width:Object(l.c)(function(e){return e.imageDimensions.width})};return o.a.createElement("div",{className:"BoundingBoxes",style:a},function(e){return e.map(function(e,t){return o.a.createElement(A,{key:t,bound:e})})}(t))}),k=(a(67),function(e){var t=e.handleSubmit,a=e.handleChange,n=Object(l.c)(function(e){return e.input}),r=Object(l.c)(function(e){return e.imageURL}),c=Object(l.c)(function(e){return e.faceData});console.log(c);var i=c.map(function(e){return e.region_info.bounding_box}),u=Object(l.c)(function(e){return e.radioOption});console.log("the current radio option is ".concat(u));return o.a.createElement("main",{className:"Faceblur"},o.a.createElement("section",{className:"Faceblur__options"},o.a.createElement("h1",null,"https://i.ytimg.com/vi/L4Z-pXRHQVA/maxresdefault.jpg"),o.a.createElement("form",{className:"Faceblur__form",onSubmit:t},o.a.createElement("div",{className:"Faceblur__form__input-query"},o.a.createElement("input",{value:n,onChange:a,className:"input-field"}),o.a.createElement("button",{type:"submit",className:"input-button"},"Submit \u2192")),o.a.createElement("div",{className:"Faceblur__form__radio-buttons",id:"radio-group"},"detect"===u?o.a.createElement("input",{type:"radio",name:"choice",value:"detect",checked:"checked"}):o.a.createElement("input",{type:"radio",name:"choice",value:"detect"}),o.a.createElement("label",{className:"radio-label__detect"},"DETECT"),"blur"===u?o.a.createElement("input",{type:"radio",name:"choice",value:"blur",checked:"checked"}):o.a.createElement("input",{type:"radio",name:"choice",value:"blur"}),o.a.createElement("label",{className:"radio-label__blur"},"BLUR"),"pitch"===u?o.a.createElement("input",{type:"radio",name:"choice",value:"pitch",checked:"checked"}):o.a.createElement("input",{type:"radio",name:"choice",value:"pitch"}),o.a.createElement("label",{className:"radio-label__pitch"},"PITCH"))),o.a.createElement("h1",null,"Hover Over And Click On Faces To Toggle")),o.a.createElement("section",{className:"Faceblur__display"},o.a.createElement("div",{className:"Faceblur__display--box"},o.a.createElement("img",{src:r,alt:"",className:"Faceblur__display--image",id:"inputImage"}),o.a.createElement(O,{boundingBoxes:i}))))}),C=(a(68),function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("a",{href:"https://github.com/tenglin2/faceblur",target:"_blank",rel:"noopener noreferrer",className:"Footer__link"},o.a.createElement("span",{className:"Footer__link--text"},"Source Code Link")))}),G=(a(69),a(34)),R=a.n(G),I=a(50),w=a.n(I),S=function(e){return console.log("name is",e),{type:"REGISTER_NAME_CHANGE",payload:e}},j=function(e){return console.log("emial is",e),{type:"REGISTER_EMAIL_CHANGE",payload:e}},T=function(e){return console.log("password is",e),{type:"REGISTER_PASSWORD_CHANGE",payload:e}},H=new R.a.App({apiKey:w.a}),x=function(){var e=Object(l.b)(),t=Object(l.c)(function(e){return e.input}),a=function(a){var n;a.preventDefault(),console.log("submission works."),console.log("current input value is ".concat(t)),e((n=t,console.log("the image url that the action takes is ".concat(n)),{type:"CHANGE_IMAGE_URL",payload:n})),H.models.predict(R.a.FACE_DETECT_MODEL,t).then(function(t){console.log(t.outputs[0].data.regions);var a=t.outputs[0].data.regions;e({type:"CHANGE_FACE_DATA",payload:a});var n=document.getElementById("inputImage"),o={height:n.height,width:n.width};e(function(e){return{type:"CHANGE_IMAGE_DIMENSIONS",payload:e}}(o))},function(e){console.log("we have an error..."),console.log(e)}),console.log("FLAAAGGGGGAGGAGAG: we need to find the radio button value, I believe is named choice");var o=document.querySelector('input[name="choice"]:checked').value;console.log(o),e({type:"CHANGE_RADIO_OPTION",payload:o})},n=function(t){var a;console.log("updates the input value"),e((a=t.target.value,console.log("on submit this should trigger"),{type:"INPUT_CHANGE",payload:a}))},r=function(e){e.preventDefault(),console.log("register submission triggers"),g()},c=function(t){console.log("register name change"),e(S(t.target.value))},s=function(t){console.log("register email change"),e(j(t.target.value))},d=function(t){console.log("register password change"),e(T(t.target.value))},g=function(){e(S("")),e(j("")),e(T(""))};return o.a.createElement(i.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(u.a,{exact:!0,path:"/(|Home)",component:E}),o.a.createElement(u.a,{exact:!0,path:"/About",component:f}),o.a.createElement(u.a,{exact:!0,path:"/Register",render:function(e){return o.a.createElement(v,Object.assign({},e,{handleRegisterSubmit:r,handleRegisterNameChange:c,handleRegisterEmailChange:s,handleRegisterPasswordChange:d}))}}),o.a.createElement(u.a,{exact:!0,path:"/Login",component:N}),o.a.createElement(u.a,{exact:!0,path:"/Faceblur",render:function(e){return o.a.createElement(k,Object.assign({},e,{handleSubmit:a,handleChange:n}))}}),o.a.createElement(C,null)))},D=a(17),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;arguments.length>1&&arguments[1];return e},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"george",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return t.payload;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_CHANGE":return t.payload;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_NAME_CHANGE":return t.payload;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_EMAIL_CHANGE":return t.payload;default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_PASSWORD_CHANGE":return t.payload;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IMAGE_URL":return t.payload;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FACE_DATA":return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IMAGE_DIMENSIONS":return t.payload;default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"detect",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_RADIO_OPTION":return t.payload;default:return e}},K=Object(D.b)({count:F,name:L,input:M,registerName:P,registerEmail:B,registerPassword:W,imageURL:U,faceData:z,imageDimensions:q,radioOption:J}),Q=Object(D.c)(K);c.a.render(o.a.createElement(l.a,{store:Q},o.a.createElement(x,null)),document.getElementById("root"))},50:function(e,t){e.exports="a3a79f1b2f5242c3b881a5fe456f94e6"},52:function(e,t,a){e.exports=a(107)},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.7cdd611e.chunk.js.map
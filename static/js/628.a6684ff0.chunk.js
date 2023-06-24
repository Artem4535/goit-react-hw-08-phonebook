"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[628],{4628:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,o,i,a,l,c=t(9439),s=t(168),d=t(6444),u=d.ZP.div(r||(r=(0,s.Z)(["\n  margin-top: 50px;\n"]))),p=d.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 20px;\n  align-items: center;\n"]))),f=d.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  gap: 20px;\n"]))),x=d.ZP.button(a||(a=(0,s.Z)(["\n  border: none;\n  background-color: white;\n"]))),m=d.ZP.button(l||(l=(0,s.Z)(["\n  border: none;\n  background-color: white;\n  border-radius: 6px;\n  padding: 5px;\n  cursor: pointer;\n"]))),h=t(1413),g="Contacts_list__R3QeP",b="Contacts_item__WTDnh",v=t(9434),j=t(3634),w=t(184),y=function(n){var e=n.name,t=n.number,r=n.id,o=(0,v.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("li",{className:b,children:[(0,w.jsxs)("p",{children:[e,": ",t]}),(0,w.jsx)(m,{onClick:function(){return o((0,j.GK)(r))},type:"CloseButton",children:"Delete"})]})})},Z=function(n){return n.contacts.items},k=function(n){return n.filter.filter};function P(){var n=(0,v.v9)(Z),e=(0,v.v9)(k),t=function(){var t=e.toLocaleLowerCase();return n.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("ul",{className:g,children:null===t||void 0===t?void 0:t.map((function(n){return(0,w.jsx)(y,(0,h.Z)({},n),n.id)}))})})}var _=t(4858),C={form:"Filter_form__wVnxJ"},I=t(4808);function E(){var n=(0,v.I0)();return(0,w.jsx)("form",{className:C.form,children:(0,w.jsxs)("label",{className:C.find,children:["Find by name",(0,w.jsx)(_.II,{type:"text",onChange:function(e){n((0,I.J)(e.currentTarget.value))}})]})})}var F,N,O,z,B,L,S,D=t(2791),M=t(4164),T=d.ZP.div(F||(F=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(8, 5, 5, 0.356);\n"]))),A=d.ZP.div(N||(N=(0,s.Z)(["\n  position: absolute;\n  top: 10%;\n  width: 400px;\n  background-color: white;\n  border-radius: 3px;\n  padding: 30px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n"]))),V=d.ZP.ul(O||(O=(0,s.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),H=d.ZP.div(z||(z=(0,s.Z)(["\n  padding: 20px;\n  border: 1px solid;\n  width: 350px;\n  margin: 0 auto;\n"]))),K=function(n){var e=n.toggleModal,t=n.children,r=document.getElementById("modal-root");console.log("modalRoot:",r),(0,D.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,M.createPortal)((0,w.jsx)(T,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,w.jsx)(A,{toggleModal:e,children:D.Children.map(t,(function(n){return D.cloneElement(n,{toggleModal:e})}))})}),r)},R=t(1686),J=t.n(R),q="PhoneBook_item__Zzoff",G="PhoneBook_form__dbTim";function Q(n){var e=n.toggleModal,t=(0,D.useState)(""),r=(0,c.Z)(t,2),o=r[0],i=r[1],a=(0,D.useState)(""),l=(0,c.Z)(a,2),s=l[0],d=l[1],u=(0,v.I0)(),p=(0,v.v9)(Z),x=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":d(r)}},m=function(){i(""),d("")};return(0,w.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target,r=t.elements.name.value,i=t.elements.number.value,a=p.find((function(n){return n.name===r})),l=p.find((function(n){return n.number===i}));return a?(m(),J().Notify.failure("".concat(r," is already in contacts"))):l?(m(),J().Notify.failure("".concat(i," is already in contacts"))):(u((0,j.uK)({name:o,number:s})),m(),void e())},className:G,children:[(0,w.jsx)(_.Dx,{children:"Add Contact"}),(0,w.jsxs)(f,{children:[(0,w.jsx)("li",{className:q,children:(0,w.jsxs)(_.__,{children:["Name:",(0,w.jsx)(_.II,{value:o,onChange:x,name:"name",type:"text"})]})}),(0,w.jsx)("li",{className:q,children:(0,w.jsxs)(_.__,{children:["Phone:",(0,w.jsx)(_.II,{value:s,name:"number",onChange:x,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})})]}),(0,w.jsxs)(V,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(_.zx,{type:"submit",children:"Add to Contacts"})}),(0,w.jsx)("li",{children:(0,w.jsx)(_.zx,{type:"Button",onClick:e,children:"Close"})})]})]})}var U=["title","titleId"];function W(){return W=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},W.apply(this,arguments)}function X(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function Y(n,e){var t=n.title,r=n.titleId,o=X(n,U);return D.createElement("svg",W({id:"Layer_1",style:{enableBackground:"new 0 0 128 128"},viewBox:"0 0 128 128",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":r},o),t?D.createElement("title",{id:r},t):null,B||(B=D.createElement("style",{type:"text/css"},"\n\t.st0{fill:#31AF91;}\n\t.st1{fill:#FFFFFF;}\n")),L||(L=D.createElement("circle",{className:"st0",cx:64,cy:64,r:64})),S||(S=D.createElement("path",{className:"st1",d:"M103,57H71V25c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v32H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h32v32  c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V71h32c0.6,0,1-0.4,1-1V58C104,57.4,103.6,57,103,57z"})))}var $=D.forwardRef(Y),nn=(t.p,function(){var n=(0,D.useState)(!1),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,v.I0)();(0,D.useEffect)((function(){o((0,j.yF)())}),[o]);var i=function(){r((function(n){return!n}))};return(0,w.jsxs)(u,{children:[(0,w.jsxs)(p,{children:[(0,w.jsx)("p",{children:"Add Contact to phone book"}),(0,w.jsx)(x,{onClick:i,children:(0,w.jsx)($,{width:"35px"})})]}),t&&(0,w.jsx)(K,{toggleModal:i,children:(0,w.jsx)(Q,{})}),(0,w.jsxs)(H,{children:[(0,w.jsx)(E,{}),(0,w.jsx)(P,{})]})]})})},4858:function(n,e,t){t.d(e,{Dx:function(){return h},II:function(){return b},Yb:function(){return m},_D:function(){return Z},__:function(){return g},fv:function(){return y},gK:function(){return w},pn:function(){return v},zx:function(){return j}});var r,o,i,a,l,c,s,d,u,p=t(168),f=t(6444),x=t(1087),m=f.ZP.div(r||(r=(0,p.Z)(["\n  width: 450px;\n  padding: 30px 25px;\n  margin: 0 auto;\n  border-radius: 7px;\n  margin-top: 100px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n"]))),h=f.ZP.h2(o||(o=(0,p.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),g=f.ZP.label(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n"]))),b=f.ZP.input(a||(a=(0,p.Z)(["\n  padding: 8px;\n  margin-top: 5px;\n  padding-right: 50px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid #ff445c;\n"]))),v=f.ZP.button(l||(l=(0,p.Z)(["\n  position: absolute;\n  top: 3px;\n  right: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"]))),j=f.ZP.button(c||(c=(0,p.Z)(["\n  display: block;\n  border-radius: 20px;\n  border: 1px solid #ff4b2b;\n  background: #ff445c;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 25px;\n  letter-spacing: 1px;\n\n  transition: transform 80ms ease-in;\n\n  &:active {\n    transform: scale(0.95);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),w=(0,f.ZP)(x.rU)(s||(s=(0,p.Z)(["\n  color: #ff445c;\n"]))),y=f.ZP.div(d||(d=(0,p.Z)(["\n  position: relative;\n"]))),Z=f.ZP.div(u||(u=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 15px;\n"])))}}]);
//# sourceMappingURL=628.a6684ff0.chunk.js.map
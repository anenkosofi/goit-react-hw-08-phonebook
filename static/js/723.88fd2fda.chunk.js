"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[723],{3723:function(n,e,r){r.r(e),r.d(e,{default:function(){return pn}});var o,i,t,c=r(2791),a=r(9434),d=r(2946),s=r(3634),l=r(1273),p=r(168),u=r(6444),x=u.ZP.div(o||(o=(0,p.Z)(["\n  position: relative;\n\n  border-radius: 15px;\n"]))),f=u.ZP.label(i||(i=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 2px;\n\n  font-size: 16px;\n\n  color: rgb(200, 200, 200);\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  Input:focus ~ &,\n  Input:not(:placeholder-shown) ~ & {\n    transform: translateY(-35px) scale(0.8);\n\n    color: #010101;\n    background-color: #fefefe;\n  }\n"]))),b=u.ZP.input(t||(t=(0,p.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 8px 16px;\n\n  font-size: 16px;\n\n  color: #010101;\n  background-color: transparent;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:not(:placeholder-shown) {\n    border-color: #010101;\n  }\n"]))),h=r(184);function m(){var n=(0,a.v9)(d.AD),e=(0,a.I0)();return(0,h.jsxs)(x,{children:[(0,h.jsx)(b,{type:"text",value:n,onChange:function(n){var r=n.currentTarget.value;e((0,l.T)(r))},placeholder:" "}),(0,h.jsx)(f,{children:"Find contacts by name"})]})}var g,v,w,j,Z,y,z,k,P=r(8617),S=r(6856),T=r(5218),C=r(1678),I=r(4164),A=r(5705),E=r(5282),F=r(5984),D=(0,u.ZP)(A.l0)(g||(g=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  padding: 20px;\n  margin: 0 auto;\n\n  width: 99%;\n\n  background-color: #fefefe;\n\n  box-shadow: 0px 8px 12px -4px rgba(50, 88, 130, 0.32);\n  border-radius: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"]))),H=u.ZP.div(v||(v=(0,p.Z)(["\n  position: relative;\n"]))),q=(0,u.ZP)(A.gN)(w||(w=(0,p.Z)(["\n  width: 100%;\n  height: 50px;\n\n  padding: 8px 16px;\n\n  font-size: 16px;\n\n  color: #010101;\n  background-color: transparent;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:not(:placeholder-shown) {\n    border-color: #010101;\n  }\n  &:not(:focus) {\n    border-color: rgb(200, 200, 200);\n  }\n"]))),L=u.ZP.label(j||(j=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 2px;\n\n  font-size: 16px;\n\n  color: rgb(200, 200, 200);\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  input:focus ~ &,\n  input:not(:placeholder-shown) ~ & {\n    transform: translateY(-35px) scale(0.8);\n    color: #010101;\n    background-color: #fefefe;\n  }\n"]))),N=(0,u.ZP)(A.Bc)(Z||(Z=(0,p.Z)(["\n  position: absolute;\n  bottom: -30%;\n  left: 4px;\n  font-size: 12px;\n  color: #ff4500;\n"]))),Y=u.ZP.button(y||(y=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n\n  min-width: 150px;\n  height: 50px;\n\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-align: center;\n\n  color: #010101;\n  background-color: #ededed;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fefefe;\n    background-color: #1d976c;\n    border-color: #1d976c;\n  }\n  &:disabled {\n    background-color: #e2e2e2;\n    color: #636363;\n  }\n"])));function _(){var n=(0,a.v9)(d.Af),e=(0,a.v9)(d.pW),r=(0,a.v9)(d.zh),o=(0,a.I0)(),i=(0,F.x0)(),t=(0,F.x0)(),c=n.find((function(n){return n.id===e})),l=c.id,p=c.name,u=c.number,x={name:p,number:u},f=E.object({name:E.string().required("This field is required"),number:E.string().required("This field is required")});return(0,h.jsx)(A.J9,{initialValues:x,validationSchema:f,onSubmit:function(n){o((0,s.mP)({id:l,contact:n})),o((0,C.c)()),r?T.ZP.error("Something went wrong, try again later.",{style:{border:"1px solid #e1503d",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#e1503d",secondary:"#fefefe"}}):T.ZP.success("The contact was successfully updated.",{style:{border:"1px solid #1d976c",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#1d976c",secondary:"#fefefe"}})},children:(0,h.jsxs)(D,{autoComplete:"off",children:[(0,h.jsx)(T.x7,{position:"top-right",reverseOrder:!1}),(0,h.jsxs)(H,{children:[(0,h.jsx)(q,{id:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:" ",autoFocus:!0}),(0,h.jsx)(L,{htmlFor:i,children:"Name"}),(0,h.jsx)(N,{component:"div",name:"name"})]}),(0,h.jsxs)(H,{children:[(0,h.jsx)(q,{id:t,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:" "}),(0,h.jsx)(L,{htmlFor:t,children:"Number"}),(0,h.jsx)(N,{component:"div",name:"number"})]}),(0,h.jsx)(Y,{type:"submit",children:"Save changes"})]})})}var O,U,$,B,J=u.ZP.div(z||(z=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.3);\n"]))),K=u.ZP.div(k||(k=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  padding: 24px;\n  width: 90%;\n\n  background-color: #e7ecf2;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n\n  transform: translate(-50%, -50%) scale(1);\n\n  @media screen and (min-width: 480px) {\n    padding: 36px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 582px;\n  }\n"])));function M(){var n=(0,a.I0)();(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&n((0,C.c)())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,I.createPortal)((0,h.jsx)(J,{onClick:function(e){e.currentTarget===e.target&&n((0,C.c)())},children:(0,h.jsx)(K,{children:(0,h.jsx)(_,{})})}),document.querySelector("#modal-root"))}var W,G=u.ZP.li(O||(O=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 20px;\n\n  font-size: 24px;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border-color: #010101;\n  }\n"]))),V=u.ZP.div(U||(U=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n\n  @media screen and (max-width: 479px) {\n    font-size: 16px;\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n\n    svg {\n      stroke: #252f38;\n    }\n  }\n"]))),Q=u.ZP.div($||($=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n"]))),R=u.ZP.button(B||(B=(0,p.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 4px;\n\n  padding: 8px;\n\n  font-size: 16px;\n  letter-spacing: 1px;\n\n  color: #010101;\n  background-color: #ededed;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fefefe;\n    background-color: #e1503d;\n    border-color: #e1503d;\n  }\n\n  :first-child {\n    &:hover,\n    &:focus {\n      color: #fefefe;\n      background-color: #2196f3;\n      border-color: #2196f3;\n    }\n  }\n\n  &:disabled {\n    background-color: #e2e2e2;\n    color: #636363;\n  }\n\n  @media screen and (min-width: 480px) {\n    min-width: 100px;\n    height: 40px;\n  }\n\n  span {\n    display: none;\n\n    @media screen and (min-width: 480px) {\n      display: inline-flex;\n    }\n  }\n"])));function X(n){var e=n.contact,r=e.id,o=e.name,i=e.number,t=(0,a.v9)(d.HH),c=(0,a.v9)(d.zh),l=(0,a.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(G,{children:[(0,h.jsx)(T.x7,{position:"top-right",reverseOrder:!1}),(0,h.jsxs)(V,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)(P.fbd,{size:24}),(0,h.jsx)("span",{children:o})]}),(0,h.jsxs)("p",{children:[(0,h.jsx)(P.PES,{size:24}),(0,h.jsx)("span",{children:i})]})]}),(0,h.jsxs)(Q,{children:[(0,h.jsxs)(R,{type:"button",onClick:function(){return l((0,C.c)(r))},children:[(0,h.jsx)(S.U$P,{size:24}),(0,h.jsx)("span",{children:"Edit"})]}),(0,h.jsxs)(R,{type:"button",onClick:function(){l((0,s.GK)(r)),c?T.ZP.error("Something went wrong, try again later.",{style:{border:"1px solid #e1503d",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#e1503d",secondary:"#fefefe"}}):T.ZP.success("The contact was successfully deleted.",{style:{border:"1px solid #1d976c",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#1d976c",secondary:"#fefefe"}})},children:[(0,h.jsx)(S.$vK,{size:24}),(0,h.jsx)("span",{children:"Delete"})]})]})]}),t&&(0,h.jsx)(M,{})]})}var nn,en,rn,on=u.ZP.ul(W||(W=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"])));function tn(){var n=(0,a.v9)(d.DI);return(0,h.jsx)(on,{children:n.map((function(n){return(0,h.jsx)(X,{contact:n},n.id)}))})}var cn=u.ZP.section(nn||(nn=(0,p.Z)(["\n  padding: 36px 0;\n"]))),an=u.ZP.div(en||(en=(0,p.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"]))),dn=u.ZP.div(rn||(rn=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  padding: 20px;\n  margin: 0 auto;\n  width: 99%;\n\n  background-color: #fefefe;\n\n  border-radius: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"]))),sn=r(2619);function ln(n){var e=n.message;return(0,h.jsx)("p",{children:e})}function pn(){var n=(0,a.v9)(d.DI),e=(0,a.v9)(d.HH),r=(0,a.v9)(d.xU),o=(0,a.I0)();return(0,c.useEffect)((function(){e||o((0,s.yF)())}),[o,e]),(0,h.jsx)(cn,{children:(0,h.jsx)(an,{children:(0,h.jsxs)(dn,{children:[(0,h.jsx)(m,{}),r?(0,h.jsx)(sn.a,{}):n.length>0?(0,h.jsx)(tn,{}):(0,h.jsx)(ln,{message:"There is no contacts."})]})})})}},2946:function(n,e,r){r.d(e,{AD:function(){return a},Af:function(){return i},DI:function(){return l},HH:function(){return d},pW:function(){return s},xU:function(){return t},zh:function(){return c}});var o=r(6916),i=function(n){return n.contacts.items},t=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.error},a=function(n){return n.filter},d=function(n){return n.modal.isModalOpen},s=function(n){return n.modal.id},l=(0,o.P1)([i,a],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=723.88fd2fda.chunk.js.map
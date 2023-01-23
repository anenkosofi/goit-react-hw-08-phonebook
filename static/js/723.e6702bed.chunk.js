"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[723],{3723:function(n,e,r){r.r(e),r.d(e,{default:function(){return ln}});var o,i,t,s=r(2791),c=r(9434),a=r(2946),d=r(3634),l=r(1273),p=r(168),u=r(6444),x=u.ZP.div(o||(o=(0,p.Z)(["\n  position: relative;\n\n  border-radius: 15px;\n"]))),f=u.ZP.label(i||(i=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 2px;\n\n  font-size: 16px;\n\n  color: rgb(200, 200, 200);\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  Input:focus ~ &,\n  Input:not(:placeholder-shown) ~ & {\n    transform: translateY(-35px) scale(0.8);\n\n    color: #010101;\n    background-color: #fefefe;\n  }\n"]))),b=u.ZP.input(t||(t=(0,p.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 8px 16px;\n\n  font-size: 16px;\n\n  color: #010101;\n  background-color: transparent;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:not(:placeholder-shown) {\n    border-color: #010101;\n  }\n"]))),m=r(184);function h(){var n=(0,c.v9)(a.AD),e=(0,c.I0)();return(0,m.jsxs)(x,{children:[(0,m.jsx)(b,{type:"text",value:n,onChange:function(n){var r=n.currentTarget.value;e((0,l.T)(r))},placeholder:" "}),(0,m.jsx)(f,{children:"Find contacts by name"})]})}var g,v,w,j,Z,y,z,k,P=r(8617),S=r(6856),T=r(5218),C=r(1678),I=r(4164),A=r(5705),E=r(5282),F=r(5984),D=(0,u.ZP)(A.l0)(g||(g=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  padding: 20px;\n  margin: 0 auto;\n\n  width: 99%;\n\n  background-color: #fefefe;\n\n  box-shadow: 0px 8px 12px -4px rgba(50, 88, 130, 0.32);\n  border-radius: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"]))),H=u.ZP.div(v||(v=(0,p.Z)(["\n  position: relative;\n"]))),M=(0,u.ZP)(A.gN)(w||(w=(0,p.Z)(["\n  width: 100%;\n  height: 50px;\n\n  padding: 8px 16px;\n\n  font-size: 16px;\n\n  color: #010101;\n  background-color: transparent;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:not(:placeholder-shown) {\n    border-color: #010101;\n  }\n  &:not(:focus) {\n    border-color: rgb(200, 200, 200);\n  }\n"]))),q=u.ZP.label(j||(j=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 2px;\n\n  font-size: 16px;\n\n  color: rgb(200, 200, 200);\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  input:focus ~ &,\n  input:not(:placeholder-shown) ~ & {\n    transform: translateY(-35px) scale(0.8);\n    color: #010101;\n    background-color: #fefefe;\n  }\n"]))),N=(0,u.ZP)(A.Bc)(Z||(Z=(0,p.Z)(["\n  position: absolute;\n  bottom: -30%;\n  left: 4px;\n  font-size: 12px;\n  color: #ff4500;\n"]))),L=u.ZP.button(y||(y=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n\n  min-width: 150px;\n  height: 50px;\n\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-align: center;\n\n  color: #010101;\n  background-color: #ededed;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fefefe;\n    background-color: #1d976c;\n    border-color: #1d976c;\n  }\n  &:disabled {\n    background-color: #e2e2e2;\n    color: #636363;\n  }\n"])));function Y(){var n=(0,c.v9)(a.Af),e=(0,c.v9)(a.pW),r=(0,c.v9)(a.zh),o=(0,c.I0)(),i=(0,F.x0)(),t=(0,F.x0)(),s=n.find((function(n){return n.id===e})),l=s.id,p=s.name,u=s.number,x={name:p,number:u},f=E.object({name:E.string().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").min(4,"Must be 4 characters or more.").max(32,"Must be 32 characters or less.").required("This field is required"),number:E.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,"Phone number must be digits").min(10,"Must be 10 numbers or more.").max(12,"Must be 12 numbers or less.").required("This field is required")});return(0,m.jsx)(A.J9,{initialValues:x,validationSchema:f,onSubmit:function(n){o((0,d.mP)({id:l,contact:n})),o((0,C.c)()),r?T.ZP.error(r,{style:{border:"1px solid #e1503d",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#e1503d",secondary:"#fefefe"}}):T.ZP.success("The contact was successfully updated.",{style:{border:"1px solid #1d976c",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#1d976c",secondary:"#fefefe"}})},children:(0,m.jsxs)(D,{autoComplete:"off",children:[(0,m.jsx)(T.x7,{position:"top-right",reverseOrder:!1}),(0,m.jsxs)(H,{children:[(0,m.jsx)(M,{id:i,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:" ",autoFocus:!0}),(0,m.jsx)(q,{htmlFor:i,children:"Name"}),(0,m.jsx)(N,{component:"div",name:"name"})]}),(0,m.jsxs)(H,{children:[(0,m.jsx)(M,{id:t,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:" "}),(0,m.jsx)(q,{htmlFor:t,children:"Number"}),(0,m.jsx)(N,{component:"div",name:"number"})]}),(0,m.jsx)(L,{type:"submit",children:"Save changes"})]})})}var $,_,O,B,J=u.ZP.div(z||(z=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.3);\n"]))),K=u.ZP.div(k||(k=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  padding: 24px;\n  width: 90%;\n\n  background-color: #e7ecf2;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n\n  transform: translate(-50%, -50%) scale(1);\n\n  @media screen and (min-width: 480px) {\n    padding: 36px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 582px;\n  }\n"])));function W(){var n=(0,c.I0)();(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&n((0,C.c)())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,I.createPortal)((0,m.jsx)(J,{onClick:function(e){e.currentTarget===e.target&&n((0,C.c)())},children:(0,m.jsx)(K,{children:(0,m.jsx)(Y,{})})}),document.querySelector("#modal-root"))}var G,U=u.ZP.li($||($=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 20px;\n\n  font-size: 24px;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border-color: #010101;\n  }\n"]))),V=u.ZP.div(_||(_=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n\n  @media screen and (max-width: 479px) {\n    font-size: 16px;\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n\n    svg {\n      stroke: #252f38;\n    }\n  }\n"]))),Q=u.ZP.div(O||(O=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n"]))),R=u.ZP.button(B||(B=(0,p.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 4px;\n\n  padding: 8px;\n\n  font-size: 16px;\n  letter-spacing: 1px;\n\n  color: #010101;\n  background-color: #ededed;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fefefe;\n    background-color: #e1503d;\n    border-color: #e1503d;\n  }\n\n  :first-child {\n    &:hover,\n    &:focus {\n      color: #fefefe;\n      background-color: #2196f3;\n      border-color: #2196f3;\n    }\n  }\n\n  &:disabled {\n    background-color: #e2e2e2;\n    color: #636363;\n  }\n\n  @media screen and (min-width: 480px) {\n    min-width: 100px;\n    height: 40px;\n  }\n\n  span {\n    display: none;\n\n    @media screen and (min-width: 480px) {\n      display: inline-flex;\n    }\n  }\n"])));function X(n){var e=n.contact,r=e.id,o=e.name,i=e.number,t=(0,c.v9)(a.HH),s=(0,c.v9)(a.zh),l=(0,c.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(U,{children:[(0,m.jsx)(T.x7,{position:"top-right",reverseOrder:!1}),(0,m.jsxs)(V,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)(P.fbd,{size:24}),(0,m.jsx)("span",{children:o})]}),(0,m.jsxs)("p",{children:[(0,m.jsx)(P.PES,{size:24}),(0,m.jsx)("span",{children:i})]})]}),(0,m.jsxs)(Q,{children:[(0,m.jsxs)(R,{type:"button",onClick:function(){return l((0,C.c)(r))},children:[(0,m.jsx)(S.U$P,{size:24}),(0,m.jsx)("span",{children:"Edit"})]}),(0,m.jsxs)(R,{type:"button",onClick:function(){l((0,d.GK)(r)),s?T.ZP.error(s,{style:{border:"1px solid #e1503d",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#e1503d",secondary:"#fefefe"}}):T.ZP.success("The contact was successfully deleted.",{style:{border:"1px solid #1d976c",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#1d976c",secondary:"#fefefe"}})},children:[(0,m.jsx)(S.$vK,{size:24}),(0,m.jsx)("span",{children:"Delete"})]})]})]}),t&&(0,m.jsx)(W,{})]})}var nn,en,rn,on=u.ZP.ul(G||(G=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"])));function tn(){var n=(0,c.v9)(a.DI);return(0,m.jsx)(on,{children:n.map((function(n){return(0,m.jsx)(X,{contact:n},n.id)}))})}var sn=u.ZP.section(nn||(nn=(0,p.Z)(["\n  padding: 36px 0;\n"]))),cn=u.ZP.div(en||(en=(0,p.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"]))),an=u.ZP.div(rn||(rn=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  padding: 20px;\n  margin: 0 auto;\n  width: 99%;\n\n  background-color: #fefefe;\n\n  border-radius: 15px;\n\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"])));function dn(n){var e=n.message;return(0,m.jsx)("p",{children:e})}function ln(){var n=(0,c.v9)(a.DI),e=(0,c.v9)(a.HH),r=(0,c.I0)();return(0,s.useEffect)((function(){e||r((0,d.yF)())}),[r,e]),(0,m.jsx)(sn,{children:(0,m.jsx)(cn,{children:(0,m.jsxs)(an,{children:[(0,m.jsx)(h,{}),n.length>0?(0,m.jsx)(tn,{}):(0,m.jsx)(dn,{message:"There is no contacts."})]})})})}},2946:function(n,e,r){r.d(e,{AD:function(){return s},Af:function(){return i},DI:function(){return d},HH:function(){return c},pW:function(){return a},zh:function(){return t}});var o=r(6916),i=function(n){return n.contacts.items},t=function(n){return n.contacts.error},s=function(n){return n.filter},c=function(n){return n.modal.isModalOpen},a=function(n){return n.modal.id},d=(0,o.P1)([i,s],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=723.e6702bed.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{7079:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,s,d,c,l,m=t(5705),u=t(5282),p=t(4345),h=t.n(p),g=t(5984),x=t(9434),b=t(9273),f=t(168),v=t(6444),w=(0,v.ZP)(m.l0)(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  padding: 20px;\n  margin: 0 auto;\n\n  width: 99%;\n\n  background-color: #fefefe;\n\n  box-shadow: 0px 8px 12px -4px rgba(50, 88, 130, 0.32);\n  border-radius: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"]))),Z=v.ZP.div(i||(i=(0,f.Z)(["\n  position: relative;\n"]))),j=(0,v.ZP)(m.gN)(o||(o=(0,f.Z)(["\n  width: 100%;\n  height: 50px;\n\n  padding: 8px 16px;\n\n  font-size: 16px;\n\n  color: #010101;\n  background-color: transparent;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:not(:placeholder-shown) {\n    border-color: #010101;\n  }\n  &:not(:focus) {\n    border-color: rgb(200, 200, 200);\n  }\n"]))),z=v.ZP.label(a||(a=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 2px;\n\n  font-size: 16px;\n\n  color: rgb(200, 200, 200);\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  input:focus ~ &,\n  input:not(:placeholder-shown) ~ & {\n    transform: translateY(-35px) scale(0.8);\n    color: #010101;\n    background-color: #fefefe;\n  }\n"]))),y=(0,v.ZP)(m.Bc)(s||(s=(0,f.Z)(["\n  position: absolute;\n  bottom: -30%;\n  left: 4px;\n  font-size: 12px;\n  color: #ff4500;\n"]))),k=v.ZP.button(d||(d=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n\n  min-width: 150px;\n  height: 50px;\n\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-align: center;\n\n  color: #010101;\n  background-color: #ededed;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fefefe;\n    background-color: #1d976c;\n    border-color: #1d976c;\n  }\n  &:disabled {\n    background-color: #e2e2e2;\n    color: #636363;\n  }\n"]))),P=t(184);function $(){var n=(0,x.I0)(),e=(0,g.x0)(),t=(0,g.x0)(),r=(0,g.x0)(),i=u.object({name:u.string().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").min(4,"Must be 4 characters or more.").max(32,"Must be 32 characters or less.").required("This field is required."),email:u.string().email("Invalid e-mail address.").required("This field is required."),password:u.string().minUppercase(1,"Password must contain at least 1 uppercase letter.").minLowercase(6,"Password must contain at least 6 lowercase letters.").minNumbers(1,"Password must contain at least 1 number.").minSymbols(1,"Password must contain at least 1 symbol.").required("This field is required.")});return(0,P.jsx)(m.J9,{initialValues:{name:"",email:"",password:""},validationSchema:i,onSubmit:function(e,t){var r=t.resetForm;n((0,b.z2)(e)),r()},children:(0,P.jsxs)(w,{autoComplete:"off",children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(j,{id:e,type:"text",name:"name",placeholder:" "}),(0,P.jsx)(z,{htmlFor:e,children:"Name"}),(0,P.jsx)(y,{component:"div",name:"name"})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(j,{id:t,type:"email",name:"email",placeholder:" "}),(0,P.jsx)(z,{htmlFor:t,children:"E-mail"}),(0,P.jsx)(y,{component:"div",name:"email"})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(j,{id:r,type:"password",name:"password",placeholder:" "}),(0,P.jsx)(z,{htmlFor:r,children:"Password"}),(0,P.jsx)(y,{component:"div",name:"password"})]}),(0,P.jsx)(k,{type:"submit",children:"Sign Up"})]})})}h()(u);var M=v.ZP.section(c||(c=(0,f.Z)(["\n  padding: 36px 0;\n"]))),N=v.ZP.div(l||(l=(0,f.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"])));function S(){return(0,P.jsx)(M,{children:(0,P.jsx)(N,{children:(0,P.jsx)($,{})})})}},4345:function(n){var e=function(n,e){return 1===e?n:"".concat(n,"s")},t=function(n){return null===n||void 0===n};function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} lowercase "+e("letter",n);return this.test({name:"minLowercase",exclusive:!0,message:i,params:{length:n},test:function(e){return t(e)||(e.match(/[a-z]/g)||[]).length>=n}})}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} uppercase "+e("letter",n);return this.test({name:"minUppercase",exclusive:!0,message:i,params:{length:n},test:function(e){return t(e)||(e.match(/[A-Z]/g)||[]).length>=n}})}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} "+e("number",n);return this.test({name:"minNumber",exclusive:!0,message:i,params:{length:n},test:function(e){return t(e)||(e.match(/[0-9]/g)||[]).length>=n}})}function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} "+e("symbol",n);return this.test({name:"minSymbol",exclusive:!0,message:i,params:{length:n},test:function(e){return t(e)||(e.match(/[^a-zA-Z0-9\s]/g)||[]).length>=n}})}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must not contain sequences of more than ${length} repeated "+e("character",n);return this.test({name:"minRepeating",exclusive:!0,message:i,params:{length:n},test:function(e){return t(e)||!new RegExp("(.)\\1{".concat(n,",}")).test(e)}})}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} "+e("word",n),o=new RegExp("[a-zA-Z0-9]");return this.test({name:"minWords",exclusive:!0,message:i,params:{length:n},test:function(e){return t(e)||e.split(" ").filter((function(n){return!!n&&o.test(n)})).length>=n}})}function c(){return this.min(8).max(250).minLowercase(1).minUppercase(1).minNumbers(1).minSymbols(1)}n.exports=function(n){n.addMethod(n.string,"minLowercase",r),n.addMethod(n.string,"minUppercase",i),n.addMethod(n.string,"minNumber",o),n.addMethod(n.string,"minNumbers",o),n.addMethod(n.string,"minSymbol",a),n.addMethod(n.string,"minSymbols",a),n.addMethod(n.string,"minRepeating",s),n.addMethod(n.string,"minWords",d),n.addMethod(n.string,"password",c)}}}]);
//# sourceMappingURL=79.18f50083.chunk.js.map
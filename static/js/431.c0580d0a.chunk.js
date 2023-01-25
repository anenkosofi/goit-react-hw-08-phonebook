"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[431],{8431:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,o,i,a,c,u,s,l,d=r(5705),f=r(5282),p=r(5984),m=r(5218),h=r(9434),b=r(3634),x=r(2946),g=r(168),v=r(6444),y=(0,v.ZP)(d.l0)(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  padding: 20px;\n  margin: 0 auto;\n\n  width: 99%;\n\n  background-color: #fefefe;\n\n  box-shadow: 0px 8px 12px -4px rgba(50, 88, 130, 0.32);\n  border-radius: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"]))),w=v.ZP.div(o||(o=(0,g.Z)(["\n  position: relative;\n"]))),z=(0,v.ZP)(d.gN)(i||(i=(0,g.Z)(["\n  width: 100%;\n  height: 50px;\n\n  padding: 8px 16px;\n\n  font-size: 16px;\n\n  color: #010101;\n  background-color: transparent;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:not(:placeholder-shown) {\n    border-color: #010101;\n  }\n  &:not(:focus) {\n    border-color: rgb(200, 200, 200);\n  }\n"]))),j=v.ZP.label(a||(a=(0,g.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 2px;\n\n  font-size: 16px;\n\n  color: rgb(200, 200, 200);\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  input:focus ~ &,\n  input:not(:placeholder-shown) ~ & {\n    transform: translateY(-35px) scale(0.8);\n    color: #010101;\n    background-color: #fefefe;\n  }\n"]))),k=(0,v.ZP)(d.Bc)(c||(c=(0,g.Z)(["\n  position: absolute;\n  bottom: -30%;\n  left: 4px;\n  font-size: 12px;\n  color: #ff4500;\n"]))),Z=v.ZP.button(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n\n  min-width: 150px;\n  height: 50px;\n\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-align: center;\n\n  color: #010101;\n  background-color: #ededed;\n\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fefefe;\n    background-color: #1d976c;\n    border-color: #1d976c;\n  }\n  &:disabled {\n    background-color: #e2e2e2;\n    color: #636363;\n  }\n"]))),A=r(184);function P(){var n=(0,h.v9)(x.Af),e=(0,h.v9)(x.zh),r=(0,h.I0)(),t=(0,p.x0)(),o=(0,p.x0)(),i=f.object({name:f.string().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").required("This field is required"),number:f.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,"Phone number must be digits").min(10,"Must be 10 numbers or more.").max(12,"Must be 12 numbers or less.").required("This field is required")});return(0,A.jsx)(d.J9,{initialValues:{name:"",number:""},validationSchema:i,onSubmit:function(t,o){var i=o.resetForm;if(n.find((function(n){return n.name.toLowerCase()===t.name.trim().toLowerCase()})))return alert("".concat(t.name," is already in your contacts.")),void i();r((0,b.uK)(t)),i(),e?m.ZP.error("Something went wrong, try again later.",{style:{border:"1px solid #e1503d",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#e1503d",secondary:"#fefefe"}}):m.ZP.success("The contact was successfully added.",{style:{border:"1px solid #1d976c",boxShadow:"none",fontSize:"16px"},iconTheme:{primary:"#1d976c",secondary:"#fefefe"}})},children:(0,A.jsxs)(y,{autoComplete:"off",children:[(0,A.jsx)(m.x7,{position:"top-right",reverseOrder:!1}),(0,A.jsxs)(w,{children:[(0,A.jsx)(z,{id:t,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:" "}),(0,A.jsx)(j,{htmlFor:t,children:"Name"}),(0,A.jsx)(k,{component:"div",name:"name"})]}),(0,A.jsxs)(w,{children:[(0,A.jsx)(z,{id:o,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:" "}),(0,A.jsx)(j,{htmlFor:o,children:"Number"}),(0,A.jsx)(k,{component:"div",name:"number"})]}),(0,A.jsx)(Z,{type:"submit",children:"Add contact"})]})})}var C=v.ZP.section(s||(s=(0,g.Z)(["\n  padding: 36px 0;\n"]))),S=v.ZP.div(l||(l=(0,g.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"])));function q(){return(0,A.jsx)(C,{children:(0,A.jsx)(S,{children:(0,A.jsx)(P,{})})})}},2946:function(n,e,r){r.d(e,{AD:function(){return a},Af:function(){return o},DI:function(){return s},HH:function(){return c},pW:function(){return u},zh:function(){return i}});var t=r(6916),o=function(n){return n.contacts.items},i=function(n){return n.contacts.error},a=function(n){return n.filter},c=function(n){return n.modal.isModalOpen},u=function(n){return n.modal.id},s=(0,t.P1)([o,a],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))},6916:function(n,e,r){r.d(e,{P1:function(){return u}});var t="NOT_FOUND";var o=function(n,e){return n===e};function i(n,e){var r="object"===typeof e?e:{equalityCheck:e},i=r.equalityCheck,a=void 0===i?o:i,c=r.maxSize,u=void 0===c?1:c,s=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(a),d=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:t},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function o(n){var o=r.findIndex((function(r){return e(n,r.key)}));if(o>-1){var i=r[o];return o>0&&(r.splice(o,1),r.unshift(i)),i.value}return t}return{get:o,put:function(e,i){o(e)===t&&(r.unshift({key:e,value:i}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,l);function f(){var e=d.get(arguments);if(e===t){if(e=n.apply(null,arguments),s){var r=d.getEntries(),o=r.find((function(n){return s(n.value,e)}));o&&(e=o.value)}d.put(arguments,e)}return e}return f.clearCache=function(){return d.clear()},f}function a(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function c(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,c=0,u={memoizeOptions:void 0},s=t.pop();if("object"===typeof s&&(u=s,s=t.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=u,d=l.memoizeOptions,f=void 0===d?r:d,p=Array.isArray(f)?f:[f],m=a(t),h=n.apply(void 0,[function(){return c++,s.apply(null,arguments)}].concat(p)),b=n((function(){for(var n=[],e=m.length,r=0;r<e;r++)n.push(m[r].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(b,{resultFunc:s,memoizedResultFunc:h,dependencies:m,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),b};return o}var u=c(i)}}]);
//# sourceMappingURL=431.c0580d0a.chunk.js.map
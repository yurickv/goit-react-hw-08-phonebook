"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[943],{5943:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(2791),a=t(9434),i=t(4270),l=t(5705),o=t(6727),s=t(6916),m=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},d=(0,s.P1)([m,function(e){return e.filter.value}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),h=t(3064),x=t(4554),f=t(6882),p=t(6151),b=t(184),j=function(){var e=(0,a.I0)(),n=(0,a.v9)(m),t=o.Ry({name:o.Z_("Enter your email").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Must Contain only letter").required("Name Required"),number:o.Z_().min(10).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Must Contain only number").required("Phone number Required")}),r=(0,l.TA)({initialValues:{name:"",number:""},validationSchema:t,onSubmit:function(t,r){var a=t.name,i=t.number,l=r.resetForm,o=n.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}));if(o)return alert("".concat(o.name," is already in contacts"));e((0,h.uK)({name:a,number:i})),l()},validateOnChange:!1,validateOnBlur:!1}),i=r.errors.name,s=r.errors.number;return(0,b.jsxs)(x.Z,{component:"form",onSubmit:r.handleSubmit,noValidate:!0,sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(f.Z,{type:"text",error:Boolean(i),helperText:i,label:"Name",name:"name",value:r.values.name,onChange:r.handleChange,required:!0,variant:"filled",size:"medium",fullWidth:!0}),(0,b.jsx)(f.Z,{type:"tel",error:Boolean(s),helperText:s,label:"Phone number",name:"number",value:r.values.number,onChange:r.handleChange,required:!0,sx:{ml:2},variant:"filled",size:"medium",fullWidth:!0}),(0,b.jsx)(p.Z,{color:"primary",variant:"outlined",type:"submit",size:"medium",fullWidth:!0,sx:{ml:5,p:2},children:"Add contacts"})]})},Z=t(719),v=function(){var e=(0,a.I0)();return(0,b.jsx)(x.Z,{display:"flex",flexDirection:"column",width:"300px",children:(0,b.jsx)(f.Z,{name:"search",variant:"standard",label:"Find contacts by name",onChange:function(n){return e((0,Z.T)(n.target.value))}})})},g=t(9439),y=t(4852),C=t(3466),w=t(890),k=t(5193),q=t(8619),I=function(e){var n=e.contact,t=n.id,i=n.name,s=n.number,m=(0,r.useState)(!1),c=(0,g.Z)(m,2),u=c[0],d=c[1],j=(0,a.I0)(),Z=(0,k.Z)("(max-width:750px)"),v=o.Ry().shape({name:o.Z_().required("Name can't be empty").min(4),number:o.Z_().required("Phone number can't be empty").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),I=(0,l.TA)({initialValues:{name:i,number:s},validationSchema:v,onSubmit:function(e,n){var r=e.name,a=e.number,i=n.resetForm;j((0,h.mP)({id:t,name:r,number:a})),d(!1),i()},validateOnChange:!1,validateOnBlur:!1}),S=I.errors.name,z=I.errors.number;return(0,b.jsx)(y.ZP,{sx:{display:"flex",alignItems:"center",mt:1},children:(0,b.jsx)(x.Z,{sx:Z?{}:{display:"flex",alignItems:"center"},children:u?(0,b.jsxs)(x.Z,{component:"form",onSubmit:I.handleSubmit,sx:Z?{}:{display:"flex",alignItems:"baseline",justifyContent:"space-between"},noValidate:!0,children:[(0,b.jsx)(f.Z,{error:Boolean(S),helperText:S,type:"text",name:"name",value:I.values.name,onChange:I.handleChange,variant:"standard",size:"small",sx:Z?{width:"100%"}:{},InputProps:{startAdornment:(0,b.jsx)(C.Z,{position:"start",children:(0,b.jsx)(q.Z,{})}),endAdornment:(0,b.jsx)(C.Z,{position:"end",children:":"})},required:!0}),(0,b.jsx)(f.Z,{type:"tel",name:"number",error:Boolean(z),helperText:z,sx:Z?{width:"100%",mt:1}:{ml:1},value:I.values.number,onChange:I.handleChange,variant:"standard",size:"small",required:!0}),(0,b.jsx)(p.Z,{sx:Z?{display:"block",width:"100%"}:{ml:1},type:"submit",onClick:function(){return d(!0)},children:"Confirm"}),(0,b.jsx)(p.Z,{type:"button",sx:Z?{display:"block",width:"100%",color:"red"}:{color:"red"},onClick:function(){return d(!1)},children:"Cancel"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(q.Z,{}),(0,b.jsxs)(w.Z,{component:"p",sx:{ml:1},children:[i,":"]}),(0,b.jsx)(w.Z,{component:"p",sx:{ml:1},children:s})]}),(0,b.jsx)(p.Z,{sx:Z?{ml:1,width:"45%"}:{ml:1},onClick:function(){return d(!0)},children:"Edit"}),(0,b.jsx)(p.Z,{sx:Z?{color:"red",width:"45%"}:{color:"red"},onClick:function(){j((0,h.GK)(t))},children:"Delete"})]})})},t)},S=t(493),z=function(){var e=(0,a.v9)(d),n=(0,k.Z)("(max-width:750px)");return(0,b.jsxs)(b.Fragment,{children:[!e.length&&(0,b.jsx)("b",{children:"This contact is not found"}),(0,b.jsx)(S.Z,{sx:{width:"100%",maxWidth:n?"sm":"xl",bgcolor:"background.paper"},children:e.map((function(e){return(0,b.jsx)(I,{contact:e},e.id)}))})]})};function P(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,a.v9)(u),l=(0,a.v9)(m),o=(0,k.Z)("(max-width:750px)");return(0,r.useEffect)((function(){var n=e((0,h.yF)());return function(){n.abort()}}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.q,{children:(0,b.jsx)("title",{children:"Your contacts"})}),(0,b.jsxs)(x.Z,{display:"flex",flexDirection:"column",sx:{maxWidth:o?"sm":"xl",gap:3,mt:10,alignItems:"center"},children:[(0,b.jsx)(w.Z,{component:"h1",sx:{fontSize:50,fontWeight:600},children:"Phonebook"}),(0,b.jsx)(j,{}),(0,b.jsx)(w.Z,{component:"h2",sx:{fontSize:40,fontWeight:600},children:"Contacts"}),n&&(0,b.jsx)(w.Z,{component:"h4",children:"Request in progress..."}),l.length?(0,b.jsx)(v,{}):(0,b.jsx)(w.Z,{component:"h4",children:"'No contacts yet'"}),t&&(0,b.jsx)("b",{children:t}),!!l.length&&(0,b.jsx)(z,{})]})]})}}}]);
//# sourceMappingURL=943.727bd580.chunk.js.map
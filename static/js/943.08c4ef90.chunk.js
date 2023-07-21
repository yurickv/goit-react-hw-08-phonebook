"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[943],{5943:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(2791),a=t(9434),i=t(4270),l=t(5705),o=t(6727),s=t(6916),m=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},d=(0,s.P1)([m,function(e){return e.filter.value}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),h=t(3064),x=t(4554),f=t(6882),p=t(6151),b=t(5218),j=t(184),Z=function(){var e=(0,a.I0)(),n=(0,a.v9)(m),t=o.Ry({name:o.Z_("Enter your email").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Must Contain only letter").required("Name Required"),number:o.Z_().min(10).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Must Contain only number").required("Phone number Required")}),r=(0,l.TA)({initialValues:{name:"",number:""},validationSchema:t,onSubmit:function(t,r){var a=t.name,i=t.number,l=r.resetForm,o=n.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}));if(o)return b.Am.error("".concat(o.name," is already in contacts"));e((0,h.uK)({name:a,number:i})),l()},validateOnChange:!1,validateOnBlur:!1}),i=r.errors.name,s=r.errors.number;return(0,j.jsxs)(x.Z,{component:"form",onSubmit:r.handleSubmit,noValidate:!0,sx:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(f.Z,{type:"text",error:Boolean(i),helperText:i,label:"Name",name:"name",value:r.values.name,onChange:r.handleChange,required:!0,variant:"filled",size:"medium",fullWidth:!0}),(0,j.jsx)(f.Z,{type:"tel",error:Boolean(s),helperText:s,label:"Phone number",name:"number",value:r.values.number,onChange:r.handleChange,required:!0,sx:{ml:2},variant:"filled",size:"medium",fullWidth:!0}),(0,j.jsx)(p.Z,{color:"primary",variant:"outlined",type:"submit",size:"medium",fullWidth:!0,sx:{ml:5,p:2},children:"Add contacts"})]})},v=t(719),g=function(){var e=(0,a.I0)();return(0,j.jsx)(x.Z,{display:"flex",flexDirection:"column",width:"300px",children:(0,j.jsx)(f.Z,{name:"search",variant:"standard",label:"Find contacts by name",onChange:function(n){return e((0,v.T)(n.target.value))}})})},y=t(9439),C=t(4852),w=t(3466),k=t(890),q=t(5193),I=t(8619),S=function(e){var n=e.contact,t=n.id,i=n.name,s=n.number,m=(0,r.useState)(!1),c=(0,y.Z)(m,2),u=c[0],d=c[1],b=(0,a.I0)(),Z=(0,q.Z)("(max-width:750px)"),v=o.Ry().shape({name:o.Z_().required("Name can't be empty").min(4),number:o.Z_().required("Phone number can't be empty").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),g=(0,l.TA)({initialValues:{name:i,number:s},validationSchema:v,onSubmit:function(e,n){var r=e.name,a=e.number,i=n.resetForm;b((0,h.mP)({id:t,name:r,number:a})),d(!1),i()},validateOnChange:!1,validateOnBlur:!1}),S=g.errors.name,z=g.errors.number;return(0,j.jsx)(C.ZP,{sx:{display:"flex",alignItems:"center",mt:1},children:(0,j.jsx)(x.Z,{sx:Z?{}:{display:"flex",alignItems:"center"},children:u?(0,j.jsxs)(x.Z,{component:"form",onSubmit:g.handleSubmit,sx:Z?{}:{display:"flex",alignItems:"baseline",justifyContent:"space-between"},noValidate:!0,children:[(0,j.jsx)(f.Z,{error:Boolean(S),helperText:S,type:"text",name:"name",value:g.values.name,onChange:g.handleChange,variant:"standard",size:"small",sx:Z?{width:"100%"}:{},InputProps:{startAdornment:(0,j.jsx)(w.Z,{position:"start",children:(0,j.jsx)(I.Z,{})}),endAdornment:(0,j.jsx)(w.Z,{position:"end",children:":"})},required:!0}),(0,j.jsx)(f.Z,{type:"tel",name:"number",error:Boolean(z),helperText:z,sx:Z?{width:"100%",mt:1}:{ml:1},value:g.values.number,onChange:g.handleChange,variant:"standard",size:"small",required:!0}),(0,j.jsx)(p.Z,{sx:Z?{display:"block",width:"100%"}:{ml:1},type:"submit",onClick:function(){return d(!0)},children:"Confirm"}),(0,j.jsx)(p.Z,{type:"button",sx:Z?{display:"block",width:"100%",color:"red"}:{color:"red"},onClick:function(){return d(!1)},children:"Cancel"})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(I.Z,{}),(0,j.jsxs)(k.Z,{component:"p",sx:{ml:1},children:[i,":"]}),(0,j.jsx)(k.Z,{component:"p",sx:{ml:1},children:s})]}),(0,j.jsx)(p.Z,{sx:Z?{ml:1,width:"45%"}:{ml:1},onClick:function(){return d(!0)},children:"Edit"}),(0,j.jsx)(p.Z,{sx:Z?{color:"red",width:"45%"}:{color:"red"},onClick:function(){b((0,h.GK)(t))},children:"Delete"})]})})},t)},z=t(493),A=function(){var e=(0,a.v9)(d),n=(0,q.Z)("(max-width:750px)");return(0,j.jsxs)(j.Fragment,{children:[!e.length&&(0,j.jsx)("b",{children:"This contact is not found"}),(0,j.jsx)(z.Z,{sx:{width:"100%",maxWidth:n?"sm":"xl",bgcolor:"background.paper"},children:e.map((function(e){return(0,j.jsx)(S,{contact:e},e.id)}))})]})};function P(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,a.v9)(u),l=(0,a.v9)(m),o=(0,q.Z)("(max-width:750px)");return(0,r.useEffect)((function(){var n=e((0,h.yF)());return function(){n.abort()}}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.q,{children:(0,j.jsx)("title",{children:"Your contacts"})}),(0,j.jsxs)(x.Z,{display:"flex",flexDirection:"column",sx:{maxWidth:o?"sm":"xl",gap:3,mt:10,alignItems:"center"},children:[(0,j.jsx)(k.Z,{component:"h1",sx:{fontSize:50,fontWeight:600},children:"Phonebook"}),(0,j.jsx)(Z,{}),(0,j.jsx)(k.Z,{component:"h2",sx:{fontSize:40,fontWeight:600},children:"Contacts"}),n&&(0,j.jsx)(k.Z,{component:"h4",children:"Request in progress..."}),l.length?(0,j.jsx)(g,{}):(0,j.jsx)(k.Z,{component:"h4",children:"'No contacts yet'"}),t&&(0,j.jsx)("b",{children:t}),!!l.length&&(0,j.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=943.08c4ef90.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),s=n(14),i=n.n(s),a=n(1),o=function(e){var t=e.persons,n=e.setFilted,s=Object(a.useState)(""),i=Object(c.a)(s,2),o=i[0],u=i[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Filter (Regexpression support)"}),Object(r.jsxs)("div",{children:["Filter: ",Object(r.jsx)("input",{value:o,onChange:function(e){var c=e.target.value;try{var r=new RegExp(c,"i");n(t.filter((function(e){return-1!==e.name.search(r)})))}catch(s){}finally{u(c)}}})]})]})},u=n(4),d=n.n(u),l="/api/persons",j=function(e){return d.a.post(l,e).then((function(e){return e.data}))},b=function(){return d.a.get(l).then((function(e){return e.data}))},f=function(e){return d.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},h=function(e,t){return d.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},m=function(e){var t=e.filted,n=e.setFilted,s=e.persons,i=e.setPersons,o=e.createNotice,u=Object(a.useState)(""),d=Object(c.a)(u,2),l=d[0],b=d[1],f=Object(a.useState)(""),m=Object(c.a)(f,2),p=m[0],O=m[1];return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:l,onChange:function(e){b(e.target.value)}})]}),Object(r.jsxs)("div",{children:["Number: ",Object(r.jsx)("input",{value:p,onChange:function(e){O(e.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var c={name:l,number:p},r=s.find((function(e){return e.name===c.name}));r?window.confirm("".concat(c.name," already exist. Replace old number with new one?"))&&h(r.id,c).then((function(e){i(s.map((function(t){return t.id!==r.id?t:e}))),n(t.map((function(t){return t.id!==r.id?t:e}))),o({msg:"Success updated",type:"success"})})).catch((function(){o({msg:"Update failed. Refresh the page may fix it.",type:"error"})})):""===c.name?o({msg:"Name can not be empty.",type:"notice"}):j(c).then((function(e){i(s.concat(e)),n(t.concat(e)),o({msg:"Success added",type:"success"})})).catch((function(){return o({msg:"Add person failed. Refresh the page may fix it.",type:"error"})}))},children:"add"})})]})},p=function(e){var t=e.name,n=e.number,c=e.id,s=e.removeFunc;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{type:"submit",onClick:s,children:"delete"})})]},c)},O=function(e){var t=e.filted,n=e.setFilted,c=e.persons,s=e.setPersons,i=e.createNotice;return Object(r.jsxs)("table",{border:"1",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"name"}),Object(r.jsx)("th",{children:"number"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var a=e.name,o=e.number,u=e.id;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(p,{name:a,number:o,id:u,removeFunc:function(){return function(e){console.log("trying to delete ".concat(e));var r=c.find((function(t){return t.id===e})).name;window.confirm("Really delete ".concat(r,"?"))&&f(e).then((function(){n(t.filter((function(t){return t.id!==e}))),s(c.filter((function(t){return t.id!==e}))),i({msg:"Success deleted",type:"success"})})).catch((function(e){console.log(e),i({msg:"Delete Failed. Refresh the page may fix it.",type:"error"})}))}(u)}})})}))})]})},x=function(e){var t=e.msg,n=e.type;return null===t?null:Object(r.jsx)("div",{className:"notify",children:Object(r.jsx)("p",{className:n,children:t})})},g=(n(37),function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(n),u=Object(c.a)(i,2),d=u[0],l=u[1],j=Object(a.useState)({msg:null,type:"error"}),f=Object(c.a)(j,2),h=f[0],p=f[1];Object(a.useEffect)((function(){b().then((function(e){s(e),l(e)}))}),[]);var g=function(e){var t=e.msg,n=e.type;p({msg:t,type:n}),setTimeout((function(){p({msg:null,type:null})}),5e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{msg:h.msg,type:h.type}),Object(r.jsx)(o,{persons:n,setFilted:l}),Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(m,{filted:d,setFilted:l,persons:n,setPersons:s,createNotice:g}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(O,{filted:d,setFilted:l,persons:n,setPersons:s,createNotice:g})]})});i.a.render(Object(r.jsx)(g,{}),document.getElementById("root"));t.default=g}},[[38,1,2]]]);
//# sourceMappingURL=main.838a37d9.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[952],{7952:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(5264),r=n(4654),s=n(9439),o=n(2791),c="ContactForm_form__container__ReeGK",u="ContactForm_form__label__8W82B",i="ContactForm_form__input__VGD4-",l="ContactForm_form__button__MT1Jk",m=n(9434),_=n(3634),f=n(6916),d=function(e){return e.contacts.items},h=function(e){return e.filter},p=function(e){return e.contacts.isLoading},x=function(e){return e.contacts.error},b=(0,f.P1)([d,h],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),v=n(184),C=function(){var e=(0,m.v9)(d),t=(0,m.I0)(),n=(0,o.useState)(""),a=(0,s.Z)(n,2),r=a[0],f=a[1],h=(0,o.useState)(""),p=(0,s.Z)(h,2),x=p[0],b=p[1],C=function(e){var t=e.currentTarget,n=t.value,a=t.name;"name"===a?f(n):"number"===a&&b(n)},j=function(){f(""),b("")};return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements,r=a.name,s=a.number;e.some((function(e){return e.name.toLowerCase()===r.value.toLowerCase()}))?(alert("".concat(r," is already in contacts")),j()):(t((0,_.uK)({name:r.value,number:s.value})),j())},className:c,children:[(0,v.jsxs)("label",{className:u,children:["Name",(0,v.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:C,value:r})]}),(0,v.jsxs)("label",{className:u,children:["Number",(0,v.jsx)("input",{className:i,type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:C,value:x})]}),(0,v.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},j="Filter_filter__text__aAasw",N="Filter_filter__input__toa89",k=n(4808),y=function(){var e=(0,m.v9)(h),t=(0,m.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{className:j,children:"Find contacts by name"}),(0,v.jsx)("input",{className:N,name:"filter",type:"text",value:e,onChange:function(e){return t((0,k.M)(e.target.value))}})]})},F="ContactListItem_contact__item__gRkIy",g="ContactListItem_contact__btn__D0pkC",w=function(e){var t=e.contact,n=(0,m.I0)(),a=t.name,r=t.phone;return(0,v.jsxs)("li",{className:F,children:[(0,v.jsxs)("p",{children:[a,"  ",r]}),(0,v.jsx)("button",{className:g,onClick:function(){return n((0,_.GK)(t.id))},type:"button",children:"Delete"})]})},I=function(){var e=(0,m.v9)(b);return(0,v.jsx)("ul",{children:e.map((function(e){return(0,v.jsx)(w,{contact:e},e.id)}))})},L="Contacts_phonebook__3f0qH",A="Contacts_phonebook__title__4JWGV",D="Contacts_contacts__title__sUt0i",G=function(){var e=(0,m.I0)(),t=(0,m.v9)(p),n=(0,m.v9)(x);return(0,o.useEffect)((function(){e((0,_.yF)())}),[e]),(0,v.jsxs)("div",{className:L,children:[(0,v.jsx)("h1",{className:A,children:"Phonebook"}),(0,v.jsx)(C,{}),(0,v.jsx)("h2",{className:D,children:"Contacts"}),(0,v.jsx)(y,{}),t&&(0,v.jsx)(r.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"}),n&&a.Notify.failure({error:n}),(0,v.jsx)(I,{})]})}}}]);
//# sourceMappingURL=952.425980e5.chunk.js.map
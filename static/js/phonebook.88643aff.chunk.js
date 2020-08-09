(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{137:function(e,t,n){e.exports={title:"Section_title__3k5tS"}},138:function(e,t,n){e.exports={form:"ContactForm_form__eyJhV",formLabel:"ContactForm_formLabel__ODlDV"}},150:function(e,t,n){e.exports={box:"ContactListItem_box__1cD9T",item:"ContactListItem_item__1V3n1"}},152:function(e,t,n){e.exports={list:"ContactList_list__3Zf27"}},153:function(e,t,n){e.exports={title:"Filter_title__2kjBs",input:"Filter_input__22fQL"}},178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var a=n(11),r=n(47),c=n(48),o=n(51),l=n(49),i=n(0),u=n.n(i),m=n(137),s=n.n(m),f=function(e){var t=e.title,n=e.children;return u.a.createElement("section",null,u.a.createElement("h2",{className:s.a.title},t),n)},b=n(3),d=n(175),h=n(148),p=n.n(h),C=n(177),v=n(138),g=n.n(v),E=n(139),_=n.n(E),y=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.generateId=function(){_.a.generate()},e.handleFormFill=function(){var t=e.state,n=t.name,a=t.number,r=e.props.existingContactsName.includes(n.toLowerCase()),c=!n||!a,o=n.length<3;return r?alert("".concat(n," is already in contacts")):c?alert("Fill the form"):o?alert("Name should have more than 3 letters"):void e.props.onSubmit({name:n,number:a,id:e.generateId()})},e.reset=function(){e.setState({name:"",number:""})},e.handleSubmit=function(t){t.preventDefault(),e.handleFormFill(),e.reset()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return u.a.createElement("form",{onSubmit:this.handleSubmit,className:g.a.form},u.a.createElement(C.a,{required:!0,id:"contact-name",label:"Name",variant:"filled",type:"text",name:"name",value:t,onChange:this.handleChange,className:g.a.formLabel,autoComplete:"off"}),u.a.createElement(C.a,{required:!0,id:"contact-number",label:"Number",variant:"filled",type:"tel",name:"number",value:n,onChange:this.handleChange,className:g.a.formLabel,autoComplete:"off"}),u.a.createElement(d.a,{color:"primary","aria-label":"add",type:"submit"},u.a.createElement(p.a,null)))}}]),n}(i.Component),j=n(50),N=Object(a.b)((function(e){return{existingContactsName:j.d.getExistingContactsName(e)}}),(function(e){return{onSubmit:function(t){return e(j.b.addContact(t))}}}))(y),O=n(36),L=n(176),k=n(151),x=n.n(k),F=n(182),S=n(150),w=n.n(S),D=function(e){var t=e.contact,n=e.onDeleteContact,a=t.name,r=t.number;return u.a.createElement("div",{className:w.a.box},u.a.createElement(F.a,{className:w.a.item,primary:a,secondary:r}),u.a.createElement("br",null),u.a.createElement(L.a,{className:w.a.button,"aria-label":"delete",type:"button",onClick:n},u.a.createElement(x.a,null)))},I=n(152),V=n.n(I),J=function(e){var t=e.contacts,n=e.deleteContact;return u.a.createElement("ul",{className:V.a.list},t.map((function(e){var t=e.id,a=Object(O.a)(e,["id"]);return u.a.createElement(D,{key:t,contact:a,onDeleteContact:function(){return n(t)}})})))},q=Object(a.b)((function(e){return{contacts:j.d.getVisibleContacts(e)}}),(function(e){return{deleteContact:function(t){return e(j.b.deleteContact(t))}}}))(J),A=n(153),T=n.n(A),B=function(e){var t=e.value,n=e.onChange;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",{className:T.a.title},"Find contacts by name"),u.a.createElement(C.a,{type:"search",value:t,onChange:n,className:T.a.input,id:"filter",label:"Search by name...",variant:"filled"}))},M=Object(a.b)((function(e){return{value:j.d.getFilter(e)}}),(function(e){return{onChange:function(t){return e(Object(j.a)(t.target.value))}}}))(B),P=n(65),Q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return u.a.createElement(P.a,null,u.a.createElement(f,{title:"Add new contact"},this.props.isLoadingContacts&&u.a.createElement("h1",null,"Loading..."),u.a.createElement(N,null)),u.a.createElement(M,null),u.a.createElement(f,{title:"Your Phone book"},u.a.createElement(q,null)))}}]),n}(i.Component),Y=Object(a.b)((function(e){return{isLoadingContacts:j.d.getLoading(e)}}),(function(e){return{fetchContacts:function(){return e(j.b.fetchContacts())}}}))(Q)}}]);
//# sourceMappingURL=phonebook.88643aff.chunk.js.map
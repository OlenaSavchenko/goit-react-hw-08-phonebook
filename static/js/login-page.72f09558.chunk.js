(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{156:function(e,a,t){e.exports={title:"LoginView_title__1k7ay",form:"LoginView_form__12Z9B"}},181:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(11),r=t(9),o=t(3),i=t(47),l=t(48),s=t(51),u=t(49),m=t(0),c=t.n(m),d=t(119),h=t(178),p=t(156),f=t.n(p),b=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(o.a)({},n,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return c.a.createElement("div",null,c.a.createElement("h1",{className:f.a.title},"Please, enter your email and password"),c.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.form,autoComplete:"off"},c.a.createElement(h.a,{required:!0,id:"email",label:"Enter your email",defaultValue:a,variant:"outlined",type:"email",name:"email",onChange:this.handleChange,margin:"normal"}),c.a.createElement(h.a,{required:!0,id:"password",label:"Enter your password",defaultValue:t,variant:"outlined",type:"password",name:"password",onChange:this.handleChange,margin:"normal"}),c.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Go to Phonebook")))}}]),t}(m.Component),g={onLogin:r.a.logIn},w=Object(n.b)(null,g)(b)}}]);
//# sourceMappingURL=login-page.72f09558.chunk.js.map
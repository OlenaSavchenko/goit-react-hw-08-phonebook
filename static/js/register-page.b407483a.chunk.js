(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{155:function(e,a,t){e.exports={title:"RegisterView_title__1TmAr",form:"RegisterView_form__20RAw"}},180:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t(3),r=t(47),i=t(48),l=t(51),o=t(49),s=t(0),m=t.n(s),u=t(119),c=t(178),d=t(155),h=t.n(d),p=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,r=t.name,i=t.value;e.setState(Object(n.a)({},r,i))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return m.a.createElement("div",null,m.a.createElement("h1",{className:h.a.title},"Registration"),m.a.createElement("form",{onSubmit:this.handleSubmit,className:h.a.form,autoComplete:"off"},m.a.createElement(c.a,{required:!0,id:"name",label:"Enter your name",defaultValue:a,variant:"outlined",type:"text",name:"name",onChange:this.handleChange,margin:"normal"}),m.a.createElement(c.a,{required:!0,id:"email",label:"Enter your email",defaultValue:t,variant:"outlined",type:"email",name:"email",onChange:this.handleChange,margin:"normal"}),m.a.createElement(c.a,{required:!0,id:"password",label:"Enter password",defaultValue:n,variant:"outlined",type:"password",name:"password",onChange:this.handleChange,margin:"normal"}),m.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Create account")))}}]),t}(s.Component),f=t(11),g={onRegister:t(9).a.register},b=Object(f.b)(null,g)(p)}}]);
//# sourceMappingURL=register-page.b407483a.chunk.js.map
(this["webpackJsonpreact-books-jsonServer"]=this["webpackJsonpreact-books-jsonServer"]||[]).push([[0],{64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(32),s=n.n(a),o=n(7),i=n(2),h=n(0),j=function(){return Object(h.jsx)("div",{children:"Homepage"})},u=n(18),l=n(9),b=n.n(l),d=n(11),p=n(12),O=n(13),x=n(16),v=n(15),m=n(14),f=n.n(m),k=function(t){var e=t.books;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Author books component"}),Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsxs)(o.b,{to:"/books/".concat(t.id),children:[" ",t.title]})},t.id)}))})]})},g=function(t){Object(x.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(p.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={authors:[]},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("http://localhost:3000/authors?_embed=books");case 2:e=t.sent,this.setState({authors:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.authors;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"This is authors"}),Object(h.jsx)("ul",{children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(o.c,{to:"".concat(t.props.match.url,"/").concat(e.id),children:e.name})},e.id)}))}),Object(h.jsx)(i.a,{path:"".concat(this.props.match.path,"/:authorId"),render:function(e){var n=Number(e.match.params.authorId),c=t.state.authors.find((function(t){return t.id===n}));return c?Object(h.jsx)(k,Object(u.a)(Object(u.a)({},e),{},{books:c.books})):null}})]})}}]),n}(c.Component),y=function(t){Object(x.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(p.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={books:[]},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("http://localhost:3000/books");case 2:e=t.sent,this.setState({books:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.books,e=this.props.match.url;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"This is books"}),Object(h.jsx)("ul",{children:t.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"".concat(e,"/").concat(t.id),children:t.title})},t.id)}))})]})}}]),n}(c.Component),N=function(t){Object(x.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(p.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={descr:null,genre:null,id:null,imgUrl:null,title:null,author:null},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.bookId,t.next=3,f()("http://localhost:3000/books/".concat(e,"?_expand=author"));case 3:n=t.sent,this.setState(Object(u.a)({},n.data));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"This is a one book page "}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Book ",this.props.match.params.bookId]})}),Object(h.jsx)("img",{src:this.state.imgUrl,alt:""}),Object(h.jsx)("h2",{children:this.state.title}),this.state.author&&Object(h.jsxs)("p",{children:["Author: ",this.state.author.name]}),Object(h.jsxs)("p",{children:["Genre: ",this.state.genre]}),Object(h.jsx)("p",{children:this.state.descr})]})}}]),n}(c.Component),w=function(){return Object(h.jsx)("div",{children:"404 - page not found"})},A=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.c,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink--active",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.c,{to:"/authors",className:"NavLink",activeClassName:"NavLink--active",children:"Authors"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.c,{to:"/books",className:"NavLink",activeClassName:"NavLink--active",children:"Books"})})]}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:j}),Object(h.jsx)(i.a,{path:"/authors",component:g}),Object(h.jsx)(i.a,{path:"/books/:bookId",component:N}),Object(h.jsx)(i.a,{path:"/books",component:y}),Object(h.jsx)(i.a,{component:w})]})]})};n(63),n(64);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(A,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.cf0fd121.chunk.js.map
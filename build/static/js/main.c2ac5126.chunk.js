(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,a){t.exports=a(33)},27:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),c=(a(27),a(2)),p=a(3),l=a(5),s=a(4),h=a(6),m=a(1);function u(){return o.a.createElement("div",{className:"headerwrap"},o.a.createElement("header",null,o.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}),o.a.createElement("form",{className:"navbar-search"},o.a.createElement("input",{type:"text",className:"search-query "})),o.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},o.a.createElement(m.b,{to:"/home"},"\u9996\u9875"),o.a.createElement(m.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),o.a.createElement(m.b,{to:"/api"},"API"),o.a.createElement(m.b,{to:"/about"},"\u5173\u4e8e"),o.a.createElement(m.b,{to:"/login"},"\u767b\u5f55"))))}var d,f,g,b,v=a(11),y=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;d=this.props.match.params.page,fetch("https://cnodejs.org/api/v1/topics?page="+d).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.data.map((function(t,e){return o.a.createElement("div",{key:t.id,style:{width:900,height:52,background:"#fff",borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}},o.a.createElement("img",{src:t.author.avatar_url,style:{float:"left",width:30,heigth:30}}),o.a.createElement("p",{style:{float:"left",marginLeft:"5px",marginTop:"8px"}},t.reply_count,"/",t.visit_count),o.a.createElement(m.b,{to:"/all/"+d+"/"+e},o.a.createElement("div",{style:{color:"black",fontSize:"14px",float:"left",marginLeft:"20px",marginTop:"8px",width:540,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dangerouslySetInnerHTML:{__html:t.title}})),o.a.createElement("p",{style:{width:"50px",height:"20px",marginTop:"8px",float:"right"}},"4\u5c0f\u65f6\u524d"),o.a.createElement("img",{src:t.author.avatar_url,style:{width:30,heigth:30,float:"right",marginRight:"5px"}}))})),o.a.createElement("ul",{style:{float:"left",width:900,height:52,backgroundColor:"white"}},[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement("li",{key:t,style:{backgroundColor:"#ffffff",float:"left",width:30,padding:"4px 12px",lineHeight:"20px",border:"solid 1px #e1e1e1"}},o.a.createElement(m.b,{to:"/home/topic/"+t},t))}))))}}]),e}(n.Component),E=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;f=this.props.match.params.page,fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+f).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"showContent",value:function(t){}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.state.data.map((function(e,a){return o.a.createElement("div",{onClick:function(){return t.showContent(e)},key:e.id,style:{width:900,height:52,background:"#fff",borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}},o.a.createElement("img",{src:e.author.avatar_url,style:{float:"left",width:30,heigth:30}}),o.a.createElement("p",{style:{float:"left",marginLeft:"5px",marginTop:"8px"}},e.reply_count,"/",e.visit_count),o.a.createElement(m.b,{to:"/good/"+f+"/"+a},o.a.createElement("div",{style:{color:"black",fontSize:"14px",float:"left",marginLeft:"20px",marginTop:"8px",width:540,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dangerouslySetInnerHTML:{__html:e.title}})),o.a.createElement("p",{style:{width:"50px",height:"20px",marginTop:"8px",float:"right"}},"4\u5c0f\u65f6\u524d"),o.a.createElement("img",{src:e.author.avatar_url,style:{width:30,heigth:30,float:"right",marginRight:"5px"}}))})),o.a.createElement("ul",{style:{float:"left",width:900,height:52,backgroundColor:"white"}},[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement("li",{key:t,style:{backgroundColor:"#ffffff",float:"left",width:30,padding:"4px 12px",lineHeight:"20px",border:"solid 1px #e1e1e1"}},o.a.createElement(m.b,{to:"/home/topic/"+t},t))}))))}}]),e}(n.Component),x=1,j=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;x=this.props.match.params.page,console.log(x),fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+x).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"showContent",value:function(t){}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.state.data.map((function(e,a){return o.a.createElement("div",{onClick:function(){return t.showContent(e)},key:e.id,style:{width:900,height:52,background:"#fff",borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}},o.a.createElement("img",{src:e.author.avatar_url,style:{float:"left",width:30,heigth:30}}),o.a.createElement("p",{style:{float:"left",marginLeft:"5px",marginTop:"8px"}},e.reply_count,"/",e.visit_count),o.a.createElement(m.b,{to:"/share/"+x+"/"+a},o.a.createElement("div",{style:{color:"black",fontSize:"14px",float:"left",marginLeft:"20px",marginTop:"8px",width:540,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dangerouslySetInnerHTML:{__html:e.title}})),o.a.createElement("p",{style:{width:"50px",height:"20px",marginTop:"8px",float:"right"}},"4\u5c0f\u65f6\u524d"),o.a.createElement("img",{src:e.author.avatar_url,style:{width:30,heigth:30,float:"right",marginRight:"5px"}}))})),o.a.createElement("ul",{style:{float:"left",width:900,height:52,backgroundColor:"white"}},[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement("li",{key:t,style:{backgroundColor:"#ffffff",float:"left",width:30,padding:"4px 12px",lineHeight:"20px",border:"solid 1px #e1e1e1"}},o.a.createElement(m.b,{to:"/home/topic/"+t},t))}))))}}]),e}(n.Component),k=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;g=this.props.match.params.page,fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+g).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"showContent",value:function(t){}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.state.data.map((function(e,a){return o.a.createElement("div",{onClick:function(){return t.showContent(e)},key:e.id,style:{width:900,height:52,background:"#fff",borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}},o.a.createElement("img",{src:e.author.avatar_url,style:{float:"left",width:30,heigth:30}}),o.a.createElement("p",{style:{float:"left",marginLeft:"5px",marginTop:"8px"}},e.reply_count,"/",e.visit_count),o.a.createElement(m.b,{to:"/job/"+g+"/"+a},o.a.createElement("div",{style:{color:"black",fontSize:"14px",float:"left",marginLeft:"20px",marginTop:"8px",width:540,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dangerouslySetInnerHTML:{__html:e.title}})),o.a.createElement("p",{style:{width:"50px",height:"20px",marginTop:"8px",float:"right"}},"4\u5c0f\u65f6\u524d"),o.a.createElement("img",{src:e.author.avatar_url,style:{width:30,heigth:30,float:"right",marginRight:"5px"}}))})),o.a.createElement("ul",{style:{float:"left",width:900,height:52,backgroundColor:"white"}},[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement("li",{key:t,style:{backgroundColor:"#ffffff",float:"left",width:30,padding:"4px 12px",lineHeight:"20px",border:"solid 1px #e1e1e1"}},o.a.createElement(m.b,{to:"/home/topic/"+t},t))}))))}}]),e}(n.Component),w=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?page="+e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"showContent",value:function(t){}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.state.data.map((function(e,a){return o.a.createElement("div",{onClick:function(){return t.showContent(e)},key:e.id,style:{width:900,height:52,background:"#fff",borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}},o.a.createElement("img",{src:e.author.avatar_url,style:{float:"left",width:30,heigth:30}}),o.a.createElement("p",{style:{float:"left",marginLeft:"5px",marginTop:"8px"}},e.reply_count,"/",e.visit_count),o.a.createElement(m.b,{to:"/all/undefined/"+a},o.a.createElement("div",{style:{color:"black",fontSize:"14px",float:"left",marginLeft:"20px",marginTop:"8px",width:540,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dangerouslySetInnerHTML:{__html:e.title}})),o.a.createElement("p",{style:{width:"50px",height:"20px",marginTop:"8px",float:"right"}},"4\u5c0f\u65f6\u524d"),o.a.createElement("img",{src:e.author.avatar_url,style:{width:30,heigth:30,float:"right",marginRight:"5px"}}))})),o.a.createElement("ul",{style:{float:"left",width:900,height:52,backgroundColor:"white"}},[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement("li",{key:t,style:{backgroundColor:"#ffffff",float:"left",width:30,padding:"4px 12px",lineHeight:"20px",border:"solid 1px #e1e1e1"}},o.a.createElement(m.b,{to:"/home/topic/"+t},t))}))))}}]),e}(n.Component),O=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;b=this.props.match.params.page,fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+b).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"showContent",value:function(t){}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.state.data.map((function(e,a){return console.log(e),o.a.createElement("div",{onClick:function(){return t.showContent(e)},key:e.id,style:{width:900,height:52,background:"#fff",borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}},o.a.createElement("img",{src:e.author.avatar_url,style:{float:"left",width:30,heigth:30}}),o.a.createElement("p",{style:{float:"left",marginLeft:"5px",marginTop:"8px"}},e.reply_count,"/",e.visit_count),o.a.createElement(m.b,{to:"/ask/"+b+"/"+a},o.a.createElement("div",{style:{color:"black",fontSize:"14px",float:"left",marginLeft:"20px",marginTop:"8px",width:540,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dangerouslySetInnerHTML:{__html:e.title}})),o.a.createElement("p",{style:{width:"50px",height:"20px",marginTop:"8px",float:"right"}},"4\u5c0f\u65f6\u524d"),o.a.createElement("img",{src:e.author.avatar_url,style:{width:30,heigth:30,float:"right",marginRight:"5px"}}))})),o.a.createElement("ul",{style:{float:"left",width:900,height:52,backgroundColor:"white"}},[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement("li",{key:t,style:{backgroundColor:"#ffffff",float:"left",width:30,padding:"4px 12px",lineHeight:"20px",border:"solid 1px #e1e1e1"}},o.a.createElement(m.b,{to:"/home/topic/"+t},t))}))))}}]),e}(n.Component),C=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.match.url;return o.a.createElement("div",{class:"panel"},o.a.createElement("div",{class:"header"},o.a.createElement(m.b,{class:"tab-topic current-tab",to:t+"/all/1"},"\u5168\u90e8"),o.a.createElement(m.b,{class:"tab-topic current-tab",to:t+"/good/1"},"\u7cbe\u534e"),o.a.createElement(m.b,{class:"tab-topic current-tab",to:t+"/share/1"},"\u5206\u4eab"),o.a.createElement(m.b,{class:"tab-topic current-tab",to:t+"/question/1"},"\u95ee\u7b54"),o.a.createElement(m.b,{class:"tab-topic current-tab",to:t+"/job/1"},"\u62db\u8058"),o.a.createElement(m.b,{class:"tab-topic current-tab",to:t+"/test/1"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),o.a.createElement("div",null,o.a.createElement(v.d,null,o.a.createElement(v.b,{path:"".concat(t)+"/all/:page",component:y}),o.a.createElement(v.b,{path:"".concat(t)+"/good/:page",component:E}),o.a.createElement(v.b,{path:"".concat(t)+"/share/:page",component:j}),o.a.createElement(v.b,{path:"".concat(t)+"/question/:page",component:O}),o.a.createElement(v.b,{path:"".concat(t)+"/job/:page",component:k}),o.a.createElement(v.b,{path:"".concat(t)+"/test/:page",component:w}),o.a.createElement(v.b,{path:"/home/topic/:page",component:y}),o.a.createElement(v.a,{from:"/*",to:t+"/all/1"}))))}}]),e}(n.Component),_=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,"API")}}]),e}(n.Component),S=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{style:{width:900,height:52,backgroundColor:"#f6f6f6"}},o.a.createElement("span",{style:{color:"#80bd01"}},"\u4e3b\u9875"),"/Nodejs\u65b0\u624b\u5165\u95e8")}}]),e}(n.Component),T=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,"About")}}]),e}(n.Component),L=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{width:900,height:52,backgroundColor:"#f6f6f6"}},o.a.createElement("span",{style:{color:"#80bd01"}},"\u4e3b\u9875"),"/\u767b\u5f55"),o.a.createElement("div",{style:{backgroundColor:"#ffffff",paddingTop:40}},o.a.createElement("form",{id:"signin_form",action:"/signin",method:"post"},o.a.createElement("div",{style:{fontSize:14,marginBottom:20}},o.a.createElement("label",{style:{fontSize:14,fontWeight:400}},"\u7528\u6237\u540d"),o.a.createElement("div",{style:{marginBottom:20}},o.a.createElement("input",{style:{width:284,height:30,borderRadius:4},id:"name",name:"name",size:"30",type:"text"}))),o.a.createElement("div",{style:{fontSize:14,marginBottom:20}},o.a.createElement("label",{for:"pass"},"\u5bc6\u7801"),o.a.createElement("div",null,o.a.createElement("input",{style:{width:284,height:30,borderRadius:4},id:"pass",name:"pass",size:"30",type:"password"}))),o.a.createElement(m.b,{to:"/home/all"},o.a.createElement("input",{type:"submit",style:{borderRadius:3,width:52,height:34,backgroundColor:"#08c"},value:"\u767b\u5f55"})))))}}]),e}(n.Component),D=1,M=0,H=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;D=this.props.match.params.page,M=this.props.match.params.id,console.log(D),fetch("https://cnodejs.org/api/v1/topics?page="+D).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data[M]})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data[M]})}))}}},{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundColor:"white",padding:"10px 10px 10px 10px"}},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),e}(n.Component),I=1,z=0,B=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;I=this.props.match.params.page,z=this.props.match.params.id,console.log(I),fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+I).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data[z]})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data[z]})}))}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{backgroundColor:"white",padding:"10px 10px 10px 10px"},dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),e}(n.Component),U=1,R=0,N=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;U=this.props.match.params.page,R=this.props.match.params.id,console.log(U),fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+U).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data[R]})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data[R]})}))}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{backgroundColor:"white",padding:"10px 10px 10px 10px"},dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),e}(n.Component),q=1,A=0,J=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;q=this.props.match.params.page,A=this.props.match.params.id,console.log(q),fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+q).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data[A]})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data[A]})}))}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{backgroundColor:"white",padding:"10px 10px 10px 10px"},dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),e}(n.Component),P=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(u,null),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"content"},o.a.createElement(v.b,{path:"/home",component:C}),o.a.createElement(v.b,{path:"/api",component:_}),o.a.createElement(v.b,{path:"/start",component:S}),o.a.createElement(v.b,{path:"/about",component:T}),o.a.createElement(v.b,{path:"/login",component:L}),o.a.createElement(v.b,{path:"/all/:page/:id",component:H}),o.a.createElement(v.b,{path:"/share/:page/:id",component:B}),o.a.createElement(v.b,{path:"/ask/:page/:id",component:B}),o.a.createElement(v.b,{path:"/good/:page/:id",component:N}),o.a.createElement(v.b,{path:"/job/:page/:id",component:J})),o.a.createElement("div",{className:"sider"}))))}}]),e}(n.Component);i.a.render(o.a.createElement(P,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c2ac5126.chunk.js.map
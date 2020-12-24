(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"406d":function(t,e,n){},"4d66":function(t,e,n){"use strict";var a=n("406d"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},s=[],r={mounted:function(){this.$store.commit("auth/SET_API_TOKEN",this.$route.params.token),this.$router.push({name:"web"})}},c=r,l=n("2877"),d=Object(l["a"])(c,o,s,!1,null,null,null);d.options.__file="login.vue";var u=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-8"},[n("div",{staticClass:"flex flex-col lg:flex-row"},[n("div",{staticClass:"md:mr-8 md:max-w-1/2"},[n("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.saveCode(e)}}},[n("label",{staticClass:"label mb-2 mt-4 block"},[t._v("Code type")]),n("Segments",{attrs:{segments:["Static","Dynamic"]},model:{value:t.codeType,callback:function(e){t.codeType=e},expression:"codeType"}}),n("FancyInput",{attrs:{trim:!0,label:"Link",placeholder:"https://oliverdvorski.com"},model:{value:t.redirect,callback:function(e){t.redirect=e},expression:"redirect"}}),n("FancyInput",{attrs:{disabled:!t.allowDynamic,label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("FancyInput",{attrs:{disabled:!t.allowDynamic,label:"Description (optional)",type:"textarea"},nativeOn:{keydown:function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter"))&&e.ctrlKey?t.saveCode(e):null}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("transition",{attrs:{name:"fade"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:"Dynamic"===t.codeType,expression:"codeType === 'Dynamic'"}],staticClass:"raised mt-2"},[t._v("Save")])])],1)]),n("div",{class:"Dynamic"===t.codeType?"w-full":null},["Static"===t.codeType?n("QR",{staticClass:"mt-8",attrs:{string:t.redirect}}):t._e(),!1===t.user?n("transition",{attrs:{name:"small-modal"}},[n("OAuthMessage",{directives:[{name:"show",rawName:"v-show",value:"Static"!==t.codeType,expression:"codeType !== 'Static'"}]})],1):t._e(),n("dynamicCodeList",{directives:[{name:"show",rawName:"v-show",value:"Dynamic"===t.codeType&&!1!==t.user,expression:"codeType === 'Dynamic' && user !== false"}]})],1)])])},h=[],m=(n("96cf"),n("3040")),f=(n("7f7f"),n("c93e")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.styling},[n("p",{staticClass:"leading-normal mb-4"},[t._v("\n    Due to technical limitations of dynamic QR codes, you'll need an account to create one. For your convenience, QR Dyanmics supports OAuth so here's a couple of buttons:\n  ")]),n("a",{staticClass:"button raised my-2 flex w-64 text-center google",attrs:{href:t.backendUrl+"/login/google"},on:{click:function(e){t.$store.commit("loading",!0)}}},[n("Icon",{staticClass:"mr-4",attrs:{name:"google",size:"16"}}),t._v("\n    Google\n  ")],1),n("a",{staticClass:"button raised my-2 flex w-64 text-center facebook",attrs:{href:t.backendUrl+"/login/facebook"},on:{click:function(e){t.$store.commit("loading",!0)}}},[n("Icon",{staticClass:"mr-4",attrs:{name:"facebook",size:"16"}}),t._v("\n    Facebook\n  ")],1),n("a",{staticClass:"button raised my-2 flex w-64 text-center github",attrs:{href:t.backendUrl+"/login/github"},on:{click:function(e){t.$store.commit("loading",!0)}}},[n("Icon",{staticClass:"mr-4",attrs:{name:"github",size:"16"}}),t._v("\n    Github\n  ")],1),n("loader",{attrs:{condition:t.$store.getters["loading"]}})],1)},g=[],w={data:function(){return{styling:""}},mounted:function(){this.decideHowToRender(),window.addEventListener("resize",this.decideHowToRender)},methods:{decideHowToRender:function(){window.innerWidth<992?this.styling="small-modal":this.styling="regular"}}},b=w,x=(n("df8a"),Object(l["a"])(b,v,g,!1,null,"6a2b32f3",null));x.options.__file="OAuthMessage.vue";var y=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.dyanmicCodeList.length,expression:"dyanmicCodeList.length == 0"}],staticClass:"mt-8 flex items-center"},[n("h3",{staticClass:"font-normal text-grey-dark"},[t._v("Your dynamic codes will show up here")])]),n("ul",{staticClass:"dynamic-code-list list-reset"},t._l(t.dyanmicCodeList,function(e,a){return n("li",{key:a,staticClass:"list-item flex flex-col bg-white rounded cursor-pointer shadow hover:shadow-lg p-4",on:{click:function(n){t.openModal(e,a)}}},[n("figure",[n("QR",{attrs:{string:t.getQrCodeLocation(e),"should-export":!1}})],1),n("main",{staticClass:"mt-4"},[n("h3",{staticClass:"font-medium truncate"},[t._v(t._s(e.name))]),n("p",{staticClass:"text-sm mt-2 truncate text-brand",on:{click:function(t){t.stopPropagation()}}},[n("a",{attrs:{href:e.redirect,target:"_blank"}},[t._v(t._s(e.redirect))])])])])})),n("Modal",{attrs:{show:t.editModal},on:{close:function(e){t.editModal=!1}}},[n("h2",{attrs:{slot:"heading"},slot:"heading"},[t._v("Edit Dynamic QR Code")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.updateCode(e)}}},[n("input",{staticClass:"hidden",attrs:{type:"submit"}}),n("FancyInput",{attrs:{label:"Link"},model:{value:t.editing.redirect,callback:function(e){t.$set(t.editing,"redirect",e)},expression:"editing.redirect"}}),n("FancyInput",{attrs:{label:"Name"},model:{value:t.editing.name,callback:function(e){t.$set(t.editing,"name",e)},expression:"editing.name"}}),n("FancyInput",{attrs:{label:"Description",type:"textarea"},nativeOn:{keydown:function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter"))&&e.ctrlKey?t.updateCode(e):null}},model:{value:t.editing.description,callback:function(e){t.$set(t.editing,"description",e)},expression:"editing.description"}})],1)]),n("div",{staticClass:"flex-wrap",attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"flat danger mr-2",on:{click:t.openWarningModal}},[t._v("Delete")]),n("div",{staticClass:"flex-1"}),n("button",{staticClass:"flat mr-2",on:{click:t.updateCode}},[t._v("Save")]),n("button",{staticClass:"flat",on:{click:function(e){t.editModal=!1}}},[t._v("Close")])])]),n("Modal",{attrs:{show:t.warningModal},on:{close:function(e){t.warningModal=!1}}},[n("h2",{attrs:{slot:"heading"},slot:"heading"},[t._v("Are you sure?")]),n("div",{attrs:{slot:"body"},slot:"body"},[t._v("\n      You're about to delete a dynamic QR Code. All data related to that code will be deleted. If you have shared the code with someone, that code will stop working. This action cannot be undone.\n    ")]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"flat danger mr-2",on:{click:t.deleteCode}},[t._v("Delete it")]),n("button",{staticClass:"flat",on:{click:t.closeWarningModal}},[t._v("Cancel")])])]),n("loader",{attrs:{condition:t.loading}})],1)},k=[],_=(n("f751"),n("b54a"),new a["a"]),z=n("2f62"),L={prop:[],data:function(){return{editing:{},editModal:!1,warningModal:!1}},computed:Object(f["a"])({},Object(z["b"])({dyanmicCodeList:"web/dyanmicCodeList",loading:"loading"})),mounted:function(){var t=this;_.$on("dynamicCodeAdded",function(e){t.$store.dispatch("web/new",e)})},methods:{getQrCodeLocation:function(t){return this.shortCodeLocation+"/"+t.link},openModal:function(t,e){this.editing=Object.assign({},t),this.editing.index=e,this.editModal=!0},openWarningModal:function(){this.editModal=!1,this.warningModal=!0},closeWarningModal:function(){this.warningModal=!1,this.editModal=!0},updateCode:function(){this.$store.dispatch("web/update",this.editing),this.editModal=!1},deleteCode:function(){this.$store.dispatch("web/delete",this.editing),this.warningModal=!1,this.editing={}}}},M=L,O=(n("f824"),Object(l["a"])(M,C,k,!1,null,null,null));O.options.__file="dynamicCodeList.vue";var S=O.exports,T={components:{OAuthMessage:y,dynamicCodeList:S},data:function(){return{redirect:"",name:"",description:"",dynamicLink:"",codeType:"Static",showModal:!0}},computed:Object(f["a"])({allowDynamic:function(){return"Dynamic"===this.codeType&&!1!==this.user}},Object(z["b"])("auth",["user"])),methods:{saveCode:function(){""!==this.redirect&&""!==this.name&&(_.$emit("dynamicCodeAdded",{redirect:this.redirect,name:this.name,description:this.description}),this.redirect="",this.name="",this.description="")}},mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("auth/fetchUser");case 2:return t.next=4,this.$store.dispatch("web/fetchCodeList");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},R=T,$=Object(l["a"])(R,p,h,!1,null,null,null);$.options.__file="web.vue";var E=$.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-8"},[n("div",{staticClass:"flex flex-col md:flex-row"},[n("div",{staticClass:"md:mr-8 w-full lg:w-auto"},[n("FancyInput",{staticClass:"w-full",attrs:{placeholder:t.poem,label:"Text",type:"textarea"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("div",[n("QR",{staticClass:"mt-8",attrs:{string:t.text}})],1)])])},I=[],H={data:function(){return{text:"",poem:"In what distant deeps or skies.\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?"}}},N=H,P=Object(l["a"])(N,j,I,!1,null,null,null);P.options.__file="text.vue";var D=P.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-8"},[n("div",{staticClass:"flex flex-col md:flex-row"},[n("div",{staticClass:"md:mr-8 w-full lg:w-auto"},[n("FancyInput",{staticClass:"w-full",attrs:{label:"Latitude",type:"number",min:-90,max:90,placeholder:"contact@oliverdvorski.com"},model:{value:t.lat,callback:function(e){t.lat=e},expression:"lat"}}),n("FancyInput",{staticClass:"w-full",attrs:{label:"Longitude",type:"number",min:-180,max:180,placeholder:"Heads or tails?"},model:{value:t.long,callback:function(e){t.long=e},expression:"long"}})],1),n("div",[n("QR",{staticClass:"mt-8",attrs:{string:t.emailCode}})],1)])])},A=[],U={data:function(){return{lat:"45.813228",long:"15.973339"}},computed:{emailCode:function(){return"geo:".concat(this.lat,",").concat(this.long,",400")}}},B=U,Q=Object(l["a"])(B,F,A,!1,null,null,null);Q.options.__file="location.vue";var q=Q.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-8"},[n("div",{staticClass:"flex flex-col md:flex-row"},[n("div",{staticClass:"md:mr-8 w-full lg:w-auto"},[n("FancyInput",{attrs:{label:"Recipient",type:"email",placeholder:"contact@oliverdvorski.com"},model:{value:t.recipient,callback:function(e){t.recipient=e},expression:"recipient"}}),n("FancyInput",{attrs:{label:"Subject (optional)",type:"text",placeholder:"Heads or tails?"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),n("FancyInput",{attrs:{placeholder:t.razor,label:"Message body (optional)",type:"textarea"},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),n("div",[n("QR",{staticClass:"mt-8",attrs:{string:t.emailCode}})],1)])])},W=[],G={data:function(){return{recipient:"",subject:"",body:"",razor:"Occam's razor is the problem-solving principle that, when presented with competing hypothetical answers to a problem, one should select the answer that makes the fewest assumptions. The idea is attributed to William of Ockham (c. 1287–1347), who was an English Franciscan friar, scholastic philosopher and theologian."}},computed:{emailCode:function(){return"MATMSG:TO:".concat(this.recipient,";SUB:").concat(this.subject,";BODY:").concat(this.body,";;")}}},K=G,Y=Object(l["a"])(K,V,W,!1,null,null,null);Y.options.__file="email.vue";var J=Y.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-8"},[n("div",{staticClass:"flex flex-col md:flex-row"},[n("div",{staticClass:"md:mr-8 w-full lg:w-auto"},[n("label",{staticClass:"label mb-2 mt-4 block"},[t._v("Encryption method")]),n("Segments",{attrs:{segments:["WPA","WEP","None"]},model:{value:t.encryption,callback:function(e){t.encryption=e},expression:"encryption"}}),n("FancyInput",{attrs:{label:"Network name (SSID)",type:"text"},model:{value:t.ssid,callback:function(e){t.ssid=e},expression:"ssid"}}),n("FancyInput",{attrs:{disabled:"None"===t.encryption,label:"Password",type:"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("FancyCheckbox",{staticClass:"mt-6",model:{value:t.hidden,callback:function(e){t.hidden=e},expression:"hidden"}},[t._v("Wifi network is hidden")])],1),n("div",[n("QR",{staticClass:"mt-8",attrs:{string:t.qrContent}})],1)])])},Z=[],tt={data:function(){return{ssid:"",encryption:"",password:"",hidden:!1}},computed:{sanitisedEncryption:function(){return"None"===this.encryption?"nopass":this.encryption},qrContent:function(){return"WIFI:T:".concat(this.sanitisedEncryption,";S:").concat(this.ssid,";P:").concat(this.password,";H:").concat(this.hidden,";")}},watch:{encryption:function(){"None"===this.encryption&&(this.password="")}}},et=tt,nt=Object(l["a"])(et,X,Z,!1,null,null,null);nt.options.__file="wifi.vue";var at=nt.exports,it={login:u,web:E,text:D,location:q,email:J,wifi:at},ot=[{path:"/set_token/:token",component:it.login,name:"setToken"},{path:"/web",component:it.web,name:"web"},{path:"/text",component:it.text,name:"text"},{path:"/location",component:it.location,name:"location"},{path:"/email",component:it.email,name:"email"},{path:"/wifi",component:it.wifi,name:"wifi"}],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("div",{staticClass:"container mx-auto"},[n("router-view")],1),n("Notification")],1)},rt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-brand text-white shadow-md",staticStyle:{"padding-top":"5rem"}},[n("div",{staticClass:"container mx-auto nav-bar"},[n("h1",{staticClass:"font-medium mb-4 px-4 md:px-0"},[t._v("QR Dynamics")]),n("div",{staticClass:"list-parent"},[n("ul",{staticClass:"list"},[n("NavItem",{attrs:{name:"web"}},[t._v("Web")]),n("NavItem",{attrs:{name:"wifi"}},[t._v("Wi-Fi")]),n("NavItem",{attrs:{name:"location"}},[t._v("Location")]),n("NavItem",{attrs:{name:"email"}},[t._v("E-mail")]),n("NavItem",{attrs:{name:"text"}},[t._v("Text")])],1)])])])},lt=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"navbar-item"},[n("router-link",{staticClass:"link outline-none",class:t.isActive,attrs:{to:"/"+t.name}},[n("Icon",{attrs:{name:t.name,size:t.iconSize}}),n("span",{staticClass:"ml-2"},[t._t("default")],2)],1)],1)},ut=[],pt={props:{name:{type:String,default:""}},data:function(){return{iconSize:24}},computed:{isActive:function(){return this.name===this.$route.name?"is-active":null}},mounted:function(){this.setIconSize(),window.addEventListener("resize",this.setIconSize)},methods:{setIconSize:function(){this.iconSize=16}}},ht=pt,mt=Object(l["a"])(ht,dt,ut,!1,null,null,null);mt.options.__file="NavItem.vue";var ft=mt.exports,vt={components:{NavItem:ft}},gt=vt,wt=Object(l["a"])(gt,ct,lt,!1,null,null,null);wt.options.__file="NavBar.vue";var bt=wt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"rounded shadow bg-brand text-white fixed pin-r pin-b m-6 px-6 py-4 max-w-sm"},[n("p",{staticClass:"mr-8"},[t._v(t._s(t.message))]),n("icon",{staticClass:"text-white absolute pin-t pin-r mt-4 mr-4 cursor-pointer",attrs:{name:"close",size:"16"},nativeOn:{click:function(e){return t.close(e)}}})],1)])},yt=[],Ct={data:function(){return{show:!1,message:""}},mounted:function(){var t=this;_.$on("flash",function(e){t.show=!0,t.message=e,setTimeout(function(){t.show=!1},3e3)})},methods:{close:function(){this.show=!1}}},kt=Ct,_t=Object(l["a"])(kt,xt,yt,!1,null,null,null);_t.options.__file="Notification.vue";var zt=_t.exports,Lt={components:{NavBar:bt,Notification:zt}},Mt=Lt,Ot=(n("cf25"),n("d122"),Object(l["a"])(Mt,st,rt,!1,null,null,null));Ot.options.__file="App.vue";var St=Ot.exports,Tt=(n("20d6"),n("bc3a")),Rt=n.n(Tt);Rt.a.defaults.baseURL="https://qr-api.oliverdvorski.com/api";var $t=Rt.a;n("3b2b");function Et(t){_.$emit("flash",t)}function jt(t){var e=new RegExp(t+"=([^;]+)"),n=e.exec(document.cookie);return null!=n?unescape(n[1]):null}var It={namespaced:!0,state:{codeList:[],dynamicLink:""},getters:{dyanmicCodeList:function(t){return t.codeList}},mutations:{loadCodes:function(t,e){t.codeList=e},setDynamicLink:function(t,e){t.dynamicLink=e},new:function(t,e){t.codeList.unshift(e),Et("QR code registered")},update:function(t,e){var n=t.codeList.findIndex(function(t){return t.id===e.id});a["a"].set(t.codeList,n,e),Et("QR code updated")},delete:function(t,e){var n=t.codeList.findIndex(function(t){return t.id===e.id});t.codeList.splice(n,1),Et("QR code deleted")}},actions:{fetchCodeList:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.rootGetters["auth/user"]){t.next=2;break}return t.abrupt("return");case 2:return e.commit("loading",!0,{root:!0}),n="/codes",t.next=6,$t.get(n,{params:{api_token:e.rootGetters["auth/apiToken"]}});case 6:a=t.sent,e.commit("loadCodes",a.data.reverse()),e.commit("loading",!1,{root:!0});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),new:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,n){var a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("loading",!0,{root:!0}),a="/codes",t.next=4,$t.post(a,Object(f["a"])({},n,{api_token:e.rootGetters["auth/apiToken"]}));case 4:i=t.sent,e.commit("new",i.data),e.commit("loading",!1,{root:!0});case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),update:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,n){var a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("loading",!0,{root:!0}),a="/codes/".concat(n.id),t.next=4,$t.patch(a,Object(f["a"])({},n,{api_token:e.rootGetters["auth/apiToken"]}));case 4:i=t.sent,e.commit("update",i.data),e.commit("loading",!1,{root:!0});case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),delete:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,n){var a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("loading",!0,{root:!0}),a="/codes/".concat(n.id),t.next=4,$t.delete(a,{params:{api_token:e.rootGetters["auth/apiToken"]}});case 4:i=t.sent,e.commit("delete",i.data),e.commit("loading",!1,{root:!0});case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}},Ht=(n("6762"),n("2fdb"),{namespaced:!0,state:{apiToken:"",user:!1},getters:{apiToken:function(t){return t.apiToken},user:function(t){return t.user}},mutations:{SET_USER:function(t,e){t.user=e},SET_API_TOKEN:function(t,e){t.apiToken=e;var n=new Date;n.setTime(n.getTime()+864e5);var a="expires="+n.toUTCString();document.cookie="apiToken=".concat(e,"; expires=").concat(a)}},actions:{fetchUser:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return document.cookie.includes("apiToken")&&e.commit("SET_API_TOKEN",jt("apiToken")),t.prev=1,t.next=4,$t.get("/user?api_token="+e.getters["apiToken"]);case 4:return n=t.sent,this.commit("auth/SET_USER",n.data),t.abrupt("return",n.data);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}});a["a"].use(z["a"]);var Nt=new z["a"].Store({state:{loading:!1},getters:{loading:function(t){return t.loading}},mutations:{loading:function(t,e){t.loading=e}},modules:{web:It,auth:Ht}}),Pt=Nt,Dt=n("9483");Object(Dt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center",domProps:{innerHTML:t._s(t.icon)}})},At=[],Ut=(n("c5f6"),{props:{name:{type:String,required:!0},size:{type:[Number,String],default:16}},computed:{icon:function(){return this.icons[this.name][this.size]}}}),Bt=Ut,Qt=Object(l["a"])(Bt,Ft,At,!1,null,null,null);Qt.options.__file="Icon.vue";var qt=Qt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fancy-input-container",class:t.disabled?"disabled":null},[t.label?n("label",{staticClass:"label mb-2 mt-4",attrs:{for:t.name}},[t._v(t._s(t.label))]):t._e(),"textarea"!=t.type?n("input",{staticClass:"fancy-input",attrs:{type:t.type,name:t.name,disabled:t.disabled,min:t.min,max:t.max,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}):t._e(),"textarea"==t.type?n("textarea",{staticClass:"fancy-input",attrs:{name:t.name,disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}):t._e()])},Wt=[],Gt={props:{value:{type:[String,Number,Date],default:""},min:{type:Number,default:0},max:{type:Number,default:100},placeholder:{type:String,default:""},name:{type:[String,Boolean],default:!1},label:{type:[String,Boolean],default:!1},type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},trim:{type:Boolean,default:!1}}},Kt=Gt,Yt=Object(l["a"])(Kt,Vt,Wt,!1,null,null,null);Yt.options.__file="FancyInput.vue";var Jt=Yt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fancy-checkbox flex items-center cursor-pointer",on:{click:t.toggle}},[n("svg",{staticClass:"mr-2 text-grey-darkest",class:t.checked?"checked":"unchecked",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}}),n("path",{attrs:{id:"tick",d:"M4.3 7.3L7 10l4.7-4.7",fill:"none",stroke:"#fff","stroke-width":"1.98"}})]),n("label",{staticClass:"label mb-0 select-none cursor-pointer"},[t._t("default")],2)])},Zt=[],te={model:{event:"change",prop:"value"},data:function(){return{checked:!1}},methods:{toggle:function(){this.checked=!this.checked,this.$emit("change",this.checked)}}},ee=te,ne=Object(l["a"])(ee,Xt,Zt,!1,null,null,null);ne.options.__file="FancyCheckbox.vue";var ae=ne.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"segments select-none"},t._l(t.segments,function(e,a){return n("div",{key:a,staticClass:"segment",class:t.active==e?"active":null,on:{click:function(n){t.select(e)}}},[t._v(t._s(e))])}))},oe=[],se={model:{prop:"value",event:"change"},props:{segments:{required:!0,type:Array}},data:function(){return{active:""}},mounted:function(){this.active=this.segments[0]},methods:{select:function(t){this.active=t,this.$emit("change",this.active)}}},re=se,ce=Object(l["a"])(re,ie,oe,!1,null,null,null);ce.options.__file="Segments.vue";var le=ce.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("canvas",{attrs:{id:"main-code"}}),t.shouldExport?n("button",{staticClass:"raised big mt-4",on:{click:function(e){t.showModal=!0}}},[t._v("Export")]):t._e(),t.shouldExport?n("Modal",{attrs:{show:t.showModal,size:"sm"},on:{close:function(e){t.showModal=!1}}},[n("div",{attrs:{slot:"body"},slot:"body"},[n("canvas",{attrs:{id:"export-preview"}}),n("div",{staticClass:"flex"},[n("FancyInput",{staticClass:"mr-4",attrs:{label:"Foreground",type:"color"},model:{value:t.fg,callback:function(e){t.fg=e},expression:"fg"}}),n("FancyInput",{attrs:{label:"Background",type:"color"},model:{value:t.bg,callback:function(e){t.bg=e},expression:"bg"}})],1),n("div",{staticClass:"flex"},[n("FancyInput",{staticClass:"w-full mr-4",attrs:{label:"Padding",type:"number"},model:{value:t.padding,callback:function(e){t.padding=e},expression:"padding"}}),n("FancyInput",{staticClass:"w-full",attrs:{label:"Size",type:"number",max:1e4},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1)]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"flat mr-2",on:{click:function(e){t.showModal=!1}}},[t._v("Cancel")]),n("a",{staticClass:"button flat",attrs:{href:t.dataURL,download:"QR Dynamics Code.png"}},[t._v("Export")])])]):t._e()],1)},ue=[],pe=n("c4a7"),he=n.n(pe),me={props:{string:{type:String,default:""},shouldExport:{type:Boolean,default:!0}},data:function(){return{mainCode:{},exportPreview:{},fg:"#000000",bg:"#f8fafc",padding:10,showModal:!1,size:350,dataURL:""}},watch:{string:function(){this.mainCode.value=this.string,this.exportPreview.value=this.string,this.dataURL=this.exportPreview.toDataURL()},fg:function(){this.mainCode.foreground=this.fg,this.exportPreview.foreground=this.fg,this.dataURL=this.exportPreview.toDataURL()},bg:function(){this.mainCode.background=this.bg,this.exportPreview.background=this.bg,this.dataURL=this.exportPreview.toDataURL()},padding:function(){this.mainCode.padding=this.padding,this.exportPreview.padding=this.padding,this.dataURL=this.exportPreview.toDataURL()},size:function(){this.mainCode.size=this.size,this.exportPreview.size=this.size,this.dataURL=this.exportPreview.toDataURL()}},mounted:function(){this.mainCode=new he.a({element:this.$el.querySelector("canvas#main-code"),value:this.string,size:this.size,foreground:this.fg,background:this.bg}),this.exportPreview=new he.a({element:this.$el.querySelector("canvas#export-preview"),value:this.string,size:this.size,foreground:this.fg,background:this.bg}),this.dataURL=this.exportPreview.toDataURL()}},fe=me,ve=(n("4d66"),Object(l["a"])(fe,de,ue,!1,null,"1f7112fc",null));ve.options.__file="QR.vue";var ge=ve.exports,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal"},[n("div",{staticClass:"modal-mask",on:{click:function(e){t.$emit("close")}}},[n("div",{staticClass:"modal-container",class:t.size,on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"header"},[t._t("heading")],2),n("div",{staticClass:"body"},[t._t("body")],2),n("div",{staticClass:"footer"},[t._t("footer",[n("button",{staticClass:"flat",on:{click:function(e){t.$emit("close")}}},[t._v("Close")])])],2)])])])])},be=[],xe={props:{show:{type:Boolean,default:!1},size:{type:String,default:""}},mounted:function(){var t=this;document.addEventListener("keyup",function(e){t.show&&"Escape"===e.key&&t.$emit("close")})}},ye=xe,Ce=Object(l["a"])(ye,we,be,!1,null,null,null);Ce.options.__file="Modal.vue";var ke=Ce.exports,_e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader",class:t.shouldLoad?"loading":"",on:{click:t.cancel}},[n("div",{staticClass:"bg"}),n("div",{staticClass:"spinner"})])},ze=[],Le={props:{condition:{type:Boolean,required:!0}},computed:{shouldLoad:function(){return this.condition}},methods:{cancel:function(){this.$store.commit("loading",!1)}}},Me=Le,Oe=Object(l["a"])(Me,_e,ze,!1,null,null,null);Oe.options.__file="Loader.vue";var Se=Oe.exports;a["a"].component("Icon",qt),a["a"].component("FancyInput",Jt),a["a"].component("FancyCheckbox",ae),a["a"].component("Segments",le),a["a"].component("QR",ge),a["a"].component("Modal",ke),a["a"].component("Loader",Se);var Te={web:{16:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M16 7h-1.3c-.6-.7-2.1-3.1-2.5-4.1l.8-1.2-1.7-1-.8 1.3c-.9.2-4.1.2-5 0L4.7.6 3 1.7 3.8 3c-.4.9-1.8 3.3-2.5 4H0v2h1.3c.6.7 2.1 3.1 2.5 4.1L3 14.3l1.7 1 .8-1.3c.9-.2 4.1-.2 5 0l.8 1.3 1.7-1-.8-1.3c.3-.9 1.8-3.4 2.5-4.1H16V7zm-3.8 0H9.8L11 5c.1.1.9 1.6 1.2 2zm-3-3L8 6.1 6.8 4c.7.1 1.8.1 2.4 0zm-3 3H3.8c.3-.4.8-1.3 1.2-2l1.2 2zM3.8 9h2.4L5 11c-.2-.5-.8-1.5-1.2-2zm3 3L8 10l1.2 2c-.6-.1-1.7-.2-2.4 0zm3-3h2.4c-.3.4-.9 1.3-1.2 2L9.8 9z"/></svg>',24:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g><path d="M23 11h-.727c-.985-.811-3.911-5.665-4.251-7.035l.523-.859a1 1 0 1 0-1.709-1.039l-.503.827c-1.19.457-7.475.457-8.665 0l-.504-.828a1 1 0 0 0-1.709 1.039l.523.859c-.34 1.37-3.266 6.225-4.251 7.036H1a1 1 0 1 0 0 2h.727c.985.811 3.911 5.666 4.251 7.035l-.523.859a1 1 0 1 0 1.709 1.039l.503-.827c1.191-.457 7.474-.457 8.665 0l.503.827a1 1 0 1 0 1.709-1.039l-.523-.859c.34-1.37 3.266-6.225 4.251-7.035H23a1 1 0 1 0 0-2zm-3.329 0h-2.336c-.493-.506-1.551-2.117-1.868-2.835l1.271-2.089c.658 1.366 1.933 3.561 2.933 4.924zm-5.931 3.812c-.926-.109-2.554-.109-3.48 0-.376-.761-1.16-2.051-1.806-2.812.646-.761 1.43-2.051 1.806-2.812.926.109 2.554.109 3.48 0 .376.76 1.16 2.051 1.806 2.812-.646.761-1.43 2.051-1.806 2.812zm1.236-9.687L13.731 7.17c-.728.128-2.731.128-3.461 0L9.025 5.125c1.653.143 4.296.143 5.951 0zM8.533 8.164c-.315.717-1.375 2.33-1.868 2.836H4.329c.999-1.362 2.275-3.557 2.934-4.924l1.27 2.088zM4.329 13h2.336c.493.506 1.553 2.119 1.868 2.836l-1.271 2.088C6.604 16.558 5.328 14.362 4.329 13zm4.696 5.875l1.245-2.046c.73-.128 2.729-.128 3.459 0l1.245 2.046c-1.652-.143-4.294-.143-5.949 0zm6.442-3.039c.316-.717 1.375-2.33 1.868-2.836h2.336c-.999 1.362-2.275 3.557-2.934 4.924l-1.27-2.088z"/><circle data-color="color-2" cx="12" cy="12" r="1"/></g></svg>'},text:{16:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g><path d="M11 1h5v2h-5zM11 5h5v2h-5zM11 9h5v2h-5zM0 13h16v2H0z"/><path data-color="color-2" d="M6.866 10H9L5.637 2H3.363L0 10h2.134l.841-2h3.05l.84 2zm-3.05-4L4.5 4.372 5.184 6H3.816z"/></g></svg>',24:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g><path d="M23 5h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM23 11h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM23 17H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2zM23 23H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2z"/><path data-color="color-2" d="M7.62 12v-1.077l1.133-.125-.498-1.436H4.83l-.484 1.436 1.092.125V12H1.584v-1.077l.608-.152c.166-.042.29-.097.345-.263L5.562 2h2.445l3.01 8.536c.056.166.167.193.332.235l.635.152V12H7.62zM6.612 4.113h-.083L5.259 7.87H7.84L6.61 4.113z"/></g></svg>'},location:{16:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/><path data-color="color-2" d="M10.2 4.8l-3 1.4c-.4.3-.7.6-.9 1l-1.4 3c-.3.6.3 1.2.9.9l3-1.4c.4-.2.8-.5.9-.9l1.4-3c.3-.6-.3-1.2-.9-1z"/></g></svg>',24:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g><path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/><path data-color="color-2" d="M9.238 9.238l-4.142 9.666 9.666-4.142 4.142-9.666-9.666 4.142zm-.334 5.858l1.858-4.334 2.477 2.477-4.335 1.857z"/></g></svg>'},email:{16:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15.439 9.683a3.329 3.329 0 0 1-3.073 2.444 2.075 2.075 0 0 1-2.1-1.522 3.51 3.51 0 0 1-2.876 1.522 3.18 3.18 0 0 1-2.5-1.024 4.015 4.015 0 0 1-.912-2.771 4.5 4.5 0 0 1 1.21-3.263c1.3-1.346 3.04-1.391 4.893-1.122a9.347 9.347 0 0 1 1.605.366c-.019.394-.215 4.4-.215 4.771q0 1.562 1.015 1.561.77 0 1.224-1a6.9 6.9 0 0 0-.229-5.469 5.226 5.226 0 0 0-4.832-2.625 6.285 6.285 0 0 0-5.961 3.312 8.073 8.073 0 0 0-.81 3.7c0 3.648 1.952 5.873 5.854 5.873a12.789 12.789 0 0 0 4.5-.878v1.6A11.649 11.649 0 0 1 7.771 16C3.1 16 .122 13.42.122 8.625a9.247 9.247 0 0 1 1.093-4.533A8.086 8.086 0 0 1 8.629 0a6.945 6.945 0 0 1 6.337 3.38 7.93 7.93 0 0 1 .473 6.303zm-9.59-1.312q0 2.274 1.785 2.274 1.883 0 2.059-2.859l.117-2.332a3.1 3.1 0 0 0-3.263.664 3.39 3.39 0 0 0-.698 2.253z"/></svg>',24:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M24 10.7a10.687 10.687 0 0 1-.676 3.868c-.84 2.176-2.461 3.75-4.777 3.75a3.314 3.314 0 0 1-3.131-1.894 6.1 6.1 0 0 1-4.276 1.894 5.412 5.412 0 0 1-4.1-1.563c-2.009-2.1-2.177-6.724.47-9.269 2.152-2.069 4.968-2.124 7.929-1.652a15.284 15.284 0 0 1 2.506.58l-.338 7.178q0 2.04 1.117 2.04.94 0 1.5-1.373a9.663 9.663 0 0 0 .559-3.588A8.616 8.616 0 0 0 19.8 6.5a7.4 7.4 0 0 0-6.849-3.721 10.437 10.437 0 0 0-5.162 1.214c-3.158 1.758-4.526 5.146-4.526 8.822a8.4 8.4 0 0 0 2.168 6.215c3.156 3.155 9.2 2.348 13.381.815v2.819A17.693 17.693 0 0 1 11.831 24q-5.585 0-8.708-2.936T0 12.9A12.493 12.493 0 0 1 6.136 1.681 13.453 13.453 0 0 1 12.919 0c4 0 7.726 1.6 9.7 5.079A11.208 11.208 0 0 1 24 10.7zM8.951 12.536q0 3.1 2.528 3.1c2.146 0 2.7-1.818 2.851-3.964l.191-3.243a8.009 8.009 0 0 0-1.69-.163c-2.569-.002-3.88 1.752-3.88 4.27z"/></svg>'},wifi:{16:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g><circle cx="8" cy="12.5" r="1.5"/><path data-color="color-2" d="M11.5 10C10.6 9 9.3 8.5 8 8.5S5.4 9 4.5 10L3.1 8.6c1.3-1.4 3-2.1 4.9-2.1s3.6.7 4.9 2.1L11.5 10z"/><path d="M8 2C5 2 2.2 3.1 0 5.2l1.4 1.4C3.2 4.9 5.5 4 8 4s4.8.9 6.6 2.7L16 5.2C13.8 3.1 11 2 8 2z"/></g></svg>',24:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g><circle data-color="color-2" cx="12" cy="18" r="3"/><path d="M12 9a8.94 8.94 0 0 0-6.364 2.636l-.707.707 1.414 1.414.707-.707C8.373 11.728 10.13 11 12 11s3.627.728 4.95 2.05l.707.707 1.414-1.414-.707-.707A8.94 8.94 0 0 0 12 9z"/><path d="M22.606 7.394C19.774 4.561 16.007 3 12 3S4.226 4.561 1.394 7.394l-.707.707 1.414 1.414.707-.707C5.263 6.352 8.527 5 12 5s6.737 1.352 9.192 3.808l.707.707 1.414-1.414-.707-.707z"/></g></svg>'},google:{16:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16"><g transform="translate(0, 0)"><path d="M8,7v2.4h4.1c-0.2,1-1.2,3-4,3c-2.4,0-4.3-2-4.3-4.4s2-4.4,4.3-4.4 c1.4,0,2.3,0.6,2.8,1.1l1.9-1.8C11.6,1.7,10,1,8.1,1c-3.9,0-7,3.1-7,7s3.1,7,7,7c4,0,6.7-2.8,6.7-6.8c0-0.5,0-0.8-0.1-1.2H8L8,7z"></path></g></svg>'},facebook:{16:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16"><g transform="translate(0, 0)"><path d="M6.02293,16L6,9H3V6h3V4c0-2.6992,1.67151-4,4.07938-4c1.15339,0,2.14468,0.08587,2.43356,0.12425v2.82082 l-1.66998,0.00076c-1.30953,0-1.56309,0.62227-1.56309,1.53541V6H13l-1,3H9.27986v7H6.02293z"></path></g></svg>'},github:{16:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16"><g transform="translate(0, 0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path></g></svg>'},cog:{16:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16"><g transform="translate(0, 0)"><path d="M13.3,5.2l1.1-2.1l-1.4-1.4l-2.1,1.1c-0.3-0.2-0.7-0.3-1.1-0.4L9,0H7L6.2,2.3C5.9,2.4,5.5,2.5,5.2,2.7 L3.1,1.6L1.6,3.1l1.1,2.1C2.5,5.5,2.4,5.9,2.3,6.2L0,7v2l2.3,0.8c0.1,0.4,0.3,0.7,0.4,1.1l-1.1,2.1l1.4,1.4l2.1-1.1 c0.3,0.2,0.7,0.3,1.1,0.4L7,16h2l0.8-2.3c0.4-0.1,0.7-0.3,1.1-0.4l2.1,1.1l1.4-1.4l-1.1-2.1c0.2-0.3,0.3-0.7,0.4-1.1L16,9V7 l-2.3-0.8C13.6,5.9,13.5,5.5,13.3,5.2z M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S9.7,11,8,11z"></path></g></svg>'},trash:{16:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16"><g transform="translate(0, 0)"><path d="M2,6v8c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H2z"></path> <path data-color="color-2" d="M12,3V1c0-0.6-0.4-1-1-1H5C4.4,0,4,0.4,4,1v2H0v2h16V3H12z M10,3H6V2h4V3z"></path></g></svg>'},close:{16:'<svg viewBox="0 0 16 16" width="16" height="16"><title>simple remove</title><g><path d="M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z"></path></g></svg>'}};a["a"].mixin({data:function(){return{get debug(){return"true"},get icons(){return Te},get apiUrl(){return"https://qr-api.oliverdvorski.com/api"},get backendUrl(){return"http://qr-api.oliverdvorski.com"},get shortCodeLocation(){return"http://qr-api.oliverdvorski.com"},apiToken:""}}}),a["a"].config.productionTip=!1,a["a"].use(i["a"]);var Re=new i["a"]({mode:"history",base:"/",routes:ot});new a["a"]({router:Re,store:Pt,render:function(t){return t(St)}}).$mount("#app")},7386:function(t,e,n){},9045:function(t,e,n){},ba5e:function(t,e,n){},cf25:function(t,e,n){"use strict";var a=n("7386"),i=n.n(a);i.a},d122:function(t,e,n){"use strict";var a=n("ba5e"),i=n.n(a);i.a},d259:function(t,e,n){},df8a:function(t,e,n){"use strict";var a=n("d259"),i=n.n(a);i.a},f824:function(t,e,n){"use strict";var a=n("9045"),i=n.n(a);i.a}});
//# sourceMappingURL=app.27827468.js.map
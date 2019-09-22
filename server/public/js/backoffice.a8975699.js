(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],f=0,l=[];f<s.length;f++)a=s[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={backoffice:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;i.push([2,"chunk-vendors","chunk-common"]),n()})({2:function(e,t,n){e.exports=n("ba5e")},ba5e:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout")],1)},i=[],a=n("27bd"),s={name:"Backoffice",components:{Layout:a["a"]}},u=s,c=n("2877"),p=Object(c["a"])(u,o,i,!1,null,null,null),f=p.exports,l=n("2f62"),g=(n("96cf"),n("3b8d")),d={token:"",loggedIn:!!sessionStorage.getItem("token"),detail:!1,popup:{bool:!1,message:""}},m={getState:function(e){return e},getToken:function(e){return e.token},getPopup:function(e){return e.popup}},h={togglePopup:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r("setPopup",n);case 2:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("showLogin");case 2:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},v={setLoggedIn:function(e,t){sessionStorage.setItem("token",t.token),e.token=t.token,e.loggedIn=!0},showDetail:function(e){return e.detail=!0},showList:function(e){return e.detail=!1},showLogin:function(e){return e.loggedIn=!1},setPopup:function(e,t){e.popup.bool=t.bool,e.popup.message=t.message}},w={state:d,getters:m,actions:h,mutations:v},b=n("bc3a"),y=n.n(b),k={token:{}},j={},O={fetchToken:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o={user:n.user,password:n.password},e.prev=2,e.next=5,y.a.post("/api/auth",{headers:{"Content-type":"application/json"},body:JSON.stringify(o)});case 5:i=e.sent,r("setPopup",{bool:!1,message:""}),r("setToken",i.data),r("setLoggedIn",i.data),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),console.warn(e.t0),r("setPopup",{bool:!0,message:"Login nicht erfolgreich!"});case 15:case"end":return e.stop()}},e,null,[[2,11]])}));function t(t,n){return e.apply(this,arguments)}return t}()},x={setToken:function(e,t){return e.token=t}},R={state:k,getters:j,actions:O,mutations:x},L={list:{}},P={getList:function(e){if(Array.isArray(e.list)){var t=e.list.filter(function(e){return null===e.business_card}),n=t.slice(0,10);return n}},getBusinessCards:function(e){if(Array.isArray(e.list)){var t=e.list.filter(function(e){return null!==e.business_card}),n=t.slice(0,2);return n}}},S={fetchList:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=sessionStorage.getItem("token"),o="Bearer "+r,e.prev=3,e.next=6,y.a.get("/api/overview",{headers:{"Content-type":"application/x-www-form-urlencoded",Authorization:o}});case 6:i=e.sent,a=i.data,n("setList",a),n("showList"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),console.log("Error: ",e.t0);case 15:case"end":return e.stop()}},e,null,[[3,12]])}));function t(t){return e.apply(this,arguments)}return t}(),setDetail:function(e,t){var n=e.commit;n("showDetail"),n("setVisitor",t)}},_={setList:function(e,t){return e.list=t}},I={state:L,getters:P,actions:S,mutations:_},T=(n("ac6a"),n("456d"),{visitor:null}),V={getVisitor:function(e){return e.visitor}},A={updateVisitor:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,o=sessionStorage.getItem("token"),i="Bearer "+o;try{fetch("/api/update/"+n.user_hash_id,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:i},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){r("showList")}).catch(function(e){return console.error(e)})}catch(a){console.log("Error: ",a)}case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),updateVisitorLocally:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r("setFormData",n);case 2:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),rateVisitor:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r("setRating",n);case 2:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},D={setVisitor:function(e,t){e.visitor=t},setFormData:function(e,t){e.visitor[Object.keys(t)[0]]=t[Object.keys(t)[0]]},setRating:function(e,t){e.visitor.rating=t}},B={state:T,getters:V,actions:A,mutations:D};r["a"].use(l["a"]);var C=new l["a"].Store({modules:{backoffice:w,login:R,listView:I,details:B}});r["a"].config.productionTip=!1,new r["a"]({store:C,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=backoffice.a8975699.js.map
(function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,p=[];l<i.length;l++)u=i[l],o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={index:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var f=c;a.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("7f8f")},"7f8f":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Layout")],1)},a=[],u=n("27bd"),i={name:"Visitor",components:{Layout:u["a"]}},c=i,s=n("2877"),f=Object(s["a"])(c,o,a,!1,null,null,null),l=f.exports,p=n("2f62"),g=(n("96cf"),n("3b8d")),d=(n("28a5"),n("bc3a")),m=n.n(d),h={user_hash_id:localStorage.user_hash_id||"",json:localStorage.json||"",showPicture:!1,cookieInfo:!localStorage.hasOwnProperty("cookieInfo"),timeout:localStorage.timeout||6e5,languages:localStorage.languages||["de","en"]},v={getID:function(t){return t.user_hash_id},getJSON:function(t){return t.json},showPicture:function(t){return t.showPicture},getCookieInfo:function(t){return t.cookieInfo},getTimeout:function(t){return t.timeout},getLanguages:function(t){return"string"===typeof t.languages?t.languages.split(","):t.languages}},w={fetchID:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,m.a.get("/api/assignUUID",{});case 4:r=t.sent,n("setID",r.data.user_hash_id),n("setJSON",r.data.json),n("setTimeout",r.data.timeout),n("setLanguages",r.data.languages),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.warn(t.t0);case 14:case"end":return t.stop()}},t,null,[[1,11]])}));function e(e){return t.apply(this,arguments)}return e}(),fetchLanguage:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,m.a.post("/api/language",{language:n});case 3:o=t.sent,localStorage.json=JSON.stringify(o.data.json),r("setJSON",o.data.json);case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),deserializeJSON:function(t,e){var n=t.commit;"undefined"!==e&&n("setJSON",JSON.parse(e))},showPicture:function(t,e){var n=t.commit;n("toggleShowPicture",e)},hideCookieBar:function(t){var e=t.commit;localStorage.cookieInfo=!1,e("toggleCookieInfo")}},S={setID:function(t,e){return t.user_hash_id=e},setJSON:function(t,e){return t.json=e},toggleShowPicture:function(t,e){return t.showPicture=e},toggleCookieInfo:function(t){return t.cookieInfo=!1},setTimeout:function(t,e){t.timeout=e,localStorage.timeout=e},setLanguages:function(t,e){t.languages=e,localStorage.languages=e}},b={state:h,getters:v,actions:w,mutations:S},I={pictureInfo:localStorage.pictureInfo||{questions:{},flower:"/img/flowers/spiro.png",done:!1},quiz:!0},O={quiz:function(t){return t.quiz},getQuestions:function(t){return t.pictureInfo.questions},getFlower:function(t){return t.pictureInfo.flower},getPictureInfo:function(t){return t.pictureInfo}},P={toggleQuiz:function(t,e){var n=t.commit;return n("mutateQuiz",e)},setQuestions:function(t,e){var n=t.commit;n("mutateQuestions",e)},fetchFlower:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,m.a.post("/api/flower",{body:n});case 3:o=t.sent,r("mutateFlower",o.data.src);case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),toggleDone:function(t){var e=t.commit;e("mutatePictureInfo",!0)}},_={mutateQuiz:function(t,e){return t.quiz=e},mutateQuestions:function(t,e){return t.pictureInfo.questions=e},mutateFlower:function(t,e){return t.pictureInfo.flower=e},mutatePictureInfo:function(t){return t.pictureInfo.done=!0}},y={state:I,getters:O,actions:P,mutations:_},j={availableProducts:[],productInfo:localStorage.productInfo||{productDone:!1,reservation:{}}},k={getAvailableProducts:function(t){return t.availableProducts},getProductInfo:function(t){return"string"===typeof t.productInfo?JSON.parse(t.productInfo):t.productInfo}},x={fetchProducts:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.get("/api/availableProducts",{});case 3:r=t.sent,n("setAvailableProducts",r.data);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),reserveProduct:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit;try{fetch("/api/makeReservation",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({reservation:n})}).then(function(t){return t.json()}).then(function(t){r("setReservation",n)}).catch(function(t){return console.error(t)}),r("setReservation",n)}catch(o){console.error(o)}case 2:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),toggleProductDone:function(t,e){var n=t.commit;n("setProductDone",e)},resetProductInfo:function(t){var e=t.commit;e("setProductInfo")}},D={setAvailableProducts:function(t,e){return t.availableProducts=e},setReservation:function(t,e){return t.productInfo.reservation=e},setProductDone:function(t,e){return t.productInfo.productDone=e},setProductInfo:function(t){return t.productInfo={productDone:!1,reservation:{}}}},R={state:j,getters:k,actions:x,mutations:D},J=(n("ac6a"),n("456d"),{visitorData:{user_hash_id:localStorage.user_hash_id,first_name:"",last_name:"",company:"",job_title:"",phone:"",mail:"",answer_one:localStorage.getPictureInfo?JSON.parse(localStorage.getPictureInfo).questions[0].answer:"",answer_two:localStorage.getPictureInfo?JSON.parse(localStorage.getPictureInfo).questions[1].answer:"",answer_three:localStorage.getPictureInfo?JSON.parse(localStorage.getPictureInfo).questions[2].answer:"",business_card:null,parameter_excenterLeft:"",parameter_excenterRight:"",parameter_speedLeft:"",parameter_speedRight:"",product_type:localStorage.productInfo?JSON.parse(localStorage.productInfo).reservation.reserved_product:""},showOption:void 0}),N={getVisitorData:function(t){return t.visitorData},getOption:function(t){return t.showOption}},q={updateVisitorData:function(t,e){var n=t.commit;return n("mutateVisitorData",e)},sendVisitorData:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,n){var r,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,o=JSON.parse(JSON.stringify(n.visitor)),a="",void 0!==n.img?(a=new FormData,a.append("image",n)):o.business_card="",t.next=7,m.a.post("/api/createNewVisitor",{data:a,visitor:o});case 7:localStorage.status=0,r("mutateStatus",0),t.next=15;break;case 11:return t.prev=11,t.t0=t["catch"](1),console.warn(t.t0),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}},t,null,[[1,11]])}));function e(e,n){return t.apply(this,arguments)}return e}(),updateSrc:function(t,e){var n=t.commit;n("mutateSrc",e)},setOption:function(t,e){var n=t.commit;return n("mutateOption",e)}},z={mutateVisitorData:function(t,e){return t.visitorData[[Object.keys(e)[0]]]=e[[Object.keys(e)[0]]]},mutateOption:function(t,e){return t.showOption=e},mutateSrc:function(t,e){return t.visitorData.business_card=e}},L={state:J,getters:N,actions:q,mutations:z},T={status:!1,production_States:{"waiting to be rated":0,pending:1,"in progress":5,finished:6,"picked up by customer":8,"order cancelled":9}},Q={getStatus:function(t){return t.status}},V={setStatus:function(t,e){var n=t.commit;return n("mutateStatus",e)},fetchStatus:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,m.a.post("/api/status",{visitor_hash_id:n});case 3:o=t.sent,r("mutateStatus",o.data);case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},C={mutateStatus:function(t,e){return t.status=t.production_States[e]}},F={state:T,getters:Q,actions:V,mutations:C};r["a"].use(p["a"]);var M=new p["a"].Store({modules:{visitor:b,choosePicture:y,chooseProduct:R,enterData:L,status:F}}),A=n("1881"),U=n.n(A);r["a"].config.productionTip=!1,r["a"].use(U.a,{dialog:!0}),new r["a"]({store:M,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=index.18422eed.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{221:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAnBJREFUaAXtmrtKA1EQhrMqKFooARUVBO2VPIBiOgvBzsJC7NRWFGz0DcQH8DF8Au2tvFTeQLBRUBtvoMZvIJDdsHP2LDl7iezAsGd35sz//3POJtkkpVJh/7QDtVptHb/CxX5xGa+3hVyILuGaLeVeBMyPNPYScymgw2UxX61R37h5aIo150aeJyXg1YBsihmmJRxia3Tgs/gB/ohrJjHJkdykGmivVkjgK/gNHteumSBzsxECcAW/xFu1CwpU7NvmIBPADfyzVea++R9S0wG16BIA7fmAXQ93oxm0kAHbTdeMQ+pttkBRnwrQDP4TAuj6kmDM6EwaEa8xNI8o2EfGGT5pznQWvaXStOd5b6aKcV6+diiUFnnhLFiCaTSrFah3/55KZWM198FnSo6bVsF2BVYzIC/tkIYJtmq2AhbVCskHjNiRW4jt0w1HWcre5LmGIrxztcw2+gqL2qyAvMVnRV44C7b6McNGwIhUydhUDjYChjMmL/AqBxsBAzkQ0K9xsBGgzU3zuvpi0y4C1GYVAtTWpBQoViClRqswxQqorUkpUKxASo1WYdp+Bbo0aTwHDBHbwue1nBSvL8NHns72eS548uOqnzGYcEzinD85B+MTBFT9PEwCvkns9CfnYPyDgMCuMd0DLzkg3ExBHm0DZhKwTWboc2igQnonwkU4BUzdQpLFfdDDYTAwI7uTJ7bPZ3bwCSEbVyAOJqs1Rv5anDnkHtLVh5hzkklHgIfH+bVGcp010IkqCC3gNl+/S86CE1DXRSAmfzGIsnz/5QD2Vfw0RIVcq7psWmJ7EKJSewKfqhM+53jHTVurnzs5/AEz2or9KpoNowAAAABJRU5ErkJggg=="},222:function(t,e,n){"use strict";n(14);var r=n(35),c=n.n(r).a.create({baseURL:"http://match.bsdctw.net/api/"});c.interceptors.request.use((function(t){return window.localStorage.getItem("token")&&(t.headers={Authorization:"Bearer "+window.localStorage.getItem("token")}),t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t)})),e.a=c},223:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAS1JREFUaAXtl8EJwkAURLOoBKxA8GgLVmEj3i1ALcAmPHgVPFhCQPCsLWgTGufr5ibCkv/5WZmFz0ZYZ2fe5JKi4CIBEiABEkggUNf1KOF4d48iSIk5YGQtvJz2NS5GgBI6e8ws6g00dF00JAzmiGnWDg89FzNtL4VxhmkL0eT/bMYEq4Iom1GAaCLBZkywKoiyGQWIJhJsxgSrgiibUYBoIvFPzQQJA0oXzCTSumO/xuectiqEsJRAa7he5eT8h9exBJKvyxNmGg/esFeYZ/ydy3ZGQ5u3WQmFkU/nZskntbyK+S4EYKgs6mNTWdQEk2yKTTkS4OvnCD/pajaVhMvxMJtyhJ90NZtKwuV4+EtTS0c7OlfHUFvsD8xcR7UDKggz7IANWiABEiCBD4EXyIv1iOsRCl0AAAAASUVORK5CYII="},224:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAAXNSR0IArs4c6QAAAbpJREFUaAXt2bFOwzAQgOEGOiGBYOUJ2NiQkGCACTEwMLHwOognYYFHYESwMfIiZUQKvyFXISuhjuvz2VIsndxadu4+t2mTdjab2rQD0w5E7UDbtufEM3EddYDEi6hjTtwTT8Ru8OGZ/EC49kXcBC9UmEh+h3AAaVfBaVhxRCy6lWYY8vuIV8a2giFuIgtOCTNMh3ikl+YQO6MQMpmFJhjyulciDcIKo4LIjekQf0/s+LeTFO/3JDkh1M6ZLAhBaWGyIrQwJojUGFNEKkwRiHUxRSFiMQOIbTmeaU9xQR/NRSNkB1dhqkCswlSF+AdzC8S/7CjjnJCih3rvbcbTZXPXTnUgBEfBZ8vyfx981Ijw7+wcxexOUzZ3VE/BPuKdMbWr5lHFhU7uQfycE4wHfc+E5lGdN4SQpFVgViGqwIQiisaMRRSJiUUUhVkXUQSmQ/g/nkVfdnC8/B/NqREmr4wWIitGG5EFkwuhismNUMFYIZJirBHJMEDuCGmmt6cU4X/PHAhU+g150NPvdWNv9BdN0yx65mQZIvcLiS6JT2KTGPWvrrvLOybmLCyiUcs+cVhEMVMR0w5UtgPfXcWxw0IAaYEAAAAASUVORK5CYII="},225:function(t,e,n){t.exports=n.p+"img/300c8a9.png"},226:function(t,e,n){"use strict";var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-item"},[e("img",{attrs:{src:n(225)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-title"},[e("div",{staticClass:"title"},[this._v("儲存")])])}],c={props:{title:{type:String,default:""},config:{type:Object,default:function(){return{bgNone:!1,fixedNone:!1,backPage:!1,backLink:"",closePage:!1,closeLink:"",notification:!1,editBtn:!1,saveBtn:!1}}},editFn:{type:Function,default:function(){}},saveFn:{type:Function,default:function(){}},backFn:{type:Function,default:function(link){link?this.$router.push(link):this.$router.go(-1)}},closeFn:{type:Function,default:function(link){link?this.$router.push(link):this.$router.go(-1)}}}},o=n(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header",class:{unbg:t.config.bgNone,unfixed:t.config.fixedNone},attrs:{id:"header"}},[r("div",{staticClass:"header-wrapper"},[r("div",{staticClass:"header-left"},[r("div",{staticClass:"page-btn"},[t.config.backPage?r("div",{staticClass:"page-btn__item",on:{click:function(e){return t.backFn(t.config.backLink)}}},[r("img",{attrs:{src:n(223)}})]):t.config.closePage?r("div",{staticClass:"page-btn__item",on:{click:function(e){return t.closeFn(t.config.closeLink)}}},[r("img",{attrs:{src:n(224)}})]):t._e()])]),r("div",{staticClass:"header-content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))])]),r("div",{staticClass:"header-right"},[r("div",{staticClass:"controll-btn"},[t.config.notification?r("div",{staticClass:"controll-btn__item"},[r("nuxt-link",{staticClass:"btn-item",attrs:{to:"/notification"}},[r("img",{attrs:{src:n(221)}})])],1):t.config.editBtn?r("div",{staticClass:"controll-btn__item",on:{click:t.editFn}},[t._m(0)]):t.config.saveBtn?r("div",{staticClass:"controll-btn__item",on:{click:t.saveFn}},[t._m(1)]):t._e()])])])])}),r,!1,null,null,null);e.a=component.exports},227:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e=(new Date).getFullYear(),n=new Date(t),r=n.getFullYear(),c=n.getMonth()+1,o=n.getDate(),l=n.getHours()<10?"0"+n.getHours():n.getHours(),d=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();return{slash:{MD:"".concat(c,"/").concat(o),YMD:"".concat(r,"/").concat(c,"/").concat(o)},dash:{MD:"".concat(c,"-").concat(o),YMD:"".concat(r,"-").concat(c,"-").concat(o)},time:{HM:"".concat(l,":").concat(d)},special:{mode_1:e===r?"".concat(c,"/").concat(o):"".concat(r,"/").concat(c,"/").concat(o)}}}},228:function(t,e,n){"use strict";n.d(e,"m",(function(){return c})),n.d(e,"q",(function(){return o})),n.d(e,"o",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"s",(function(){return v})),n.d(e,"r",(function(){return m})),n.d(e,"k",(function(){return f})),n.d(e,"p",(function(){return A})),n.d(e,"n",(function(){return C})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return B})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return E})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return I})),n.d(e,"j",(function(){return U})),n.d(e,"v",(function(){return N})),n.d(e,"t",(function(){return Q})),n.d(e,"u",(function(){return D})),n.d(e,"w",(function(){return F})),n.d(e,"x",(function(){return S})),n.d(e,"y",(function(){return Y})),n.d(e,"z",(function(){return M})),n.d(e,"A",(function(){return G}));var r=n(222),c=function(data){return r.a.post("orderlists",data)},o=function(t){return r.a.put("orderlists/".concat(t,"/rules/2"))},l=function(t,data){return r.a.put("orderlists/".concat(t,"/rules/3"),data)},d=function(t){return r.a.put("orderlists/".concat(t,"/rules/5"))},v=function(t,data){return r.a.put("orderlists/".concat(t,"/rules/6"),data)},m=function(t){return r.a.put("orderlists/".concat(t,"/rules/7"))},f=function(t){return r.a.put("orderlists/".concat(t,"/rules/8"))},A=function(t){return r.a.put("orderlists/".concat(t,"/rules/4"))},C=function(t,data){return r.a.put("orderlists/".concat(t,"/rules/9"),data)},h=function(){return r.a.get("demand/orderlists")},_=function(t){return r.a.get("demand/orderlists/".concat(t))},k=function(){return r.a.get("demand/quotations")},w=function(){return r.a.get("demand/pays")},B=function(){return r.a.get("demand/matchs")},y=function(){return r.a.get("demand/fails")},E=function(){return r.a.get("demand/complets")},x=function(){return r.a.get("demand/supplypays")},I=function(){return r.a.get("demand/closes")},U=function(){return r.a.get("demand/cancels")},N=function(){return r.a.get("supply/orderlists")},Q=function(){return r.a.get("supply/mylist")},D=function(t){return r.a.get("supply/orderlists/".concat(t))},F=function(){return r.a.get("supply/match")},S=function(){return r.a.get("supply/complets")},Y=function(){return r.a.get("supply/supplypays")},M=function(){return r.a.get("supply/closes")},G=function(){return r.a.get("supply/cancels")}},229:function(t,e,n){t.exports=n.p+"img/f2afa18.png"},230:function(t,e,n){"use strict";var r={props:{rightStart:{type:Boolean,default:!1}},data:function(){return{menu:[{id:"1",title:"全部案件",link:"/order/demand"},{id:"2",title:"待付基本費",link:"/order/demand/status_1"},{id:"3",title:"配對中",link:"/order/demand/status_2"},{id:"4",title:"進行中",link:"/order/demand/status_3"},{id:"5",title:"報價中",link:"/order/demand/status_5"},{id:"6",title:"待付款",link:"/order/demand/status_6"},{id:"7",title:"已完成",link:"/order/demand/status_7"},{id:"8",title:"失約待處理",link:"/order/demand/status_4"},{id:"9",title:"已取消",link:"/order/demand/status_8"}]}}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-list-menu",class:{rightstart:t.rightStart}},[n("ul",{staticClass:"list-menu"},t._l(t.menu,(function(e){return n("li",{key:e.id,staticClass:"list-menu__item"},[n("nuxt-link",{staticClass:"item",attrs:{to:e.link}},[n("div",{staticClass:"item__title"},[t._v(t._s(e.title))])])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},240:function(t,e,n){t.exports=n.p+"img/7409545.png"},259:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAktJREFUaAXt2bFKA0EQANDZi7YaC9EvEAX9CHs/QNTC3zBqp4JYWtlbWCg29gmCvWCh/oAIVpoyZseZyIYL5Ny73ZkLwh6E0427M2/uLsxGgHSkCqQKpAqkCvyjChhfrssnXxtg+5vTWePoqTXz4vt7zfcplyVA3ANjbl5aM3fjYmXjBkfG0LYQYLtnbXv1tLsy8l6Nv6ydfC0D2ntEu0uvw6LQXpBBPKOK9BFw8fu73x4sXLSa0jjH7KHtIOIC5wIGzopCeUHPB3O3GZidAYoW5CtVJ2qAoZgOw7m8tprXRSDvM+Qmrhx/blrAS7qHGwbM+3SWrWs/U0MM3R1cUMY8789euZzGnUuDeHKdqBAM51gJVBcqFBME0kbFYIJBWqhYTBRIGiWBiQZJoaQwIqBYlCRGDBSKksaIgqqiNDDioLIoLYwKyIfSxKiBilA8zs0td+5lezOeU+Wo3PpUWTzf+1GX9WEoGnXN81oYzk0VxAFGURyxXNfMc0MO734oZNH8nCljHgGhOxxD7A7GhgOyP6iC3AcA3WhNujSWUudXU3OTqHbLOUz+A4CvhfYmUQU0DuN2mvlnSmPnKw76C8NXiA9NlCioDOaXpIcSA1XBaKJEQCEYLVQ0KAajgYoCSWCkUcEgSYwkKgikgZFCVQZpYiRQlUB1YGJRpUF1YmJQpUCTwISivKBJYkJQ3v1Qz/Yv8lsA1zW7YHWcOebwn270fQTtp86L4npBNLFD3wW8NQC2JoFxiedQH2DwwY2nc6pAqkCqQKrAv67ADxmP3EEykOsTAAAAAElFTkSuQmCC"},269:function(t,e,n){"use strict";var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-description"},[e("p",[this._v("滿意這次的發案體驗嗎？")]),e("p",[this._v("請為我們的服務評分")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-image"},[e("img",{attrs:{src:n(240)}})])}],c=(n(131),n(228)),o={props:{orderId:{type:Number,default:0},orderNum:{type:String,default:""}},data:function(){return{evaluate:"",comment:"",result:!1}},methods:{evaluate_submit:function(t){var e=this,data={evaluate:this.evaluate,content:this.comment};Object(c.n)(t,data).then((function(t){e.evaluate="",e.comment="",e.result=!0})).catch((function(t){console.log(t.response)}))},evaluate_close:function(){this.evaluate="",this.comment="",this.$emit("close",!1)}}},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"popup-notification"},[r("div",{staticClass:"popup-evaluate-block"},[t.result?r("div",{staticClass:"popup-evaluate-result"},[r("div",{staticClass:"result-title"},[t._v("送出成功")]),t._m(1),r("div",{staticClass:"result-btn",on:{click:t.evaluate_close}},[t._v("確定")])]):r("div",{staticClass:"popup-evaluate"},[r("div",{staticClass:"popup-evaluate__title"},[t._v("案件編號："+t._s(t.orderNum))]),r("div",{staticClass:"popup-evaluate__content"},[t._m(0),r("div",{staticClass:"content-start-block"},[r("div",{staticClass:"start-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.evaluate,expression:"evaluate"}],attrs:{type:"radio",name:"evaluate-star",value:"1",id:"star-1"},domProps:{checked:t._q(t.evaluate,"1")},on:{change:function(e){t.evaluate="1"}}}),r("label",{class:{full:t.evaluate>=1},attrs:{for:"star-1"}})]),r("div",{staticClass:"start-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.evaluate,expression:"evaluate"}],attrs:{type:"radio",name:"evaluate-star",value:"2",id:"star-2"},domProps:{checked:t._q(t.evaluate,"2")},on:{change:function(e){t.evaluate="2"}}}),r("label",{class:{full:t.evaluate>=2},attrs:{for:"star-2"}})]),r("div",{staticClass:"start-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.evaluate,expression:"evaluate"}],attrs:{type:"radio",name:"evaluate-star",value:"3",id:"star-3"},domProps:{checked:t._q(t.evaluate,"3")},on:{change:function(e){t.evaluate="3"}}}),r("label",{class:{full:t.evaluate>=3},attrs:{for:"star-3"}})]),r("div",{staticClass:"start-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.evaluate,expression:"evaluate"}],attrs:{type:"radio",name:"evaluate-star",value:"4",id:"star-4"},domProps:{checked:t._q(t.evaluate,"4")},on:{change:function(e){t.evaluate="4"}}}),r("label",{class:{full:t.evaluate>=4},attrs:{for:"star-4"}})]),r("div",{staticClass:"start-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.evaluate,expression:"evaluate"}],attrs:{type:"radio",name:"evaluate-star",value:"5",id:"star-5"},domProps:{checked:t._q(t.evaluate,"5")},on:{change:function(e){t.evaluate="5"}}}),r("label",{class:{full:t.evaluate>=5},attrs:{for:"star-5"}})])]),r("div",{staticClass:"content-textarea"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{placeholder:"請寫下您對本次服務的評語..."},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),r("div",{staticClass:"popup-evaluate__btn",on:{click:function(e){return t.evaluate_submit(t.orderId)}}},[t._v("送出")]),r("div",{staticClass:"popup-evaluate__close-btn",on:{click:t.evaluate_close}},[r("img",{attrs:{src:n(259)}})])])])])}),r,!1,null,null,null);e.a=component.exports},344:function(t,e,n){"use strict";n.r(e);n(23);var r=n(2),c=n(226),o=n(81),l=n(230),d=n(269),v=n(228),m=n(227),f={middleware:"authenticated",components:{Header:c.a,MainMenu:o.a,ListMenu:l.a,EvaluatePopup:d.a},data:function(){return{title:"案件列表",config:{headerConfig:{notification:!0},pullRefresh:{pullText:"下拉刷新",triggerText:"放開更新",loadingText:"更新中...",doneText:"更新完成",failText:"更新失敗",loadedStayTime:400,stayDistance:50,triggerDistance:70}},status:{orderId:"",orderNum:""},view:{popup:!1}}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.i)();case 2:return(e=t.sent).data.forEach((function(t){t.created_at=Object(m.a)(t.created_at).special.mode_1})),t.abrupt("return",{listData:e.data});case 5:case"end":return t.stop()}}),t)})))()},methods:{refresh:function(t){var e=this;Object(v.i)().then((function(n){var data=n.data;data.forEach((function(t){t.created_at=Object(m.a)(t.created_at).special.mode_1})),e.listData=data,t("done")}))},evaluate_event:function(t,e){this.status.orderId=t,this.status.orderNum=e,this.view.popup=!0},popup_close:function(t){this.view.popup=t}}},A=n(9),component=Object(A.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container bg-dark"},[r("Header",{attrs:{title:t.title,config:t.config.headerConfig}}),r("div",{staticClass:"order-list-page"},[r("ListMenu"),r("PullTo",{attrs:{"top-load-method":t.refresh,"top-config":t.config.pullRefresh}},[r("div",{staticClass:"order-lit-block"},[t.listData.length>0?r("ul",{staticClass:"order-list"},t._l(t.listData,(function(e,n){return r("li",{key:e.id,staticClass:"order-list__item"},[r("nuxt-link",{staticClass:"item",attrs:{to:"/order/demand/"+e.id}},[r("div",{staticClass:"item__top"},[r("div",{staticClass:"item-num"},[t._v(t._s(e.order_num))]),r("div",{staticClass:"item-date"},[t._v(t._s(e.created_at))])]),r("div",{staticClass:"item__content"},[r("div",{staticClass:"item-content-wrap"},[r("div",{staticClass:"item-title"},[r("div",{staticClass:"title"},[t._v(t._s(e.service_class_name))]),r("div",{staticClass:"tag"},[t._v(t._s(e.service_name))])]),r("div",{staticClass:"item-city-zone"},[t._v(t._s(e.city_name)+" ， "+t._s(e.zone_name))]),r("div",{staticClass:"item-content"},[t._v(t._s(e.content))])])]),r("div",{staticClass:"item__footer"},[r("div",{staticClass:"item-price price-style"},[t._v("金額  $"+t._s(e.price))]),r("div",{staticClass:"item-button",on:{click:function(n){return n.preventDefault(),t.evaluate_event(e.id,e.order_num)}}},[t._v("評價")])])])],1)})),0):r("div",{staticClass:"no-new-case"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n(229)}})]),r("div",{staticClass:"title"},[t._v("現在還沒有完成的案件哦")])])])]),r("transition",{attrs:{name:"fade"}},[t.view.popup?r("div",{staticClass:"popup-block"},[r("EvaluatePopup",{attrs:{orderId:t.status.orderId,orderNum:t.status.orderNum},on:{close:t.popup_close}})],1):t._e()])],1),r("MainMenu")],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{215:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAnBJREFUaAXtmrtKA1EQhrMqKFooARUVBO2VPIBiOgvBzsJC7NRWFGz0DcQH8DF8Au2tvFTeQLBRUBtvoMZvIJDdsHP2LDl7iezAsGd35sz//3POJtkkpVJh/7QDtVptHb/CxX5xGa+3hVyILuGaLeVeBMyPNPYScymgw2UxX61R37h5aIo150aeJyXg1YBsihmmJRxia3Tgs/gB/ohrJjHJkdykGmivVkjgK/gNHteumSBzsxECcAW/xFu1CwpU7NvmIBPADfyzVea++R9S0wG16BIA7fmAXQ93oxm0kAHbTdeMQ+pttkBRnwrQDP4TAuj6kmDM6EwaEa8xNI8o2EfGGT5pznQWvaXStOd5b6aKcV6+diiUFnnhLFiCaTSrFah3/55KZWM198FnSo6bVsF2BVYzIC/tkIYJtmq2AhbVCskHjNiRW4jt0w1HWcre5LmGIrxztcw2+gqL2qyAvMVnRV44C7b6McNGwIhUydhUDjYChjMmL/AqBxsBAzkQ0K9xsBGgzU3zuvpi0y4C1GYVAtTWpBQoViClRqswxQqorUkpUKxASo1WYdp+Bbo0aTwHDBHbwue1nBSvL8NHns72eS548uOqnzGYcEzinD85B+MTBFT9PEwCvkns9CfnYPyDgMCuMd0DLzkg3ExBHm0DZhKwTWboc2igQnonwkU4BUzdQpLFfdDDYTAwI7uTJ7bPZ3bwCSEbVyAOJqs1Rv5anDnkHtLVh5hzkklHgIfH+bVGcp010IkqCC3gNl+/S86CE1DXRSAmfzGIsnz/5QD2Vfw0RIVcq7psWmJ7EKJSewKfqhM+53jHTVurnzs5/AEz2or9KpoNowAAAABJRU5ErkJggg=="},216:function(t,n,e){"use strict";e(14);var r=e(33),c=e.n(r).a.create({baseURL:"http://match.bsdctw.net/api/"});c.interceptors.request.use((function(t){return window.localStorage.getItem("token")&&(t.headers={Authorization:"Bearer "+window.localStorage.getItem("token")}),t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t)})),n.a=c},217:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAS1JREFUaAXtl8EJwkAURLOoBKxA8GgLVmEj3i1ALcAmPHgVPFhCQPCsLWgTGufr5ibCkv/5WZmFz0ZYZ2fe5JKi4CIBEiABEkggUNf1KOF4d48iSIk5YGQtvJz2NS5GgBI6e8ws6g00dF00JAzmiGnWDg89FzNtL4VxhmkL0eT/bMYEq4Iom1GAaCLBZkywKoiyGQWIJhJsxgSrgiibUYBoIvFPzQQJA0oXzCTSumO/xuectiqEsJRAa7he5eT8h9exBJKvyxNmGg/esFeYZ/ydy3ZGQ5u3WQmFkU/nZskntbyK+S4EYKgs6mNTWdQEk2yKTTkS4OvnCD/pajaVhMvxMJtyhJ90NZtKwuV4+EtTS0c7OlfHUFvsD8xcR7UDKggz7IANWiABEiCBD4EXyIv1iOsRCl0AAAAASUVORK5CYII="},218:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAAXNSR0IArs4c6QAAAbpJREFUaAXt2bFOwzAQgOEGOiGBYOUJ2NiQkGCACTEwMLHwOognYYFHYESwMfIiZUQKvyFXISuhjuvz2VIsndxadu4+t2mTdjab2rQD0w5E7UDbtufEM3EddYDEi6hjTtwTT8Ru8OGZ/EC49kXcBC9UmEh+h3AAaVfBaVhxRCy6lWYY8vuIV8a2giFuIgtOCTNMh3ikl+YQO6MQMpmFJhjyulciDcIKo4LIjekQf0/s+LeTFO/3JDkh1M6ZLAhBaWGyIrQwJojUGFNEKkwRiHUxRSFiMQOIbTmeaU9xQR/NRSNkB1dhqkCswlSF+AdzC8S/7CjjnJCih3rvbcbTZXPXTnUgBEfBZ8vyfx981Ijw7+wcxexOUzZ3VE/BPuKdMbWr5lHFhU7uQfycE4wHfc+E5lGdN4SQpFVgViGqwIQiisaMRRSJiUUUhVkXUQSmQ/g/nkVfdnC8/B/NqREmr4wWIitGG5EFkwuhismNUMFYIZJirBHJMEDuCGmmt6cU4X/PHAhU+g150NPvdWNv9BdN0yx65mQZIvcLiS6JT2KTGPWvrrvLOybmLCyiUcs+cVhEMVMR0w5UtgPfXcWxw0IAaYEAAAAASUVORK5CYII="},219:function(t,n,e){t.exports=e.p+"img/300c8a9.png"},220:function(t,n,e){"use strict";var r=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"btn-item"},[n("img",{attrs:{src:e(219)}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"btn-title"},[n("div",{staticClass:"title"},[this._v("儲存")])])}],c={props:{title:{type:String,default:""},config:{type:Object,default:function(){return{bgNone:!1,fixedNone:!1,backPage:!1,backLink:"",closePage:!1,closeLink:"",notification:!1,editBtn:!1,saveBtn:!1}}},editFn:{type:Function,default:function(){}},saveFn:{type:Function,default:function(){}},backFn:{type:Function,default:function(link){link?this.$router.push(link):this.$router.go(-1)}},closeFn:{type:Function,default:function(link){link?this.$router.push(link):this.$router.go(-1)}}}},o=e(9),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"header",class:{unbg:t.config.bgNone,unfixed:t.config.fixedNone},attrs:{id:"header"}},[r("div",{staticClass:"header-wrapper"},[r("div",{staticClass:"header-left"},[r("div",{staticClass:"page-btn"},[t.config.backPage?r("div",{staticClass:"page-btn__item",on:{click:function(n){return t.backFn(t.config.backLink)}}},[r("img",{attrs:{src:e(217)}})]):t.config.closePage?r("div",{staticClass:"page-btn__item",on:{click:function(n){return t.closeFn(t.config.closeLink)}}},[r("img",{attrs:{src:e(218)}})]):t._e()])]),r("div",{staticClass:"header-content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))])]),r("div",{staticClass:"header-right"},[r("div",{staticClass:"controll-btn"},[t.config.notification?r("div",{staticClass:"controll-btn__item"},[r("nuxt-link",{staticClass:"btn-item",attrs:{to:"/notification"}},[r("img",{attrs:{src:e(215)}})])],1):t.config.editBtn?r("div",{staticClass:"controll-btn__item",on:{click:t.editFn}},[t._m(0)]):t.config.saveBtn?r("div",{staticClass:"controll-btn__item",on:{click:t.saveFn}},[t._m(1)]):t._e()])])])])}),r,!1,null,null,null);n.a=component.exports},221:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(t){var n=(new Date).getFullYear(),e=new Date(t),r=e.getFullYear(),c=e.getMonth()+1,o=e.getDate(),l=e.getHours()<10?"0"+e.getHours():e.getHours(),d=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();return{slash:{MD:"".concat(c,"/").concat(o),YMD:"".concat(r,"/").concat(c,"/").concat(o)},dash:{MD:"".concat(c,"-").concat(o),YMD:"".concat(r,"-").concat(c,"-").concat(o)},time:{HM:"".concat(l,":").concat(d)},special:{mode_1:n===r?"".concat(c,"/").concat(o):"".concat(r,"/").concat(c,"/").concat(o)}}}},222:function(t,n,e){"use strict";e.d(n,"m",(function(){return c})),e.d(n,"q",(function(){return o})),e.d(n,"o",(function(){return l})),e.d(n,"l",(function(){return d})),e.d(n,"s",(function(){return f})),e.d(n,"r",(function(){return A})),e.d(n,"k",(function(){return m})),e.d(n,"p",(function(){return v})),e.d(n,"n",(function(){return h})),e.d(n,"a",(function(){return C})),e.d(n,"b",(function(){return _})),e.d(n,"c",(function(){return k})),e.d(n,"d",(function(){return w})),e.d(n,"e",(function(){return y})),e.d(n,"f",(function(){return B})),e.d(n,"g",(function(){return E})),e.d(n,"h",(function(){return x})),e.d(n,"i",(function(){return F})),e.d(n,"j",(function(){return U})),e.d(n,"v",(function(){return I})),e.d(n,"t",(function(){return D})),e.d(n,"u",(function(){return M})),e.d(n,"w",(function(){return S})),e.d(n,"x",(function(){return R})),e.d(n,"y",(function(){return V})),e.d(n,"z",(function(){return Q}));var r=e(216),c=function(data){return r.a.post("orderlists",data)},o=function(t){return r.a.put("orderlists/".concat(t,"/rules/2"))},l=function(t,data){return r.a.put("orderlists/".concat(t,"/rules/3"),data)},d=function(t){return r.a.put("orderlists/".concat(t,"/rules/5"))},f=function(t,data){return r.a.put("orderlists/".concat(t,"/rules/6"),data)},A=function(t){return r.a.put("orderlists/".concat(t,"/rules/7"))},m=function(t){return r.a.put("orderlists/".concat(t,"/rules/8"))},v=function(t){return r.a.put("orderlists/".concat(t,"/rules/4"))},h=function(t,data){return r.a.put("orderlists/".concat(t,"/rules/9"),data)},C=function(){return r.a.get("demand/orderlists")},_=function(t){return r.a.get("demand/orderlists/".concat(t))},k=function(){return r.a.get("demand/quotations")},w=function(){return r.a.get("demand/pays")},y=function(){return r.a.get("demand/matchs")},B=function(){return r.a.get("demand/fails")},E=function(){return r.a.get("demand/complets")},x=function(){return r.a.get("demand/supplypays")},F=function(){return r.a.get("demand/closes")},U=function(){return r.a.get("demand/cancels")},I=function(){return r.a.get("supply/orderlists")},D=function(){return r.a.get("supply/mylist")},M=function(t){return r.a.get("supply/orderlists/".concat(t))},S=function(){return r.a.get("supply/match")},R=function(){return r.a.get("supply/complets")},V=function(){return r.a.get("supply/supplypays")},Q=function(){return r.a.get("supply/closes")}},223:function(t,n,e){t.exports=e.p+"img/f2afa18.png"},226:function(t,n,e){"use strict";var r={props:{rightStart:{type:Boolean,default:!1}},data:function(){return{menu:[{id:"1",title:"全部案件",link:"/order/supply"},{id:"2",title:"進行中",link:"/order/supply/status_3"},{id:"3",title:"待報價",link:"/order/supply/status_5"},{id:"4",title:"待付款",link:"/order/supply/status_6"},{id:"5",title:"已完成",link:"/order/supply/status_7"}]}}},c=e(9),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"order-list-menu",class:{rightstart:t.rightStart}},[e("ul",{staticClass:"list-menu"},t._l(t.menu,(function(n){return e("li",{key:n.id,staticClass:"list-menu__item"},[e("nuxt-link",{staticClass:"item",attrs:{to:n.link}},[e("div",{staticClass:"item__title"},[t._v(t._s(n.title))])])],1)})),0)])}),[],!1,null,null,null);n.a=component.exports},245:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c}));e(128);var r=function(t){switch(Number(t)){case 1:return"待付基本費";case 2:return"配對中";case 3:return"進行中";case 4:return"失約待處理";case 5:return"報價中";case 6:return"待付案件費";case 7:return"已完成";case 8:return"已取消";default:return"狀態未知"}},c=function(t){switch(Number(t)){case 2:return"配對中";case 3:return"進行中";case 4:return"案件失約";case 5:return"待報價";case 6:return"待付案件費";case 7:return"已完成";case 8:return"已取消";default:return"狀態未知"}}},333:function(t,n,e){"use strict";e.r(n);e(26);var r=e(3),c=e(220),o=e(79),l=e(226),d=e(222),f=e(221),A=e(245),m={components:{Header:c.a,MainMenu:o.a,ListMenu:l.a},data:function(){return{title:"案件列表",config:{headerConfig:{notification:!0},pullRefresh:{pullText:"下拉刷新",triggerText:"放開更新",loadingText:"更新中...",doneText:"更新完成",failText:"更新失敗",loadedStayTime:400,stayDistance:50,triggerDistance:70}}}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.t)();case 2:return(n=t.sent).data.forEach((function(t){t.created_at=Object(f.a)(t.created_at).special.mode_1,t.status=Object(A.b)(t.status)})),t.abrupt("return",{listData:n.data});case 5:case"end":return t.stop()}}),t)})))()},methods:{refresh:function(t){var n=this;Object(d.t)().then((function(e){var data=e.data;data.forEach((function(t){t.created_at=Object(f.a)(t.created_at).special.mode_1,t.status=Object(A.b)(t.status)})),n.listData=data,t("done")}))}}},v=e(9),component=Object(v.a)(m,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container bg-dark"},[r("Header",{attrs:{title:t.title,config:t.config.headerConfig}}),r("div",{staticClass:"order-list-page"},[r("PullTo",{attrs:{"top-load-method":t.refresh,"top-config":t.config.pullRefresh}},[r("ListMenu"),r("div",{staticClass:"order-lit-block"},[t.listData.length>0?r("ul",{staticClass:"order-list"},t._l(t.listData,(function(n,e){return r("li",{key:n.id,staticClass:"order-list__item"},[r("nuxt-link",{staticClass:"item",attrs:{to:"/order/supply/"+n.id}},[r("div",{staticClass:"item__top"},[r("div",{staticClass:"item-num"},[t._v(t._s(n.order_num))]),r("div",{staticClass:"item-date"},[t._v(t._s(n.created_at))])]),r("div",{staticClass:"item__content"},[r("div",{staticClass:"item-content-wrap"},[r("div",{staticClass:"item-title"},[r("div",{staticClass:"title"},[t._v(t._s(n.service_name))]),r("div",{staticClass:"tag"},[t._v(t._s(n.service_class_name))])]),r("div",{staticClass:"item-city-zone"},[t._v(t._s(n.city_name)+" ， "+t._s(n.zone_name))]),r("div",{staticClass:"supply-content has-status"},[r("div",{staticClass:"content"},[t._v(t._s(n.content))])])]),r("div",{staticClass:"item-status"},[t._v(t._s(n.status))])])])],1)})),0):r("div",{staticClass:"no-new-case"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:e(223)}})]),r("div",{staticClass:"title"},[t._v("現在還沒有適合您案件哦")])])])],1)],1),r("MainMenu")],1)}),[],!1,null,null,null);n.default=component.exports}}]);
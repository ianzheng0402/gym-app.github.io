(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{221:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAnBJREFUaAXtmrtKA1EQhrMqKFooARUVBO2VPIBiOgvBzsJC7NRWFGz0DcQH8DF8Au2tvFTeQLBRUBtvoMZvIJDdsHP2LDl7iezAsGd35sz//3POJtkkpVJh/7QDtVptHb/CxX5xGa+3hVyILuGaLeVeBMyPNPYScymgw2UxX61R37h5aIo150aeJyXg1YBsihmmJRxia3Tgs/gB/ohrJjHJkdykGmivVkjgK/gNHteumSBzsxECcAW/xFu1CwpU7NvmIBPADfyzVea++R9S0wG16BIA7fmAXQ93oxm0kAHbTdeMQ+pttkBRnwrQDP4TAuj6kmDM6EwaEa8xNI8o2EfGGT5pznQWvaXStOd5b6aKcV6+diiUFnnhLFiCaTSrFah3/55KZWM198FnSo6bVsF2BVYzIC/tkIYJtmq2AhbVCskHjNiRW4jt0w1HWcre5LmGIrxztcw2+gqL2qyAvMVnRV44C7b6McNGwIhUydhUDjYChjMmL/AqBxsBAzkQ0K9xsBGgzU3zuvpi0y4C1GYVAtTWpBQoViClRqswxQqorUkpUKxASo1WYdp+Bbo0aTwHDBHbwue1nBSvL8NHns72eS548uOqnzGYcEzinD85B+MTBFT9PEwCvkns9CfnYPyDgMCuMd0DLzkg3ExBHm0DZhKwTWboc2igQnonwkU4BUzdQpLFfdDDYTAwI7uTJ7bPZ3bwCSEbVyAOJqs1Rv5anDnkHtLVh5hzkklHgIfH+bVGcp010IkqCC3gNl+/S86CE1DXRSAmfzGIsnz/5QD2Vfw0RIVcq7psWmJ7EKJSewKfqhM+53jHTVurnzs5/AEz2or9KpoNowAAAABJRU5ErkJggg=="},222:function(t,e,n){"use strict";n(14);var r=n(35),o=n.n(r).a.create({baseURL:"http://match.bsdctw.net/api/"});o.interceptors.request.use((function(t){return window.localStorage.getItem("token")&&(t.headers={Authorization:"Bearer "+window.localStorage.getItem("token")}),t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t)})),e.a=o},223:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAS1JREFUaAXtl8EJwkAURLOoBKxA8GgLVmEj3i1ALcAmPHgVPFhCQPCsLWgTGufr5ibCkv/5WZmFz0ZYZ2fe5JKi4CIBEiABEkggUNf1KOF4d48iSIk5YGQtvJz2NS5GgBI6e8ws6g00dF00JAzmiGnWDg89FzNtL4VxhmkL0eT/bMYEq4Iom1GAaCLBZkywKoiyGQWIJhJsxgSrgiibUYBoIvFPzQQJA0oXzCTSumO/xuectiqEsJRAa7he5eT8h9exBJKvyxNmGg/esFeYZ/ydy3ZGQ5u3WQmFkU/nZskntbyK+S4EYKgs6mNTWdQEk2yKTTkS4OvnCD/pajaVhMvxMJtyhJ90NZtKwuV4+EtTS0c7OlfHUFvsD8xcR7UDKggz7IANWiABEiCBD4EXyIv1iOsRCl0AAAAASUVORK5CYII="},224:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAAXNSR0IArs4c6QAAAbpJREFUaAXt2bFOwzAQgOEGOiGBYOUJ2NiQkGCACTEwMLHwOognYYFHYESwMfIiZUQKvyFXISuhjuvz2VIsndxadu4+t2mTdjab2rQD0w5E7UDbtufEM3EddYDEi6hjTtwTT8Ru8OGZ/EC49kXcBC9UmEh+h3AAaVfBaVhxRCy6lWYY8vuIV8a2giFuIgtOCTNMh3ikl+YQO6MQMpmFJhjyulciDcIKo4LIjekQf0/s+LeTFO/3JDkh1M6ZLAhBaWGyIrQwJojUGFNEKkwRiHUxRSFiMQOIbTmeaU9xQR/NRSNkB1dhqkCswlSF+AdzC8S/7CjjnJCih3rvbcbTZXPXTnUgBEfBZ8vyfx981Ijw7+wcxexOUzZ3VE/BPuKdMbWr5lHFhU7uQfycE4wHfc+E5lGdN4SQpFVgViGqwIQiisaMRRSJiUUUhVkXUQSmQ/g/nkVfdnC8/B/NqREmr4wWIitGG5EFkwuhismNUMFYIZJirBHJMEDuCGmmt6cU4X/PHAhU+g150NPvdWNv9BdN0yx65mQZIvcLiS6JT2KTGPWvrrvLOybmLCyiUcs+cVhEMVMR0w5UtgPfXcWxw0IAaYEAAAAASUVORK5CYII="},225:function(t,e,n){t.exports=n.p+"img/300c8a9.png"},226:function(t,e,n){"use strict";var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-item"},[e("img",{attrs:{src:n(225)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-title"},[e("div",{staticClass:"title"},[this._v("儲存")])])}],o={props:{title:{type:String,default:""},config:{type:Object,default:function(){return{bgNone:!1,fixedNone:!1,backPage:!1,backLink:"",closePage:!1,closeLink:"",notification:!1,editBtn:!1,saveBtn:!1}}},editFn:{type:Function,default:function(){}},saveFn:{type:Function,default:function(){}},backFn:{type:Function,default:function(link){link?this.$router.push(link):this.$router.go(-1)}},closeFn:{type:Function,default:function(link){link?this.$router.push(link):this.$router.go(-1)}}}},c=n(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header",class:{unbg:t.config.bgNone,unfixed:t.config.fixedNone},attrs:{id:"header"}},[r("div",{staticClass:"header-wrapper"},[r("div",{staticClass:"header-left"},[r("div",{staticClass:"page-btn"},[t.config.backPage?r("div",{staticClass:"page-btn__item",on:{click:function(e){return t.backFn(t.config.backLink)}}},[r("img",{attrs:{src:n(223)}})]):t.config.closePage?r("div",{staticClass:"page-btn__item",on:{click:function(e){return t.closeFn(t.config.closeLink)}}},[r("img",{attrs:{src:n(224)}})]):t._e()])]),r("div",{staticClass:"header-content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))])]),r("div",{staticClass:"header-right"},[r("div",{staticClass:"controll-btn"},[t.config.notification?r("div",{staticClass:"controll-btn__item"},[r("nuxt-link",{staticClass:"btn-item",attrs:{to:"/notification"}},[r("img",{attrs:{src:n(221)}})])],1):t.config.editBtn?r("div",{staticClass:"controll-btn__item",on:{click:t.editFn}},[t._m(0)]):t.config.saveBtn?r("div",{staticClass:"controll-btn__item",on:{click:t.saveFn}},[t._m(1)]):t._e()])])])])}),r,!1,null,null,null);e.a=component.exports},232:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return _}));var r=n(222),o=function(){return r.a.get("users")},c=function(data){return r.a.put("users",data)},l=function(data){return r.a.put("users/application",data)},m=function(){return r.a.get("supply/index")},d=function(){return r.a.get("supply/index/services")},_=function(data){return r.a.post("supply/index/details",data)}},238:function(t,e,n){t.exports=n.p+"img/4d89553.png"},252:function(t,e,n){t.exports=n.p+"img/4b06581.png"},253:function(t,e,n){t.exports=n.p+"img/94bd0ef.png"},254:function(t,e,n){t.exports=n.p+"img/4b62126.png"},255:function(t,e,n){t.exports=n.p+"img/41d5bd0.png"},292:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAyRJREFUaAXtWT2LWkEUvWraEJCFoOwPUBQC9sID/0BCCjsbxVoQ/BFbWYs2FoJVUuQHPLCzEAKKdjaLSxoxqaPuPU8H1uybcd46Pl9gBmY/Zs6dOefeOzN3VyLbrAesB6wHrAesB27ngZiprWu12gOvVd/v9x+CrBmLxX4zvtPtdltB7GRYI4Lq9frn7Xb7TbaJzngikfjS6XS+62BVmLhqUneOxdR0sTKciTWw9sUR4lT7yOs8cqq9k5HVGefU+8u4e069Xzp4GUYpiMnesyHOhsOEU7JFwhhnwU+8j8u9xaIfZXtKBR3F/GQhSZnxLcZZ2Jr3/SQTpTpDD1ETAwceOSFrfJtKkONrEY1BKTepoFufGZXfVNykglQLRnnuoqv2GsLy+TxVKhVv6X6/T9PpNNA2kYsQxCSTSa8LYUEUXS1C6XSaisUi5XI5jxxIrddrms1mNBqNaLVaBeGpjTUuiGsyKpfL5DgOxeOnCQCR6KVSiVzXpeFwSFzynJBFmonI4OegTfqwVqvVfdDFIKbRaFA2m8V74UXiZTRE1BA5fiBpPp9Tu91+JUpn316v58vdaIQQGYjZbDbELzktFosTbsvlktDH4zFxJeJhYTMYDE5wl/xymhMXrATvI80QGT8xL5eGUGCAhQ1sTTVjgpBGODNIsX8j40cWGGBhA1tTzZgg3GZoIKnbBFbY6tqpcMYE4e1AC3IdC6ywVRHVnTMmSHfDa+OMCcKjiRbkgAussDUh1pggVABoQQ64wArbSAnCAd/tdp6gTCZzlhswEAQbcTmcNdIAGIsQDjjKGVQAeDRVojAHDLCwEZeDBt+zEKOVAmqzVCrlVQDNZtPzPLwvCOPMICroovSBjcnmWw9hg7fUcrBTFaeYR0OaITJ+xekBcf5rKLUcaKB6Rm0GwojEf//ng/At0sx0Oom1Vd+NXQqqTcKcs4LC9PZb9pJGiK9V/C85kk3FTSqIlbiRVHMgJeWmEtRiTxwqzggpO3KSftqXkHGdTCZ/CoXCgBdIcb9j3HsZNoxx5vDE/Qfv9VX2yUMYPOwe1gPWA9YD1gPWAyoPPAO7UCqSF2K+cgAAAABJRU5ErkJggg=="},354:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"upload-icon"},[e("img",{attrs:{src:n(292)}})])}],o=(n(45),n(23),n(2)),c=n(226),l=n(232),m={middleware:"authenticated",components:{Header:c.a},data:function(){return{title:"個人資料",headerConfig:{bgNone:!0,fixedNone:!0,backPage:!0,saveBtn:!0},view:{popup:!1},status:{result:!0}}},computed:{user:function(){return this.$store.state.user.info},now_role:function(){return this.$store.state.user.now_role}},asyncData:function(t){var e=t.store;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.e)();case 2:return n=t.sent,data=n.data,r=e.state.user.now_role,t.abrupt("return",{form:{cell_phone:data.cell_phone,name:data.name,nickname:data.nickname,birthday:data.birthday,email:data.email,sex:data.sex,auth:data.auth,facebook_id:data.facebook_id,google_id:data.google_id,image:"",image_title:data.image_title,line_id:data.line_id,bank_code:data.bank_code,bank_name:data.bank_name,bank_account:data.bank_account,services:data.services,zones:data.zones,credentials:[{card_front_image_title:r>=200?data.credentials.card_front_image_title:"",card_front_image:"",card_back_image_title:r>=200?data.credentials.card_back_image_title:"",card_back_image:"",bank_book_image_title:r>=200?data.credentials.bank_book_image_title:"",bank_book_image:""}]}});case 6:case"end":return t.stop()}}),t)})))()},methods:{save_event:function(){var t=this;Object(l.f)(this.form).then((function(e){if(e.data.status)alert("必填欄位不可為空");else{var data={info:e.data,user_role:e.data.auth};t.$store.commit("user/userUpdate",data),t.status.result=!0,t.view.popup=!0,setTimeout((function(){t.status.result=!1,t.view.popup=!1,t.$router.push("/user/info")}),1e3)}})).catch((function(e){console.log(e.response),t.status.result=!1,t.view.popup=!0,setTimeout((function(){t.view.popup=!1}),1e3)}))},facebook_connect:function(){},google_connect:function(){},imageUpload:function(t){var e=this,n=this.$refs[t].files[0],r=!!this.$refs[t].files[0]&&("image/jpeg"===n.type||"image/png"===n.type),o=new FileReader;o.addEventListener("load",(function(t){e.form.image=t.target.result,e.form.image_title=n.name})),r?o.readAsDataURL(n):alert("請確認上傳的圖片格式")}}},d=n(9),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container bg-dark"},[r("Header",{attrs:{title:t.title,config:t.headerConfig,saveFn:t.save_event}}),r("div",{staticClass:"container__top"},[r("div",{staticClass:"user-edit"},[r("div",{staticClass:"user-edit__avatar"},[r("div",{staticClass:"image-block"},[t.user.image?r("div",{staticClass:"image"},[""!==t.form.image?r("img",{attrs:{src:t.form.image}}):r("img",{attrs:{src:t.user.image}})]):r("div",{staticClass:"unimage"},[r("img",{attrs:{src:n(252)}})]),t._m(0)]),r("input",{ref:"user_avatar",attrs:{type:"file"},on:{change:function(e){return t.imageUpload("user_avatar")}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.image_title,expression:"form.image_title"}],attrs:{type:"text",disabled:""},domProps:{value:t.form.image_title},on:{input:function(e){e.target.composing||t.$set(t.form,"image_title",e.target.value)}}})]),r("div",{staticClass:"user-edit__content"},[200===t.now_role?r("div",{staticClass:"title"},[t._v(t._s(t.user.name))]):r("div",{staticClass:"title"},[t._v(t._s(t.user.nickname))])])])]),r("div",{staticClass:"container__content"},[r("ValidationObserver",{ref:"usereditform",scopedSlots:t._u([{key:"default",fn:function(e){e.handleSubmit;return[r("div",{staticClass:"user-edit-form"},[200===t.now_role?r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"user-edit-form__item__input",attrs:{type:"text",placeholder:"請輸入姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]):t._e(),r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("暱稱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nickname,expression:"form.nickname"}],staticClass:"user-edit-form__item__input",attrs:{type:"text",placeholder:"請輸入暱稱"},domProps:{value:t.form.nickname},on:{input:function(e){e.target.composing||t.$set(t.form,"nickname",e.target.value)}}})]),r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("*性別")]),r("div",{staticClass:"user-edit-radio-btn"},[r("div",{staticClass:"user-edit-radio-btn__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sex,expression:"form.sex"}],staticClass:"user-edit-radio-btn__item__input",attrs:{type:"radio",value:"1",id:"gender-male"},domProps:{checked:t._q(t.form.sex,"1")},on:{change:function(e){return t.$set(t.form,"sex","1")}}}),r("label",{staticClass:"user-edit-radio-btn__item__label",attrs:{for:"gender-male"}},[t._v("男")])]),r("div",{staticClass:"user-edit-radio-btn__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sex,expression:"form.sex"}],staticClass:"user-edit-radio-btn__item__input",attrs:{type:"radio",value:"2",id:"gender-female"},domProps:{checked:t._q(t.form.sex,"2")},on:{change:function(e){return t.$set(t.form,"sex","2")}}}),r("label",{staticClass:"user-edit-radio-btn__item__label",attrs:{for:"gender-female"}},[t._v("女")])])])]),200===t.now_role?r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("生日")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.birthday,expression:"form.birthday"}],staticClass:"user-edit-form__item__input",attrs:{type:"date",placeholder:"請輸入生日"},domProps:{value:t.form.birthday},on:{input:function(e){e.target.composing||t.$set(t.form,"birthday",e.target.value)}}})]):t._e(),r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("手機號碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cell_phone,expression:"form.cell_phone"}],staticClass:"user-edit-form__item__input",attrs:{type:"text",placeholder:"請輸入手機號碼",disabled:"disabled"},domProps:{value:t.form.cell_phone},on:{input:function(e){e.target.composing||t.$set(t.form,"cell_phone",e.target.value)}}})]),r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("*Email")]),r("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"user-edit-form__item__input",attrs:{type:"text",placeholder:"請輸入您的 email 帳號",name:"E-mail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),r("span",{staticClass:"form-error-msg"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),200===t.now_role?r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("Line Id")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.line_id,expression:"form.line_id"}],staticClass:"user-edit-form__item__input",attrs:{type:"text",placeholder:"請輸入您的 Line Id"},domProps:{value:t.form.line_id},on:{input:function(e){e.target.composing||t.$set(t.form,"line_id",e.target.value)}}})]):t._e(),r("div",{staticClass:"user-edit-form__item"},[r("label",{staticClass:"user-edit-form__item__label"},[t._v("社群帳號")]),r("div",{staticClass:"user-edit-form__item__list"},[r("div",{staticClass:"social-media-list"},[r("div",{staticClass:"social-media-list__item"},[r("div",{staticClass:"social-media-list__item__label"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n(253)}})]),r("div",{staticClass:"title"},[t._v("Facebook 帳號")])]),t.user.facebook_id?r("div",{staticClass:"social-media-list__item__connected"},[t._v("已綁定")]):r("div",{staticClass:"social-media-list__item__unconnected",on:{click:t.facebook_connect}},[t._v("尚未綁定")])]),r("div",{staticClass:"social-media-list__item"},[r("div",{staticClass:"social-media-list__item__label"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n(254)}})]),r("div",{staticClass:"title"},[t._v("Google 帳號")])]),t.user.google_id?r("div",{staticClass:"social-media-list__item__connected"},[t._v("已綁定")]):r("div",{staticClass:"social-media-list__item__unconnected",on:{click:t.google_connect}},[t._v("尚未綁定")])])])])])])]}}])})],1),r("transition",{attrs:{name:"fade"}},[t.view.popup?r("div",{staticClass:"prompt-message"},[t.status.result?r("div",{staticClass:"prompt-message__item"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n(255)}})]),r("div",{staticClass:"title"},[t._v("儲存成功")])]):r("div",{staticClass:"prompt-message__item"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n(238)}})]),r("div",{staticClass:"title"},[t._v("儲存失敗")])])]):t._e()])],1)}),r,!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{197:function(t,e,c){"use strict";c.r(e);var r={data:function(){return{prePage:"#",cardNumber:"6578",cardDate:"02/24",cardName:"Wong Chia Chi",cardDefault:!0,cardSubscription:!0}}},l=c(18),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container"},[c("div",{staticClass:"header"},[c("div",{staticClass:"header__link"},[c("a",{attrs:{href:t.prePage}})]),c("div",{staticClass:"header__title"},[t._v("卡片資料")])]),c("div",{staticClass:"main"},[c("div",{staticClass:"card-info-block"},[c("div",{staticClass:"card-info"},[c("div",{staticClass:"card-info__item"},[c("div",{staticClass:"card-info__item__title"},[t._v("卡號")]),c("div",{staticClass:"card-info__item__value"},[t._v("**** **** **** "+t._s(t.cardNumber))])]),c("div",{staticClass:"card-info__wrapper"},[c("div",{staticClass:"card-info__item"},[c("div",{staticClass:"card-info__item__title"},[t._v("有效期限")]),c("div",{staticClass:"card-info__item__value"},[t._v(t._s(t.cardDate))])]),t._m(0)]),c("div",{staticClass:"card-info__item"},[c("div",{staticClass:"card-info__item__title"},[t._v("姓名(英文字母)")]),c("div",{staticClass:"card-info__item__value"},[t._v(t._s(t.cardName))])])])]),c("form",{staticClass:"form-style",attrs:{id:"edit-credit-card"}},[c("div",{staticClass:"form-style__item"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.cardDefault,expression:"cardDefault"}],staticClass:"form-style__item__checkbox",attrs:{type:"checkbox",name:"card-default",placeholder:"請輸入卡片上英文姓名",id:"card-default"},domProps:{checked:Array.isArray(t.cardDefault)?t._i(t.cardDefault,null)>-1:t.cardDefault},on:{change:function(e){var c=t.cardDefault,r=e.target,l=!!r.checked;if(Array.isArray(c)){var d=t._i(c,null);r.checked?d<0&&(t.cardDefault=c.concat([null])):d>-1&&(t.cardDefault=c.slice(0,d).concat(c.slice(d+1)))}else t.cardDefault=l}}}),c("label",{staticClass:"form-style__item__label",attrs:{for:"card-default"}},[t._v("設為預設卡")])]),c("div",{staticClass:"form-style__item"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.cardSubscription,expression:"cardSubscription"}],staticClass:"form-style__item__checkbox",attrs:{type:"checkbox",name:"card-subscription",placeholder:"請輸入卡片上英文姓名",id:"card-subscription"},domProps:{checked:Array.isArray(t.cardSubscription)?t._i(t.cardSubscription,null)>-1:t.cardSubscription},on:{change:function(e){var c=t.cardSubscription,r=e.target,l=!!r.checked;if(Array.isArray(c)){var d=t._i(c,null);r.checked?d<0&&(t.cardSubscription=c.concat([null])):d>-1&&(t.cardSubscription=c.slice(0,d).concat(c.slice(d+1)))}else t.cardSubscription=l}}}),c("label",{staticClass:"form-style__item__label",attrs:{for:"card-subscription"}},[t._v("設為定期定額扣款")])]),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-info__item"},[e("div",{staticClass:"card-info__item__title"},[this._v("CVC")]),e("div",{staticClass:"card-info__item__value"},[this._v("***")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-style__submit"},[e("input",{attrs:{type:"submit",value:"儲存設定",id:"submit"}})])}],!1,null,null,null);e.default=component.exports}}]);
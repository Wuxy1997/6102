(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-cart"],{"0fe9":function(t,e,i){"use strict";var a=i("807c"),n=i.n(a);n.a},"10a7":function(t,e,i){t.exports=i.p+"static/shopping-icon.png"},"14a4":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"shopping"},[a("v-uni-view",{staticClass:"shopping-nav"},[t._v("购物车")]),t.cartItems.length?a("v-uni-view",{staticClass:"cart-list"},[a("v-uni-view",{staticClass:"select-all"},[a("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAll.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"checkbox"},[a("v-uni-checkbox",{attrs:{checked:t.isAllSelected,color:"#0c34ba"}}),a("v-uni-text",[t._v("全选")])],1)],1),a("v-uni-text",{staticClass:"delete-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteSelected.apply(void 0,arguments)}}},[t._v("删除选中")])],1),t._l(t.cartItems,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cart-item"},[a("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selectItem(e,i)}}},[a("v-uni-label",{staticClass:"checkbox"},[a("v-uni-checkbox",{attrs:{checked:e.selected,color:"#0c34ba"}})],1)],1),a("v-uni-image",{staticClass:"item-img",attrs:{src:e.large_img,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"item-info"},[a("v-uni-view",{staticClass:"item-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"item-specs"},t._l(e.specs,(function(e,i){return a("v-uni-text",{key:i},[t._v(t._s(e.name)+": "+t._s(e.value))])})),1),a("v-uni-view",{staticClass:"item-price"},[a("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),a("v-uni-view",{staticClass:"item-count"},[a("v-uni-text",{staticClass:"count-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCount(i,-1)}}},[t._v("-")]),a("v-uni-text",{staticClass:"count-num"},[t._v(t._s(e.num))]),a("v-uni-text",{staticClass:"count-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCount(i,1)}}},[t._v("+")])],1)],1)],1)],1)})),a("v-uni-view",{staticClass:"settlement-bar"},[a("v-uni-view",{staticClass:"settlement-left"},[a("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAll.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"checkbox"},[a("v-uni-checkbox",{attrs:{checked:t.isAllSelected,color:"#0c34ba"}}),a("v-uni-text",[t._v("全选")])],1)],1),a("v-uni-view",{staticClass:"total-info"},[a("v-uni-text",[t._v("合计：")]),a("v-uni-text",{staticClass:"total-price"},[t._v("￥"+t._s(t.selectedTotalPrice))])],1)],1),a("v-uni-view",{staticClass:"settlement-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlePayment.apply(void 0,arguments)}}},[t._v("立即付款")])],1)],2):a("v-uni-view",{staticClass:"shopping-container"},[a("v-uni-view",{staticClass:"shopping-icon"},[a("v-uni-image",{staticClass:"icon-picture",attrs:{src:i("10a7")}})],1),a("v-uni-view",{staticClass:"shopping-des"},[t._v("空空如也")]),a("v-uni-view",{staticClass:"shopping-btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoMenu()}}},[t._v("添加商品")])],1)],1)],1)},n=[]},"2b0c":function(t,e,i){"use strict";i.r(e);var a=i("14a4"),n=i("caee");for(var c in n)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("0fe9");var s=i("828b"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"149f5c8a",null,!1,a["a"],void 0);e["default"]=o.exports},"52f0":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,".shopping[data-v-149f5c8a]{height:100vh;background-color:#efeff0;font-family:黑体;padding-bottom:%?120?% /* 为底部结算栏留出空间 */}.shopping-nav[data-v-149f5c8a]{display:flex;justify-content:center;align-items:center;height:%?100?%;background-color:#0c34ba;color:#fff;letter-spacing:2.55px;font-size:20px;position:fixed;top:0;left:0;right:0;z-index:100}.shopping-container[data-v-149f5c8a]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:%?48?%;padding-top:%?100?% /* 为导航栏留出空间 */}.shopping-icon[data-v-149f5c8a]{width:%?180?%;height:%?180?%;padding:%?50?%;border-radius:50%;overflow:hidden;background-color:#e5e5e5}.icon-picture[data-v-149f5c8a]{width:100%;height:100%;display:block}.shopping-des[data-v-149f5c8a]{padding:%?70?% 0;font-size:20px}.shopping-btns[data-v-149f5c8a]{display:flex;justify-content:center;align-items:center;width:45%;height:%?80?%;background-color:#0c34ba;border-radius:%?60?%;color:#fff;letter-spacing:1px;font-size:18px}.cart-list[data-v-149f5c8a]{padding:%?20?%;padding-top:%?120?%; /* 为导航栏留出空间 */padding-bottom:%?150?% /* 为底部结算栏留出空间 */}.select-all[data-v-149f5c8a]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;background-color:#fff;margin-bottom:%?20?%;border-radius:%?10?%}.checkbox[data-v-149f5c8a]{display:flex;align-items:center}.checkbox uni-text[data-v-149f5c8a]{margin-left:%?10?%}.delete-btn[data-v-149f5c8a]{color:#ff4d4f;font-size:%?28?%}.cart-item[data-v-149f5c8a]{display:flex;align-items:center;background-color:#fff;padding:%?20?%;margin-bottom:%?20?%;border-radius:%?10?%}.cart-item .checkbox[data-v-149f5c8a]{margin-right:%?20?%}.item-img[data-v-149f5c8a]{width:%?160?%;height:%?160?%;border-radius:%?10?%}.item-info[data-v-149f5c8a]{flex:1;margin-left:%?20?%}.item-name[data-v-149f5c8a]{font-size:%?32?%;font-weight:700;margin-bottom:%?10?%}.item-specs[data-v-149f5c8a]{font-size:%?24?%;color:#666;margin-bottom:%?10?%}.item-specs uni-text[data-v-149f5c8a]{margin-right:%?20?%}.item-price[data-v-149f5c8a]{display:flex;justify-content:space-between;align-items:center}.price[data-v-149f5c8a]{color:#0c34ba;font-size:%?32?%;font-weight:700}.item-count[data-v-149f5c8a]{display:flex;align-items:center}.count-btn[data-v-149f5c8a]{width:%?50?%;height:%?50?%;line-height:%?50?%;text-align:center;background-color:#f5f5f5;border-radius:%?25?%}.count-num[data-v-149f5c8a]{margin:0 %?20?%}\n\n/* 底部结算栏样式 */.settlement-bar[data-v-149f5c8a]{position:fixed;bottom:var(--window-bottom,0);  /* 适配底部安全区域 */left:0;right:0;height:%?100?%;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 %?30?%;box-shadow:0 %?-2?% %?10?% rgba(0,0,0,.1);z-index:999  /* 提高层级 */}.settlement-left[data-v-149f5c8a]{display:flex;align-items:center;flex:1  /* 添加弹性布局 */}.total-info[data-v-149f5c8a]{margin-left:%?20?%;flex:1  /* 添加弹性布局 */}.total-price[data-v-149f5c8a]{color:#0c34ba;font-size:%?32?%;font-weight:700}.settlement-right[data-v-149f5c8a]{background-color:#0c34ba;color:#fff;padding:%?20?% %?40?%;  /* 调整padding */border-radius:%?40?%;font-size:%?28?%;margin-left:%?20?%  /* 添加左边距 */}",""]),t.exports=e},"6a5f":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("9b1b"));i("fd3c"),i("bf0f"),i("473f"),i("e838"),i("e966"),i("8f71"),i("dd2b"),i("d4b5"),i("2797");var c={data:function(){return{isLogin:!1,cartItems:[],totalPrice:0,isAllSelected:!1,selectedTotalPrice:"0.00"}},onShow:function(){this.checkLogin(),this.loadCartItems()},methods:{checkLogin:function(){try{var t=localStorage.getItem("token");if(!t)return this.isLogin=!1,void this.showLoginToast();var e=JSON.parse(t);this.isLogin=!!e,this.isLogin||this.showLoginToast()}catch(i){console.error("Token解析错误:",i),this.isLogin=!1,this.showLoginToast()}},showLoginToast:function(){uni.showToast({title:"您未登录过",icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1e3)},loadCartItems:function(){try{var t=uni.getStorageSync("cartItems");if(!t)return void(this.cartItems=[]);var e=JSON.parse(t);this.cartItems=Array.isArray(e)?e.map((function(t){return(0,n.default)((0,n.default)({},t),{},{selected:t.selected||!1})})):[],this.calculateTotal(),this.calculateSelectedTotal(),this.isAllSelected=this.cartItems.length>0&&this.cartItems.every((function(t){return t.selected}))}catch(i){console.error("购物车数据加载错误:",i),this.cartItems=[]}},calculateTotal:function(){try{this.totalPrice=this.cartItems.reduce((function(t,e){var i=parseFloat(e.price)||0,a=parseInt(e.num)||0;return t+i*a}),0).toFixed(2)}catch(t){console.error("计算总价错误:",t),this.totalPrice="0.00"}},calculateSelectedTotal:function(){try{var t=this.cartItems.filter((function(t){return t.selected}));this.selectedTotalPrice=t.reduce((function(t,e){var i=parseFloat(e.price)||0,a=parseInt(e.num)||0;return t+i*a}),0).toFixed(2)}catch(e){console.error("计算选中商品总价错误:",e),this.selectedTotalPrice="0.00"}},changeCount:function(t,e){var i=this;try{var a=this.cartItems[t];if(!a)return;if(a.num+e<=0)return void uni.showModal({title:"提示",content:"是否删除该商品？",success:function(e){e.confirm&&(i.cartItems.splice(t,1),i.saveCartItems(),i.calculateSelectedTotal())}});a.num+=e,this.saveCartItems(),this.calculateSelectedTotal()}catch(n){console.error("修改数量错误:",n),uni.showToast({title:"操作失败",icon:"none"})}},saveCartItems:function(){try{uni.setStorageSync("cartItems",JSON.stringify(this.cartItems)),this.calculateTotal(),this.calculateSelectedTotal()}catch(t){console.error("保存购物车数据错误:",t),uni.showToast({title:"保存失败",icon:"none"})}},gotoMenu:function(){uni.showToast({title:"正在加载中",icon:"none"}),setTimeout((function(){uni.switchTab({url:"/pages/menu/menu"})}),500)},selectAll:function(t){var e=t.detail.value.length>0;this.isAllSelected=e,this.cartItems.forEach((function(t){t.selected=e})),this.saveCartItems(),this.calculateSelectedTotal()},selectItem:function(t,e){var i=t.detail.value.length>0;this.cartItems[e].selected=i,this.isAllSelected=this.cartItems.every((function(t){return t.selected})),this.saveCartItems(),this.calculateSelectedTotal()},deleteSelected:function(){var t=this;this.cartItems.some((function(t){return t.selected}))?uni.showModal({title:"提示",content:"确定要删除选中的商品吗？",success:function(e){e.confirm&&(t.cartItems=t.cartItems.filter((function(t){return!t.selected})),t.saveCartItems(),uni.showToast({title:"删除成功",icon:"success"}))}}):uni.showToast({title:"请选择要删除的商品",icon:"none"})},handlePayment:function(){var t=this.cartItems.filter((function(t){return t.selected}));0!==t.length?uni.showToast({title:"功能开发中，敬请期待",icon:"none",duration:2e3}):uni.showToast({title:"请选择要购买的商品",icon:"none"})}}};e.default=c},"807c":function(t,e,i){var a=i("52f0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("84bee32e",a,!0,{sourceMap:!1,shadowMode:!1})},caee:function(t,e,i){"use strict";i.r(e);var a=i("6a5f"),n=i.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a}}]);
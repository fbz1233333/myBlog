webpackJsonp([7],{153:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"prod"}},[t._m(0),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"header"},[e("h2",[t._v(t._s(t.data.title))]),t._v(" "),e("h3",[e("span",[t._v("¥")]),t._v(t._s(t.data.price))]),t._v(" "),e("p",[t._v("货号："+t._s(t.data.goodson)+"|品牌："+t._s(t.data.brand))])]),t._v(" "),e("div",{staticClass:"info"},[e("strong",[t._v("商品信息")]),t._v(" "),e("p",[e("span",[t._v("颜色")]),t._l(t.data.goods,function(a,o){return e("b",{key:o},[0!=o?e("i",[t._v("，")]):t._e(),t._v(t._s(a.color))])})],2),t._v(" "),e("p",[e("span",[t._v("尺码")]),t._l(t.data.goods[0].detail,function(a,o){return e("b",{key:o},[t._v(">"),0!=o?e("i",[t._v("，")]):t._e(),t._v(t._s(a.size))])})],2)]),t._v(" "),e("footer",{on:{click:function(a){t.popupStatus=!0}}},[t._v("立即购买")]),t._v(" "),e("div",{staticClass:"popup",class:{active:t.popupStatus}},[e("div",{staticClass:"mask",on:{click:function(a){t.popupStatus=!1}}}),t._v(" "),e("div",{staticClass:"popupCnt"},[e("h3",[t._v("单价："+t._s(t.data.price)+"/件")]),t._v(" "),e("div",{staticClass:"title"},[e("span",[t._v("尺码")]),t._v(" "),t._l(t.data.goods[0].detail,function(a){return e("span",{key:a},[t._v(">"+t._s(a.size))])}),t._v(" "),e("span",[t._v("小记")])],2),t._v(" "),t._l(t.data.goods,function(a,o){return e("p",{key:o},[t._v(">"),e("span",[t._v("\n\t\t\t\t\t"+t._s(a.color))]),t._v(" "),t._l(a.detail,function(a){return e("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"size.value"}],key:a,attrs:{focusStatus:a.status},domProps:{value:a.value},on:{input:[function(t){t.target.composing||(a.value=t.target.value)},function(a){t.sizeInput(o)}]}})}),t._v(' type="number" name="" />\n\t\t\t\t\t'),e("strong",[t._v(t._s(Number(t.data.price)*(a.color_sum||0)))])],2)}),t._v(" "),t.massage?e("div",{staticClass:"massage"},[t._v(t._s(t.massage))]):t._e(),t._v(" "),e("div",{staticClass:"footer"},[t._v("\n\t\t\t\t\t合计："+t._s(t.data.sum)+"件\n\t\t\t\t\t"),e("strong",[t._v("总价："),e("span",[t._v("¥"+t._s((Number(t.data.price)*(t.data.sum||0)).toFixed(2)))])]),t._v(" "),e("a",{class:{active:t.submitStatus},attrs:{href:"javaScript:void(0);"},on:{click:function(a){t.submit()}}},[t._v("立即下单")])])],2)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("img",{attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3640597061,995535649&fm=27&gp=0.jpg",alt:""}}),t._v(" "),e("p",[e("strong",[t._v("现货")]),e("span",[t._v("1/1")])])])}]}},165:function(t,a,e){var o=e(89);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(7)("0d519c77",o,!0)},26:function(t,a,e){e(165);var o=e(8)(e(77),e(153),"data-v-e5e47526",null);t.exports=o.exports},77:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){this.data.sum=0;var t=!0,a=!1,e=void 0;try{for(var o,i=this.data.goods[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var r=o.value;r.color_sum=0;var p=!0,n=!1,d=void 0;try{for(var s,l=r.detail[Symbol.iterator]();!(p=(s=l.next()).done);p=!0){var u=s.value;u.value=0,u.status=!1}}catch(t){n=!0,d=t}finally{try{!p&&l.return&&l.return()}finally{if(n)throw d}}}}catch(t){a=!0,e=t}finally{try{!t&&i.return&&i.return()}finally{if(a)throw e}}},data:function(){return{submitStatus:!1,massage:"",popupStatus:!1,data:{title:"美丽的连衣裙",price:"100",goodsno:"test002",brand:"海贝",sum:0,goods:[{color:"灰色",color_sum:0,detail:[{size:"M",stock:"99",value:0},{size:"L",stock:"199",value:0},{size:"S",stock:"299",value:0}]},{color:"红色",color_sum:0,detail:[{size:"M",stock:"991",value:0},{size:"L",stock:"1991",value:0},{size:"S",stock:"2991",value:0}]},{color:"黄色",color_sum:0,detail:[{size:"M",stock:"929",value:0},{size:"L",stock:"1919",value:0},{size:"S",stock:"2939",value:0}]}]}}},methods:{sizeInput:function(t){var a=0,e=0;this.massage="";var o=!0,i=!1,r=void 0;try{for(var p,n=this.data.goods[t].detail[Symbol.iterator]();!(o=(p=n.next()).done);o=!0){var d=p.value;a+=Number(d.value)}}catch(t){i=!0,r=t}finally{try{!o&&n.return&&n.return()}finally{if(i)throw r}}var s=!0,l=!1,u=void 0;try{for(var c,v=this.data.goods[Symbol.iterator]();!(s=(c=v.next()).done);s=!0){var f=c.value,h=!0,m=!1,g=void 0;try{for(var _,x=f.detail[Symbol.iterator]();!(h=(_=x.next()).done);h=!0){var b=_.value;e+=Number(b.value)}}catch(t){m=!0,g=t}finally{try{!h&&x.return&&x.return()}finally{if(m)throw g}}}}catch(t){l=!0,u=t}finally{try{!s&&v.return&&v.return()}finally{if(l)throw u}}e>0&&(this.submitStatus=!0),this.data.goods[t].color_sum=a,this.data.sum=e},submit:function(){if(!this.submitStatus)return!1;var t=!0,a=!1,e=void 0;try{for(var o,i=this.data.goods[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var r=o.value,p=r.color,n=!0,d=!1,s=void 0;try{for(var l,u=r.detail[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var c=l.value;if(Number(c.value)>Number(c.stock))return this.massage="颜色"+p+"尺码"+c.size+"的只剩下"+c.stock+"件",c.status=!0,void this.$nextTick(function(){document.querySelectorAll("[focusStatus]")[0].focus()})}}catch(t){d=!0,s=t}finally{try{!n&&u.return&&u.return()}finally{if(d)throw s}}}}catch(t){a=!0,e=t}finally{try{!t&&i.return&&i.return()}finally{if(a)throw e}}alert("下单成功")}}}},89:function(t,a,e){a=t.exports=e(6)(),a.push([t.i,"#prod[data-v-e5e47526]{width:100%;min-height:100vh;display:flex;display:-webkit-flex;flex-direction:column;flex:1;align-items:center}#prod header[data-v-e5e47526]{position:relative;height:30vh;width:100%}#prod header img[data-v-e5e47526]{height:100%;width:100%}#prod header p[data-v-e5e47526]{position:absolute;bottom:10px;width:100%;padding:0 20px;color:#fff}#prod header p strong[data-v-e5e47526]{float:left}#prod header p span[data-v-e5e47526],#prod header p strong[data-v-e5e47526]{height:20px;line-height:20px;padding:0 5px;background-color:rgba(0,0,0,.5);border-radius:10px}#prod header p span[data-v-e5e47526]{float:right}#prod .main[data-v-e5e47526]{width:100%;flex:1;background-color:#fff}#prod .main .header[data-v-e5e47526]{padding:5px 0 10px;margin-bottom:10px;text-align:center;color:#ccc;font-size:12px;border-bottom:10px solid #eeebeb}#prod .main .header h2[data-v-e5e47526]{font-size:14px;font-weight:400}#prod .main .header h3[data-v-e5e47526]{padding:10px 0;font-size:20px;font-weight:400;color:red}#prod .main .header h3 span[data-v-e5e47526]{font-size:12px}#prod .main .info[data-v-e5e47526]{width:100%}#prod .main .info strong[data-v-e5e47526]{display:block;width:40%;margin:0 auto;padding:3px 0;text-align:center;background-color:#eeebeb;border-radius:10px}#prod .main .info p[data-v-e5e47526]{height:40px;line-height:40px;margin:0 10px;border-bottom:1px solid #eeebeb}#prod .main .info p span[data-v-e5e47526]{padding-right:20px;color:#ccc}#prod .main footer[data-v-e5e47526]{position:fixed;bottom:0;width:100%;text-align:center;height:40px;line-height:40px;background-color:red;color:#fff}#prod .main .popup[data-v-e5e47526]{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;height:100vh;width:100vw}#prod .main .popup.active[data-v-e5e47526]{display:block}#prod .main .popup .mask[data-v-e5e47526]{position:absolute;top:0;right:0;bottom:0;left:0;height:100vh;width:100vw;background-color:rgba(0,0,0,.5)}#prod .main .popup .popupCnt[data-v-e5e47526]{position:absolute;bottom:0;left:0;width:100%;color:#ccc;background-color:#fff}#prod .main .popup .popupCnt h3[data-v-e5e47526]{padding:5px 10px 5px 0;font-weight:400;color:red;text-align:right;font-size:16px}#prod .main .popup .popupCnt .title[data-v-e5e47526]{display:flex;height:30px;line-height:30px;color:#fff;background-color:#ccc}#prod .main .popup .popupCnt .title span[data-v-e5e47526]{flex:1;text-align:center}#prod .main .popup .popupCnt p[data-v-e5e47526]{display:flex;padding-top:10px}#prod .main .popup .popupCnt p input[data-v-e5e47526],#prod .main .popup .popupCnt p span[data-v-e5e47526],#prod .main .popup .popupCnt p strong[data-v-e5e47526]{display:inline-block;width:20%;text-align:center}#prod .main .popup .popupCnt p input[data-v-e5e47526]{margin:0 5px;border-bottom:1px solid #ccc}#prod .main .popup .popupCnt .massage[data-v-e5e47526]{padding:10px 0 0 10px;color:red}#prod .main .popup .footer[data-v-e5e47526]{display:flex;padding-left:10px;margin-top:30px;height:30px;line-height:30px;color:#fff;background-color:#ccc}#prod .main .popup .footer strong[data-v-e5e47526]{flex:1;padding-right:10px;text-align:right}#prod .main .popup .footer strong span[data-v-e5e47526]{color:red}#prod .main .popup .footer a[data-v-e5e47526]{height:30px;padding:0 15px;line-height:30px;background-color:#999;color:#fff}#prod .main .popup .footer a.active[data-v-e5e47526]{background-color:red}",""])}});
//# sourceMappingURL=7.build.21ad8c1863622bcc1cc2.js.map
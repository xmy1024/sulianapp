webpackJsonp([286],{H6WI:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Pexp"),i=e("hnOB"),o=(e("Tg7E"),{data:function(){return{total:"",month:"",today:"",date:[],price:[],recent:""}},activated:function(){},mounted:function(){this.getPerformance()},methods:{getPerformance:function(){var t=this;$http.get("finance.OrderAll").then(function(n){if(1==n.result){for(var e in t.total=n.data.all,t.month=n.data.month,t.today=n.data.today,t.recent=n.data.recent,t.recent)t.date.push(t.recent[e].date),t.price.push(t.recent[e].price);var a=document.getElementById("echarts-dom"),o=i.a.init(a),r={title:{text:"最近7天营业额(万元)",textStyle:{fontSize:14,color:"#FF5511"}},xAxis:{type:"category",data:t.date,boundaryGap:!1,axisLabel:{fontSize:14,fontFamily:"Arial",interval:0,rotate:30}},yAxis:{type:"value",axisLabel:{fontFamily:"Arial"}},series:[{data:t.price,type:"line",hoverAnimatio:!0}]};o.setOption(r)}})}},components:{cTitle:a.a}}),r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"performance"}},[e("c-title",{attrs:{hide:!1,text:"营业额"}}),t._v(" "),e("div",{attrs:{id:"content"}},[e("p",{staticClass:"info_a"},[t._v("今日营业额(万元)")]),t._v(" "),e("p",{staticClass:"info_b"},[t._v(t._s(t.today))]),t._v(" "),e("ul",{staticClass:"info_c"},[e("li",[e("span",[t._v("本月营业额(万元)")]),e("br"),t._v(" "),e("span",[t._v(t._s(t.month))])]),t._v(" "),e("li",[e("span",[t._v("总营业额(万元)")]),e("br"),t._v(" "),e("span",[t._v(t._s(t.total))])])]),t._v(" "),e("div",{staticStyle:{"margin-top":"20px","padding-left":"10px",width:"23rem",height:"28.675rem"},attrs:{id:"echarts-dom"}})])],1)},staticRenderFns:[]};var f=e("VU/8")(o,r,!1,function(t){e("ffLc")},"data-v-7b1ff260",null);n.default=f.exports},ffLc:function(t,n,e){var a=e("s/fk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("a91efd80",a,!0,{})},"s/fk":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#performance[data-v-7b1ff260] {\n  padding-top: 40px;\n}\n#performance #content[data-v-7b1ff260] {\n    background: #fff;\n    padding: 0.625rem 0;\n}\n#performance #content .info_a[data-v-7b1ff260] {\n      font-size: 14px;\n      line-height: 1.875rem;\n}\n#performance #content .info_b[data-v-7b1ff260] {\n      font-size: 32px;\n      color: #ff672b;\n      line-height: 3rem;\n}\n#performance #content .info_c[data-v-7b1ff260] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 0.625rem;\n}\n#performance #content .info_c li[data-v-7b1ff260] {\n        width: 50%;\n        line-height: 1.5rem;\n        font-size: 14px;\n        color: #8c8c8c;\n}\n#performance #content .info_c li span[data-v-7b1ff260]:last-child {\n          color: #ff672b;\n          font-size: 18px;\n}\n#performance #content .info_c li[data-v-7b1ff260]:first-child {\n        border-right: solid 0.0625rem #ebebeb;\n}\n",""])}});
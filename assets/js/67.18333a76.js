(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{562:function(s,t,n){"use strict";n.r(t);var a=n(26),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mysql-常用-json-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用-json-函数"}},[s._v("#")]),s._v(" mysql 常用 json 函数")]),s._v(" "),n("p",[s._v("mysql5.7 以上版本支持 json 类型的字段，用于存储 json 对象."),n("br"),s._v("\nmysql 提供了一系列 json 字段的操作函数。")]),s._v(" "),n("h2",{attrs:{id:"解析-json-字段的某个属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解析-json-字段的某个属性"}},[s._v("#")]),s._v(" 解析 json 字段的某个属性")]),s._v(" "),n("p",[s._v("select json_extract(ad_config, '$.listMiddle.interval') from distributor;")]),s._v(" "),n("h2",{attrs:{id:"修改-json-字段的某个属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-json-字段的某个属性"}},[s._v("#")]),s._v(" 修改 json 字段的某个属性")]),s._v(" "),n("p",[s._v("update distributor set ad_config = json_replace(ad_config, '$.listMiddle.interval', 2);")])])}),[],!1,null,null,null);t.default=r.exports}}]);
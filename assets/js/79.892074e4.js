(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{575:function(n,t,a){"use strict";a.r(t);var o=a(26),e=Object(o.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"mybatis-plus-分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus-分页"}},[n._v("#")]),n._v(" mybatis-plus 分页")]),n._v(" "),a("p",[n._v("基于"),a("RouterLink",{attrs:{to:"/mybatis-basic.html"}},[n._v("mybatis-plus 基础教程")]),n._v("配置好 mybatis 环境后, 发现分页查询返回的数据竟然是全部数据, 且 total 值为 0, 即并没有真正的做分页。"),a("br"),n._v("\n原因：没有配置分页插件, 配置方法如下:")],1),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('package com.ruiboyun.facehr.config;\n\nimport com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;\nimport com.baomidou.mybatisplus.extension.plugins.pagination.optimize.JsqlParserCountOptimize;\nimport org.mybatis.spring.annotation.MapperScan;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.transaction.annotation.EnableTransactionManagement;\n\n@EnableTransactionManagement\n@Configuration\n@MapperScan("com.ruiboyun.facehr.**.mapper")\npublic class MybatisPlusConfig {\n\n    @Bean\n    public PaginationInterceptor paginationInterceptor() {\n        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();\n        // 设置请求的页面大于最大页后操作， true调回到首页，false 继续请求  默认false\n        // paginationInterceptor.setOverflow(false);\n        // 设置最大单页限制数量，默认 500 条，-1 不受限制\n        // paginationInterceptor.setLimit(500);\n        // 开启 count 的 join 优化,只针对部分 left join\n        paginationInterceptor.setCountSqlParser(new JsqlParserCountOptimize(true));\n        return paginationInterceptor;\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
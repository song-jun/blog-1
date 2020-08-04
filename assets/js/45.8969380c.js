(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{543:function(t,s,a){"use strict";a.r(s);var e=a(26),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-部署为静态网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-部署为静态网站"}},[t._v("#")]),t._v(" vuepress 部署为静态网站")]),t._v(" "),a("h2",{attrs:{id:"部署到-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到-github"}},[t._v("#")]),t._v(" 部署到 github")]),t._v(" "),a("blockquote",[a("p",[t._v("见https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages")])]),t._v(" "),a("h3",{attrs:{id:"自定义域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),a("ul",[a("li",[t._v("创建 cname 域名")])]),t._v(" "),a("p",[t._v("到域名管理后台, 创建 cname 域名(如 www.sofineday.com), 绑定到 github 域名(如 wangshibiaoflytiger.github.io)")]),t._v(" "),a("ul",[a("li",[t._v("修改配置文件 config.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('base: "/"\n')])])]),a("h2",{attrs:{id:"部署到自己的服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到自己的服务器"}},[t._v("#")]),t._v(" 部署到自己的服务器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置 nginx 服务"),a("br"),t._v("\nweb 发布目录配置为/data/static-file/blog/")])]),t._v(" "),a("li",[a("p",[t._v("编译"),a("br"),t._v("\nyarn docs:build")])]),t._v(" "),a("li",[a("p",[t._v("部署")])])]),t._v(" "),a("ol",[a("li",[t._v("创建 Makefile 发布脚本"),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("此处为了使用到 github 的免费 cdn(cdn.jsdelivr.net)服务， 则同时发布到 github, 并修改 html 文件，修改相关地址为 cdn 地址，以加快页面访问。")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 发布到github\npublish_to_github:\n\t./deploy.sh\n\n# 发布: 先发布到github, 再发布到自己的服务器\npublish: publish_to_github\n\t# 将静态文件引用地址改为github的cdn加速地址\n\tfind ./docs/.vuepress/dist -type f | xargs -I '{}' sed -i 's/\\/assets/https:\\/\\/cdn.jsdelivr.net\\/gh\\/wangshibiaoFlytiger\\/blog@gh-pages\\/assets/g' {}\n\t# 上传程序到服务器\n\tscp -r ./docs/.vuepress/dist/* aliyun_server:/data/static-file/blog/\n\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("执行发布任务\nmake publish")])])])}),[],!1,null,null,null);s.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{594:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-通过-ocsp-stapling-优化-https-访问性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-通过-ocsp-stapling-优化-https-访问性能"}},[t._v("#")]),t._v(" nginx 通过 OCSP Stapling 优化 https 访问性能")]),t._v(" "),a("h2",{attrs:{id:"https-站点访问慢的原因分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-站点访问慢的原因分析"}},[t._v("#")]),t._v(" https 站点访问慢的原因分析")]),t._v(" "),a("p",[t._v("因为浏览器访问 https 站点时，至少首次访问会去证书校验服务器检验 https 证书, 但是免费证书的校验服务器一般都在国外，导致国内用户访问的时候，会明显感到慢，甚至经常出现网络错误。")]),t._v(" "),a("p",[t._v("不同的客户端设备的 https 证书校验机制又不尽相同。例如 android 设备会在首次访问 https 站点时，把证书缓存在本地，后续访问就不会去访问校验服务，导致 android 上访问很流畅，但是 ios 设备却体验特别差，甚至压根没法用。")]),t._v(" "),a("p",[t._v("为了解决免费 https 证书访问慢的问题，有个解决方案：OCSP Stapling。")]),t._v(" "),a("h2",{attrs:{id:"检查证书是否已开启-ocsp-stapling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查证书是否已开启-ocsp-stapling"}},[t._v("#")]),t._v(" 检查证书是否已开启 OCSP Stapling")]),t._v(" "),a("ol",[a("li",[t._v("通过命令\nopenssl s_client -connect "),a("strong",[t._v("sofineday.com")]),t._v(":443 -servername "),a("strong",[t._v("sofineday")]),t._v('.com -status -tlsextdebug < /dev/null 2>&1 | grep "OCSP"')])]),t._v(" "),a("ul",[a("li",[t._v("若显示如下结果，则表示已开启")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OCSP response:\nOCSP Response Data:\n    OCSP Response Status: successful (0x0)\n    Response Type: Basic OCSP Response\n")])])]),a("ul",[a("li",[t._v("若显示如下结果，则表示未开启")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OCSP response: no response sent\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("前往 "),a("a",{attrs:{href:"https://myssl.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("myssl.com"),a("OutboundLink")],1),t._v(" 网站 查看")]),t._v(" "),a("ul",[a("li",[t._v("访问"),a("a",{attrs:{href:"https://myssl.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://myssl.com/"),a("OutboundLink")],1),t._v("， 输入域名"),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200619155914.png",alt:"20200619155914.png"}})]),t._v(" "),a("li",[t._v("查看 OCSP 装订状态"),a("br"),t._v("\n若没有开启 ocsp, 显示如下"),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200619160156.png",alt:"20200619160156.png"}}),t._v("\n点击“刷新报告”，更新报告信息"),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200619160448.png",alt:"20200619160448.png"}}),a("br"),t._v("\n若已开启 ocsp，显示如下"),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200619160739.png",alt:"20200619160739.png"}})])])])]),t._v(" "),a("h2",{attrs:{id:"开启-nginx-的-ocsp-stapling-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-nginx-的-ocsp-stapling-配置"}},[t._v("#")]),t._v(" 开启 nginx 的 OCSP Stapling 配置")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("此处只给了 Let's Encrypt 证书的 oscp 配置"),a("br"),t._v("\n若您使用的是其它品牌的证书，配置方法不同，请自行查找教程。")])]),t._v(" "),a("p",[t._v("在原有的 https 配置基础之上，加入如下 4 行配置即可")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssl_stapling on;\nssl_stapling_verify on;\nresolver 8.8.8.8 8.8.4.4 valid=60s ipv6=off;\nresolver_timeout 5s;\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
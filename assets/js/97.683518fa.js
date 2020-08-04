(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{593:function(t,s,e){"use strict";e.r(s);var a=e(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-配置-https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-https"}},[t._v("#")]),t._v(" nginx 配置 https")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("建议申请支持泛域名的 https 证书, 当拥有很多 3 级域名的时候, 会减少很多工作量")])]),t._v(" "),e("h2",{attrs:{id:"申请-https-证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#申请-https-证书"}},[t._v("#")]),t._v(" 申请 https 证书")]),t._v(" "),e("p",[t._v("证书有收费的，也有免费的。但是免费的足够用，也很稳定，推荐使用。")]),t._v(" "),e("h3",{attrs:{id:"访问freessl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问freessl"}},[t._v("#")]),t._v(" 访问"),e("a",{attrs:{href:"https://freessl.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("freessl"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("免费的证书:")]),t._v(" "),e("ul",[e("li",[t._v("TRUST ASIA"),e("br"),t._v("\n有效期 1 年，支持双域名")]),t._v(" "),e("li",[t._v("Let's Encrypt V2"),e("br"),t._v("\n有效期 3 个月, 支持通配符，即泛域名"),e("br"),t._v("\n虽然比“TRUST ASIA”的有效期短，但是支持泛域名，这样可以为以后带来便利。否则，以后每次新增一个 3 级域名，都需要重复走一遍申请流程。")])]),t._v(" "),e("h3",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),e("h3",{attrs:{id:"下载证书文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载证书文件"}},[t._v("#")]),t._v(" 下载证书文件")]),t._v(" "),e("h2",{attrs:{id:"配置-https-证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-https-证书"}},[t._v("#")]),t._v(" 配置 https 证书")]),t._v(" "),e("p",[t._v("在 server 指令下增加如下配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#https端口\nlisten       443 ssl;\n\n#https的证书配置, 按自身情况改为实际路径\nssl_certificate    /etc/nginx/cert/_.sofineday.com.full_chain.pem;\nssl_certificate_key    /etc/nginx/cert/_.sofineday.com.private.key;\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{516:function(t,s,e){"use strict";e.r(s);var r=e(26),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux-使用-systemd-管理系统服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-使用-systemd-管理系统服务"}},[t._v("#")]),t._v(" linux 使用 Systemd 管理系统服务")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("提供与"),e("RouterLink",{attrs:{to:"/linux-supervisor-service.html"}},[t._v("supervisor")]),t._v("类似的功能。")],1)]),t._v(" "),e("p",[t._v("传统的 linux 系统服务管理采用的是 init 脚本(如 centos 6), 如今主流的管理方式是使用 Systemd。"),e("br"),t._v("\nSystemd 支持服务进程死掉后自动重启。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Systemd 管理工具的功能相当强大，可以管理系统的很多方面，“管理系统服务”仅仅是它的其中 1 项功能。"),e("br"),t._v("\n本文仅用最简单的方法介绍如何使用 Systemd 管理系统服务。详细用法请见"),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Systemd 教程"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#约定"}},[t._v("#")]),t._v(" 约定")]),t._v(" "),e("p",[t._v("本文所描述的服务，命令行启动方式为/root/redirect-api --profile back-test"),e("br"),t._v("\n服务的名称为 redirect。")]),t._v(" "),e("h2",{attrs:{id:"创建系统服务配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建系统服务配置文件"}},[t._v("#")]),t._v(" 创建系统服务配置文件")]),t._v(" "),e("p",[t._v("vi /usr/lib/systemd/system/"),e("strong",[t._v("redirect")]),t._v(".service")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Unit]\n# 单元描述\nDescription=跳转服务\n\n[Service]\nType=simple\n# 启动的脚本命令\nExecStart=/root/redirect-api --profile back-test\n# 重启条件\nRestart=always\n# 几秒后重启\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("h2",{attrs:{id:"设置服务随系统启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置服务随系统启动"}},[t._v("#")]),t._v(" 设置服务随系统启动")]),t._v(" "),e("p",[t._v("systemctl enable "),e("strong",[t._v("redirect")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("systemctl enable "),e("strong",[t._v("redirect")]),t._v(" 等同于如下命令，仅是创建一个链接"),e("br"),t._v("\nln -s /usr/lib/systemd/system/"),e("strong",[t._v("redirect")]),t._v(".service /etc/systemd/system/multi-user.target.wants/"),e("strong",[t._v("redirect")]),t._v(".service")])]),t._v(" "),e("h2",{attrs:{id:"启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[t._v("#")]),t._v(" 启动服务")]),t._v(" "),e("p",[t._v("systemctl start "),e("strong",[t._v("redirect")])]),t._v(" "),e("h2",{attrs:{id:"停止服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止服务"}},[t._v("#")]),t._v(" 停止服务")]),t._v(" "),e("p",[t._v("systemctl stop "),e("strong",[t._v("redirect")])]),t._v(" "),e("h2",{attrs:{id:"查看服务日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看服务日志"}},[t._v("#")]),t._v(" 查看服务日志")]),t._v(" "),e("p",[t._v("journalctl -u "),e("strong",[t._v("redirect")])]),t._v(" "),e("h2",{attrs:{id:"查看系统服务配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看系统服务配置文件"}},[t._v("#")]),t._v(" 查看系统服务配置文件")]),t._v(" "),e("p",[t._v("systemctl cat "),e("strong",[t._v("redirect")])]),t._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);
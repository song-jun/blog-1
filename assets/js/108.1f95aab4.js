(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{604:function(e,r,t){"use strict";t.r(r);var a=t(26),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"部署负载均衡器-lvs-keepalived"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署负载均衡器-lvs-keepalived"}},[e._v("#")]),e._v(" 部署负载均衡器 LVS Keepalived")]),e._v(" "),t("h2",{attrs:{id:"准备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[e._v("#")]),e._v(" 准备环境")]),e._v(" "),t("p",[e._v("CentOS-6.4-x86_64-minimal")]),e._v(" "),t("h2",{attrs:{id:"约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#约定"}},[e._v("#")]),e._v(" 约定")]),e._v(" "),t("p",[e._v("LVS_Master: 10.96.33.243"),t("br"),e._v("\nLVS_Backup: 10.96.33.244"),t("br"),e._v("\nrealServer1: 10.96.33.246"),t("br"),e._v("\nrealServer2: 10.96.33.249"),t("br"),e._v("\nVIP：10.96.33.230"),t("br"),e._v("\n所有服务器均须处同一网段（当然客户端除外）"),t("br"),e._v("\n所有服务器的网卡 MAC 地址不能相同（克隆虚拟机时注意此项）"),t("br"),e._v("\nrealserver1、realserver2 的服务端口：80")]),e._v(" "),t("h2",{attrs:{id:"安装-lvs-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-lvs-master"}},[e._v("#")]),e._v(" 安装 LVS_Master")]),e._v(" "),t("p",[e._v("vi /etc/sysconfig/iptables")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT\n-A INPUT -d 224.0.0.0/8 -j ACCEPT\n-A INPUT -p vrrp -j ACCEPT\n")])])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624120600.png",alt:"20200624120600.png"}}),t("br"),e._v("\nservice iptables restart"),t("br"),e._v("\nyum install -y ipvsadm"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624120624.png",alt:"20200624120624.png"}}),t("br"),e._v("\nipvsadm"),t("br"),e._v("\nchkconfig ipvsadm on"),t("br"),e._v("\nservice ipvsadm start"),t("br"),e._v("\nyum install -y keepalived"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624120727.png",alt:"20200624120727.png"}}),t("br"),e._v("\nchkconfig keepalived on"),t("br"),e._v("\nmodprobe -l | grep ipvs"),t("br"),e._v("\nlsmod |grep ip_vs //查看模块是否加载成功"),t("br"),e._v("\nvi /etc/keepalived/keepalived.conf")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("! Configuration File for keepalived\n\nglobal_defs {\n    notification_email {\n        acassen@firewall.loc\n        failover@firewall.loc\n        sysadmin@firewall.loc\n    }\n    notification_email_from Alexandre.Cassen@firewall.loc\n    smtp_server 192.168.200.1\n    smtp_connect_timeout 30\n    router_id LVS_MASTER\n}\n\nvrrp_instance VI_1 {\n    state MASTER\n    interface eth0\n    virtual_router_id 51\n    priority 100\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n        10.96.33.230\n    }\n}\n\nvirtual_server 10.96.33.230 80 {\n    delay_loop 6\n    lb_algo rr\n    lb_kind DR\n    persistence_timeout 50 #会话保持时间\n    protocol TCP\n\n    real_server 10.96.33.246 80 {\n        weight 1\n        TCP_CHECK {\n            connect_timeout 3\n            nb_get_retry 3\n            delay_before_retry 3\n        }\n    }\n\n    real_server 10.96.33.249 80 {\n        weight 1\n        TCP_CHECK {\n            connect_timeout 3\n            nb_get_retry 3\n            delay_before_retry 3\n        }\n    }\n}\n")])])]),t("p",[e._v("service keepalived start")]),e._v(" "),t("h2",{attrs:{id:"安装-lvs-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-lvs-backup"}},[e._v("#")]),e._v(" 安装 LVS_Backup")]),e._v(" "),t("p",[e._v("与安装 LVS_Master 的区别（共 3 项）如下："),t("br"),e._v("\nvi /etc/keepalived/keepalived.conf")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("router_id LVS_BACKUP\nstate BACKUP\npriority 90\n")])])]),t("h2",{attrs:{id:"安装-realserver1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-realserver1"}},[e._v("#")]),e._v(" 安装 realServer1")]),e._v(" "),t("p",[e._v("service iptables stop"),t("br"),e._v("\nyum install -y httpd"),t("br"),e._v("\nservice httpd start"),t("br"),e._v("\necho 10.96.33.246 > /var/www/html/index.html"),t("br"),e._v("\nvi /root/dr-rs.sh")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('#!/bin/bash\n#\n# Script to start LVS DR real server.\n# description: LVS DR real server\n#\n.  /etc/rc.d/init.d/functions\nVIP=10.96.33.230\nhost=`/bin/hostname`\ncase "$1" in\nstart)\n       # Start LVS-DR real server on this machine.\n        /sbin/ifconfig lo down\n        /sbin/ifconfig lo up\n        echo 1 > /proc/sys/net/ipv4/conf/lo/arp_ignore\n        echo 2 > /proc/sys/net/ipv4/conf/lo/arp_announce\n        echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore\n        echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce\n        /sbin/ifconfig lo:0 $VIP broadcast $VIP netmask 255.255.255.255 up\n        /sbin/route add -host $VIP dev lo:0\n        echo "LVS RealServer Start OK"\n;;\nstop)\n        # Stop LVS-DR real server loopback device(s).\n        /sbin/ifconfig lo:0 down\n        echo 0 > /proc/sys/net/ipv4/conf/lo/arp_ignore\n        echo 0 > /proc/sys/net/ipv4/conf/lo/arp_announce\n        echo 0 > /proc/sys/net/ipv4/conf/all/arp_ignore\n        echo 0 > /proc/sys/net/ipv4/conf/all/arp_announce\n\t/sbin/route del $VIP >/dev/null 2>&1\n        echo "LVS RealServer Stoped OK"\n;;\nstatus)\n        # Status of LVS-DR real server.\n        islothere=`/sbin/ifconfig lo:0 | grep $VIP`\n        isrothere=`netstat -rn | grep "lo:0" | grep $VIP`\n        if [ ! "$islothere" -o ! "isrothere" ];then\n            # Either the route or the lo:0 device\n            # not found.\n            echo "LVS-DR real server Stopped."\n        else\n            echo "LVS-DR real server Running."\n        fi\n;;\n*)\n            # Invalid entry.\n            echo "$0: Usage: $0 {start|status|stop}"\n            exit 1\n;;\nesac\n')])])]),t("p",[e._v("chmod +x /root/dr-rs.sh"),t("br"),e._v("\n/root/dr-rs.sh start"),t("br"),e._v('\necho "/root/dr-rs.sh start" >>/etc/rc.local')]),e._v(" "),t("h2",{attrs:{id:"安装-realserver2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-realserver2"}},[e._v("#")]),e._v(" 安装 realServer2")]),e._v(" "),t("p",[e._v("与“安装 realServer1”的区别："),t("br"),e._v("\necho 10.96.33.249 > /var/www/html/index.html")]),e._v(" "),t("h2",{attrs:{id:"安装验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装验证"}},[e._v("#")]),e._v(" 安装验证")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("确认虚拟 IP 地址已在 LVS_Master 上启动"),t("br"),e._v("\n在 LVS_Master 执行：ip addr show eth0"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624120846.png",alt:"20200624120846.png"}})])]),e._v(" "),t("li",[t("p",[e._v("确认 LVS 规则已成功配置在 LVS_Master"),t("br"),e._v("\n在 LVS_Master 执行：ipvsadm -Ln"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624120950.png",alt:"20200624120950.png"}})])]),e._v(" "),t("li",[t("p",[e._v("查看 LVS_Backup 的 IP"),t("br"),e._v("\n在 LVS_Backup 执行：ip addr show eth0"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624121049.png",alt:"20200624121049.png"}}),e._v("\n执行结果中没有显示虚拟 IP 是正确的，因为当前分发请求操作是由 LVS_Master 接管。")])]),e._v(" "),t("li",[t("p",[e._v("确认 LVS 规则已成功配置在 LVS_Backup"),t("br"),e._v("\n在 LVS_Backup 执行：ipvsadm -Ln"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624121119.png",alt:"20200624121119.png"}})])]),e._v(" "),t("li",[t("p",[e._v("模拟 LVS_Master 宕机，分发请求操作由 LVS_Backup 接管"),t("br"),e._v("\n1> 在 LVS_Master 执行：service keepalived stop"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624121134.png",alt:"20200624121134.png"}}),e._v("\n2> 在 LVS_Backup 执行：ip addr show eth0"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624121204.png",alt:"20200624121204.png"}}),e._v("\n3> 通过 LVS_Backup 的日志可看出 LVS_Backup 开始接管 LVS_Master 的分发请求操作"),t("br"),e._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624121233.png",alt:"20200624121233.png"}})])]),e._v(" "),t("li",[t("p",[e._v("客户端请求 VIP"),t("br"),e._v("\n可以浏览器或者 curl 等工具作为客户端。"),t("br"),e._v("\nLVS_Master、LVS_Backup 中任意一台宕机或者 realServer1、realServer2 任意一台宕机，均不影响业务。")])])]),e._v(" "),t("h2",{attrs:{id:"查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[e._v("#")]),e._v(" 查看日志")]),e._v(" "),t("p",[e._v("tail -f /var/log/messages")]),e._v(" "),t("h2",{attrs:{id:"查看请求调度信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看请求调度信息"}},[e._v("#")]),e._v(" 查看请求调度信息")]),e._v(" "),t("p",[e._v("watch -n 1 -d ipvsadm -ln"),t("br"),e._v("\nwatch -n 1 -d ipvsadm -lnc"),t("br"),e._v("\nipvsadm --list –timeout")]),e._v(" "),t("h2",{attrs:{id:"rtmp-负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtmp-负载均衡"}},[e._v("#")]),e._v(" RTMP 负载均衡")]),e._v(" "),t("ul",[t("li",[e._v("当客户端断开 rtmp 连接后，LVS 服务器上 ipvsadm –ln 显示的 ActiveConn 短时间内不减少（会导致再次推送相同的发布地址失败），可以通过减少 tcp 空闲等待时间来解决，命令为 ipvsadm --set 1 2 100")]),e._v(" "),t("li",[e._v("ipvsadm –set 注意事项\nTCP 连接超时时间一定要小于 TCPFIN 的时间")]),e._v(" "),t("li",[e._v("linux 端用 ffmpeg 向同一发布地址推送直播只能推送一次，再次推送会失败，提示信息如下：\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200624121424.png",alt:"20200624121424.png"}}),t("br"),e._v("\n然而在 windows 下用 ffmpeg 向同一发布地址推送直播，可以反复推送。不知原因。")])]),e._v(" "),t("h2",{attrs:{id:"与-haproxy-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与-haproxy-区别"}},[e._v("#")]),e._v(" 与 HAProxy 区别")]),e._v(" "),t("p",[e._v("客户端必须通过 VIP 访问 LVS，不能通过 LVS 实际 IP 访问。然而，HAProxy 允许通过 LVS 实际 IP 访问。")])])}),[],!1,null,null,null);r.default=n.exports}}]);
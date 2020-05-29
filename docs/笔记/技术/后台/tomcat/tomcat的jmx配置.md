---
title: tomcat配置
permalink: /back/tomcat/tomcat-config.html
---

[[toc]]

1. tomcat 配置(172.18.100.110 替换成实际 IP)
   vi /usr/local/beauty-front/bin/setenv.sh:
   JAVA_OPTS="\${JAVA_OPTS} -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=8999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=172.18.100.110"
2. 停止防火墙
3. 运行 jvisualvm -J-Xmx3096M
   添加远程主机

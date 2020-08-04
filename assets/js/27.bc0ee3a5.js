(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{525:function(t,r,s){"use strict";s.r(r);var e=s(26),p=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"centos-安装-vsftpd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-vsftpd"}},[t._v("#")]),t._v(" centos 安装 vsftpd")]),t._v(" "),s("h2",{attrs:{id:"一．-准备环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一．-准备环境"}},[t._v("#")]),t._v(" 一． 准备环境")]),t._v(" "),s("p",[t._v("CentOS 6.4 x86_64")]),t._v(" "),s("h2",{attrs:{id:"二．-安装-vsftpd-服务器（假定-ip-222-161-203-148）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二．-安装-vsftpd-服务器（假定-ip-222-161-203-148）"}},[t._v("#")]),t._v(" 二． 安装 vsftpd 服务器（假定 IP:222.161.203.148）")]),t._v(" "),s("p",[t._v("yum install vsftpd -y"),s("br"),t._v("\nuseradd ftpUser"),s("br"),t._v('\necho "ftpPwd" | passwd --stdin ftpUser'),s("br"),t._v("\nmkdir /opt/ftpDir"),s("br"),t._v('\necho -e "pasv_enable=YES\\npasv_min_port=10240\\npasv_max_port=10240\\nlocal_root=/opt/ftpDir\\nchroot_list_enable=no\\nchroot_local_user=yes" >> /etc/vsftpd/vsftpd.conf'),s("br"),t._v("\nchmod -R o+w /opt/ftpDir"),s("br"),t._v("\nservice vsftpd start"),s("br"),t._v("\nchkconfig --level 2345 vsftpd on"),s("br"),t._v("\n开放端口 21、10240"),s("br"),t._v("\nsetsebool -P allow_ftpd_full_access on")]),t._v(" "),s("h2",{attrs:{id:"三．-安装-ftp-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三．-安装-ftp-客户端"}},[t._v("#")]),t._v(" 三． 安装 ftp 客户端")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("若客户端操作系统为 CentOs 6.5 x86_64"),s("br"),t._v("\nyum install -y ftp"),s("br"),t._v("\nftp "),s("strong",[t._v("222.161.203.148")]),t._v(" //访问 vsftpd 服务器，输入用户名 ftpUser、密码 ftpPwd"),s("br"),t._v(" "),s("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200730104237.png",alt:""}}),s("br"),t._v("\n若需挂载，执行如下步骤："),s("br"),t._v("\nrpm -Uvh http://pkgs.repoforge.org/rpmforge-release/rpmforge-release-0.5.3-1.el6.rf.x86_64.rpm"),s("br"),t._v("\nyum install curlftpfs -y"),s("br"),t._v("\nmkdir /opt/ftp/"),s("br"),t._v("\ncurlftpfs ftp://ftpUser:ftpPwd@222.161.203.148 /opt/ftp/"),s("br"),t._v("\n发现一个问题：挂载后本地不实时与服务器同步，若上传一个文件后则会立刻同步。")])]),t._v(" "),s("li",[s("p",[t._v("若客户端操作系统为 windows 7")])])]),t._v(" "),s("p",[t._v("打开“计算机”，输入：ftp://ftpUser@222.161.203.148，回车"),s("br"),t._v("\n// 或同时指定用户名和密码： ftp://ftpUser:ftpPwd@222.161.203.148"),s("br"),t._v(" "),s("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200730104427.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200730104447.png",alt:""}})])])}),[],!1,null,null,null);r.default=p.exports}}]);
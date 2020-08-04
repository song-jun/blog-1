(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{572:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux-安装-phalcon-开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-phalcon-开发环境"}},[t._v("#")]),t._v(" linux 安装 phalcon 开发环境")]),t._v(" "),e("h2",{attrs:{id:"一-安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-安装步骤"}},[t._v("#")]),t._v(" 一. 安装步骤")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("操作系统：CentOS-7-x86_64-Minimal-1503-01")])]),t._v(" "),e("p",[t._v("rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm"),e("br"),t._v("\nyum install php php-devel pcre-devel gcc make php-mysql php-fpm libtool git nginx mariadb-server -y"),e("br"),t._v("\ncd /root"),e("br"),t._v("\ngit clone --depth=1 git://github.com/phalcon/cphalcon.git"),e("br"),t._v("\ncd cphalcon/build"),e("br"),t._v("\n./install"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724112518.png",alt:""}})]),t._v(" "),e("p",[t._v("vi /etc/php.ini：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("extension=json.so\nextension=pdo.so\nextension=phalcon.so\n")])])]),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724112550.png",alt:""}})]),t._v(" "),e("p",[t._v("php -m"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724112633.png",alt:""}})]),t._v(" "),e("p",[t._v("cp ./phalcon.conf /etc/nginx/conf.d/"),e("br"),t._v("\nmv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf_bak"),e("br"),t._v("\nsystemctl enable php-fpm"),e("br"),t._v("\nsystemctl start php-fpm"),e("br"),t._v("\nsystemctl enable mariadb"),e("br"),t._v("\nsystemctl start mariadb"),e("br"),t._v("\nsystemctl start nginx"),e("br"),t._v("\nsystemctl enable nginx"),e("br"),t._v("\nfirewall-cmd --add-port=80/tcp --permanent"),e("br"),t._v("\nfirewall-cmd --reload"),e("br"),t._v("\nbaseUri 设为/"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724112730.png",alt:""}})]),t._v(" "),e("p",[t._v("chmod o+w /var/www/html/transcoder/app/cache //假定应用为 transcoder"),e("br"),t._v("\nchcon -t httpd_sys_rw_content_t /var/www/transcoder/app/cache //"),e("strong",[t._v("假定应用为 transcoder，工程所有需要写文件权限的地方都要执行此操作,打开 selinux 的写权限，多级目录注意加-R 选项，表示递归")]),e("br"),t._v("\n访问http://ip")]),t._v(" "),e("p",[t._v("安装 Phalcon dev tools"),e("br"),t._v("\ncd /root"),e("br"),t._v("\ngit clone git://github.com/phalcon/phalcon-devtools.git"),e("br"),t._v("\ncd ./phalcon-devtools/"),e("br"),t._v("\n../phalcon.sh"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724113042.png",alt:""}})]),t._v(" "),e("p",[t._v("ln -s /root/phalcon-devtools/phalcon.php /usr/bin/phalcon"),e("br"),t._v("\nchmod ugo+x /usr/bin/phalcon"),e("br"),t._v("\nphalcon"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724113128.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_1-若改用-apache（即不用-nginx）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-若改用-apache（即不用-nginx）"}},[t._v("#")]),t._v(" 1. 若改用 apache（即不用 nginx）")]),t._v(" "),e("p",[t._v("vi /etc/httpd/conf/httpd.conf:\n"),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724113201.png",alt:""}})]),t._v(" "),e("p",[t._v("systemctl enable httpd"),e("br"),t._v("\nsystemctl start httpd"),e("br"),t._v("\nchmod o+w /var/www/html/transcoder/app/cache //假定应用为 transcoder"),e("br"),t._v("\nchcon -t httpd_sys_rw_content_t /var/www/transcoder/app/cache //"),e("strong",[t._v("假定应用为 transcoder，工程所有需要写文件权限的地方都要执行此操作,打开 selinux 的写权限")]),e("br"),t._v("\n访问http://ip/transcoder")]),t._v(" "),e("h3",{attrs:{id:"_2-安装-xdebug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-xdebug"}},[t._v("#")]),t._v(" 2. 安装 xdebug")]),t._v(" "),e("p",[e("strong",[t._v("约定:")])]),t._v(" "),e("ul",[e("li",[t._v("phpstorm 所在客户端 IP 为 10.96.15.152")]),t._v(" "),e("li",[t._v("服务器 IP 为 10.96.15.73")]),t._v(" "),e("li",[t._v("web 服务器选用 apache（若改用 nginx，则关掉 httpd 服务，启动 nginx 和 php-fpm 服务，同样可实现远程调试）")]),t._v(" "),e("li",[t._v("项目根目录在服务器的绝对路径：/var/www/html/transcoder")])]),t._v(" "),e("h4",{attrs:{id:"_1-安装配置服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装配置服务端"}},[t._v("#")]),t._v(" 1> 安装配置服务端")]),t._v(" "),e("p",[t._v("yum install php-pear -y"),e("br"),t._v("\npecl install xdebug"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724113805.png",alt:""}})]),t._v(" "),e("p",[t._v("vi /etc/php.ini，结尾追加如下内容:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[Xdebug]\nzend_extension = /usr/lib64/php/modules/xdebug.so\nxdebug.remote_enable=1\nxdebug.remote_host= 10.96.15.152\nxdebug.remote_port=9000\nxdebug.max_nesting_level=200\nxdebug.idekey="PHPSTORM"\nxdebug.remote_autostart = 1\nxdebug.remote_connect_back=1 //若加上这一项则服务端自动检测客户端 IP，覆盖xdebug.remote_host 配置项，适合多人协作时使用\n')])])]),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114000.png",alt:""}})]),t._v(" "),e("p",[t._v("php -m"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114025.png",alt:""}})]),t._v(" "),e("p",[t._v("systemctl restart httpd //重启 httpd，新增 php 模块才会加载到 httpd 服务")]),t._v(" "),e("h4",{attrs:{id:"_2-配置-phpstorm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-phpstorm"}},[t._v("#")]),t._v(" 2> 配置 phpstorm")]),t._v(" "),e("p",[t._v("配置样例见: phpStorm10.0.2Settings.jar"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114114.png",alt:""}})]),t._v(" "),e("p",[t._v("更改下图中突出显示部分："),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114145.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114215.png",alt:""}})]),t._v(" "),e("p",[t._v("拷贝现有的 transcoder 调试配置"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114246.png",alt:""}})]),t._v(" "),e("p",[t._v("更改下图中突出显示部分"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114317.png",alt:""}})]),t._v(" "),e("p",[t._v("以下 3 个命令仅针对 transcoder 项目"),e("br"),t._v("\ntouch /var/www/html/transcoder/log"),e("br"),t._v("\nchmod o+w /var/www/html/transcoder/log"),e("br"),t._v("\nchmod a+w /var/www/html/transcoder/app/cache")]),t._v(" "),e("h4",{attrs:{id:"_3-安装和启用火狐浏览器-xdebug-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装和启用火狐浏览器-xdebug-插件"}},[t._v("#")]),t._v(" 3> 安装和启用火狐浏览器 xdebug 插件")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114512.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114539.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114614.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114642.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_4-远程部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-远程部署"}},[t._v("#")]),t._v(" 4> 远程部署")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114714.png",alt:""}})]),t._v(" "),e("p",[t._v("复制现有配置 localApache"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114739.png",alt:""}})]),t._v(" "),e("p",[t._v("更改如下图突出显示部分"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114814.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114845.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724114932.png",alt:""}})]),t._v(" "),e("p",[t._v("远程服务器上创建项目发布目录"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115005.png",alt:""}})]),t._v(" "),e("p",[t._v("选择工程根位置"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115035.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115107.png",alt:""}})]),t._v(" "),e("p",[t._v("可见 transcoder 项目文件已上传成功"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115134.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_5-调试-web-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-调试-web-应用"}},[t._v("#")]),t._v(" 5> 调试 web 应用")]),t._v(" "),e("p",[t._v("选择配置，并开启调试按钮"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115210.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_6-调试命令行脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-调试命令行脚本"}},[t._v("#")]),t._v(" 6> 调试命令行脚本")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("确认 phpstorm 中的服务器名称配置"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115308.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("启动监听"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115455.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("设置环境变量"),e("br"),t._v("\nexport PHP_IDE_CONFIG=serverName=remoteServer //"),e("strong",[t._v("取值为第 1 步中配置的名称")])])]),t._v(" "),e("li",[e("p",[t._v("执行命令行程序"),e("br"),t._v("\nphp -dxdebug.remote_host=10.96.15.95 /var/www/html/transcoder/app/CLIApplications/transcoder.php main test world11 universe11 //"),e("strong",[t._v("假定 10.96.15.95 为 phpstorm 所在机器 IP")]),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115743.png",alt:""}})])])]),t._v(" "),e("h3",{attrs:{id:"_3-若改用-centos-6-4-x86-64，则步骤如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-若改用-centos-6-4-x86-64，则步骤如下"}},[t._v("#")]),t._v(" 3. 若改用 CentOS 6.4 x86_64，则步骤如下")]),t._v(" "),e("p",[t._v("yum install epel-release"),e("br"),t._v("\nrpm -ivh http://rpms.famillecollet.com/enterprise/6/remi/x86_64/remi-release-6.6-1.el6.remi.noarch.rpm"),e("br"),t._v("\nvi /etc/yum.repos.d/epel.repo"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115902.png",alt:""}})]),t._v(" "),e("p",[t._v("yum install mysql-server httpd"),e("br"),t._v("\nvi /etc/httpd/conf/httpd.conf"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724115954.png",alt:""}})]),t._v(" "),e("p",[t._v("yum install php56 --enablerepo=remi"),e("br"),t._v(" "),e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724120035.png",alt:""}})]),t._v(" "),e("p",[t._v("ln -s /usr/bin/php56 /usr/bin/php"),e("br"),t._v("\n//service httpd start"),e("br"),t._v("\nyum install php-fpm --enablerepo=remi"),e("br"),t._v("\nservice php-fpm start"),e("br"),t._v("\nyum install php-mysql --enablerepo=remi"),e("br"),t._v("\nyum install nginx --enablerepo=remi"),e("br"),t._v("\nyum install php-devel --enablerepo=remi"),e("br"),t._v("\nservice nginx start")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("编译步骤没有成功，然后做如下红字操作就编译成功了(卸载掉，重新安装)"),e("br"),t._v("\nrpm -e php56-runtime php56-php-cli php56-php-pear php56-php-pecl-jsonc php56-php-process php56 php-mysql-5.4.45-2.el6.remi.x86_64 php56-php-common php-common php-pdo php56-php-pecl-zip php56-php-xml php-fpm")]),t._v(" "),e("p",[t._v("yum install -y php56-runtime php56-php-cli php56-php-pear php56-php-pecl-jsonc php56-php-process php56 php-mysql-5.4.45-2.el6.remi.x86_64 php56-php-common php-common php-pdo php56-php-pecl-zip php56-php-xml php-fpm")]),t._v(" "),e("p",[t._v("yum install php-devel php-cli --enablerepo=remi"),e("br"),t._v("\n糊涂了，经判断，我们使用的是 5.4.45，而 php56 系列包没用")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724120540.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724122822.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724122905.png",alt:""}})]),t._v(" "),e("p",[t._v("到此 nginx 下可成功运行 phalcon 应用"),e("br"),t._v("\nyum install php-5.4.45-2.el6.remi.x86_64 --enablerepo=remi //向 apache 加入 php 模块"),e("br"),t._v("\nservice httpd restart"),e("br"),t._v("\n到此 httpd 下也可成功运行 phalcon 应用"),e("br"),t._v("\nyum install php-pear")]),t._v(" "),e("p",[e("strong",[t._v("远程调试没有走通")])]),t._v(" "),e("h2",{attrs:{id:"二-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-注意事项"}},[t._v("#")]),t._v(" 二. 注意事项")]),t._v(" "),e("ul",[e("li",[t._v("有必要配置对上传文件的限制， web 服务器和 php 均需配置，以 nginx 为例")])]),t._v(" "),e("ol",[e("li",[t._v("vi /etc/nginx/conf.d/phalcon.conf")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("client_max_body_size 2M;\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("vi /etc/php.ini")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("upload_max_filesize = 2M\npost_max_size = 8M //必然大于 upload_max_filesize\nmax_file_uploads = 20\n")])])]),e("ul",[e("li",[t._v('若采用 nginx，则 nginx 还需加入如下配置，避免出现错误" upstream sent too big header while reading response header from upstream"')])]),t._v(" "),e("p",[t._v("vi /etc/nginx/conf.d/phalcon.conf")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("fastcgi_buffer_size 128k;\nfastcgi_buffers 4 256k;\nfastcgi_busy_buffers_size 256k;\n")])])]),e("p",[e("img",{attrs:{src:"https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200724123257.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);
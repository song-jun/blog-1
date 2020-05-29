---
title: 安装php7
permalink: /back/php/install-php7.html
---

[[toc]]

一. 约定
操作系统：Ubuntu 16.04.3 LTS
二. 准备资源
二. 安装步骤

1. 安装
   apt-get update
   apt-get install php php-pear nginx vim curl

2. 配置
   vim /etc/nginx/sites-enabled/default:

# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000

        #
        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
        #
        #       # With php7.0-cgi alone:
        #       fastcgi_pass 127.0.0.1:9000;
        #       # With php7.0-fpm:
                fastcgi_pass unix:/run/php/php7.0-fpm.sock;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #       deny all;
        }

3. 启动服务
   service php7.0-fpm start
   service nginx start

三. 验证
vi /var/www/html/test.php:

<?php
echo phpinfo();
?>

curl http://localhost:80/test.php

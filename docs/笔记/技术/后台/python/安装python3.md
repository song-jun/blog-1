---
title: 安装python3
permalink: /back/python/install-python3.html
---

[[toc]]

## 1. 约定

操作系统：CentOS release 6.9 (Final)

## 2. 准备资源

python 源码：/root/Python-3.6.4.tar.gz

## 3. 安装步骤

yum install gcc zlib-devel openssl-devel

tar -zxvf /root/Python-3.6.4.tar.gz -C /root

cd /root/Python-3.6.4

./configure --prefix=/usr/local/python3 --enable-shared

make

make install

vi /root/.bashrc

```
export PYTHON3_HOME=/usr/local/python3
export PATH=$PYTHON3_HOME/bin:$PATH
```

source /root/.bashrc

echo /usr/local/python3/lib/ > /etc/ld.so.conf.d/python3.conf

ldconfig

python3 --version

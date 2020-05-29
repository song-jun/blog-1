---
title: 安装redis集群
permalink: /back/redis/install-redis-cluster.html
---

[[toc]]

编译安装单机版redis
tar -zxvf /root/redis-5.0.5.tar.gz -c /root
cd /root/redis-5.0.5
make -j2 PREFIX=/usr/local/redis install
cp /root/redis-5.0.5/redis.conf /usr/local/redis/

准备集群目录
mkdir -p /usr/local/redis-cluster/bin
mkdir -p /usr/local/redis-cluster/9001
mkdir -p /usr/local/redis-cluster/9002
mkdir -p /usr/local/redis-cluster/9003
mkdir -p /usr/local/redis-cluster/9004
mkdir -p /usr/local/redis-cluster/9005
mkdir -p /usr/local/redis-cluster/9006

准备集群可执行文件
cp /usr/local/redis/bin/* /usr/local/redis-cluster/bin/
cp /root/redis-5.0.5/src/mkreleasehdr.sh /usr/local/redis-cluster/bin/
cp /root/redis-5.0.5/src/redis-trib.rb /usr/local/redis-cluster/bin/

复制一个新redis实例
cp -r /usr/local/redis/* /usr/local/redis-cluster/9001/
修改配置文件
vi /usr/local/redis-cluster/9001/redis.conf
port 9001（每个节点的端口号）
daemonize yes
bind 172.18.100.177（绑定当前机器 IP）
dir /usr/local/redis-cluster/9001/data/
pidfile /var/run/redis_9001.pid（pid 9001和port要对应）
cluster-enabled yes（启动集群模式）
cluster-config-file nodes-9001.conf（9001和port要对应）
cluster-node-timeout 15000
appendonly yes
创建数据目录
mkdir /usr/local/redis-cluster/9001/data

基于9001节点复制出其他的节点
cp -r /usr/local/redis-cluster/9001/* /usr/local/redis-cluster/9002/
cp -r /usr/local/redis-cluster/9001/* /usr/local/redis-cluster/9003/
cp -r /usr/local/redis-cluster/9001/* /usr/local/redis-cluster/9004/
cp -r /usr/local/redis-cluster/9001/* /usr/local/redis-cluster/9005/
cp -r /usr/local/redis-cluster/9001/* /usr/local/redis-cluster/9006/
sed -i 's/9001/9002/g' /usr/local/redis-cluster/9002/redis.conf
sed -i 's/9001/9003/g' /usr/local/redis-cluster/9003/redis.conf
sed -i 's/9001/9004/g' /usr/local/redis-cluster/9004/redis.conf
sed -i 's/9001/9005/g' /usr/local/redis-cluster/9005/redis.conf
sed -i 's/9001/9006/g' /usr/local/redis-cluster/9006/redis.conf

启动6个节点
vi /usr/local/redis-cluster/bin/start-redis-cluster.sh:
    #!/bin/bash
    /usr/local/redis-cluster/bin/redis-server /usr/local/redis-cluster/9001/redis.conf
    /usr/local/redis-cluster/bin/redis-server /usr/local/redis-cluster/9002/redis.conf
    /usr/local/redis-cluster/bin/redis-server /usr/local/redis-cluster/9003/redis.conf
    /usr/local/redis-cluster/bin/redis-server /usr/local/redis-cluster/9004/redis.conf
    /usr/local/redis-cluster/bin/redis-server /usr/local/redis-cluster/9005/redis.conf
    /usr/local/redis-cluster/bin/redis-server /usr/local/redis-cluster/9006/redis.conf
chmod +x /usr/local/redis-cluster/bin/start-redis-cluster.sh
/usr/local/redis-cluster/bin/start-redis-cluster.sh

安装高版本ruby(以)
yum install -y centos-release-scl-rh
yum install -y rh-ruby24
scl enable rh-ruby24 bash

安装集群所需软件
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
sudo gem install redis (依赖版本ruby>=2.3.0)

启动集群
/usr/local/redis-cluster/bin/redis-cli --cluster create 172.18.100.177:9001 172.18.100.177:9002 172.18.100.177:9003 172.18.100.177:9004 172.18.100.177:9005 172.18.100.177:9006 --cluster-replicas 1

验证
1. 一个节点上写
/usr/local/redis-cluster/bin/redis-cli -h 172.18.100.177 -p 9001 -c
set key1 val1
exit
2. 另一个节点上读
/usr/local/redis-cluster/bin/redis-cli -h 172.18.100.177 -p 9002 -c
get key1
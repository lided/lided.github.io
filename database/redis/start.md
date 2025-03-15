---
order: 0
---
redis是一个高性能,基于内存的非关系型数据库

***参考文档***
- [redis作者个人博客](HTTP://antirez.com)
- [官方命令文档](https://redis.io/docs/latest/commands/?group=bitmap)
- [中文命令文档](https://redis.com.cn/commands.html)

# 安装

## 通过包管理器安装

[redis官方安装](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/)

## 编译安装

1. 从官网安装tar包

```sh
curl https://download.redis.io/redis-stable.tar.gz -o redis-stable.tar.gz
```

2. 安装依赖

```sh
# arch
sudo pacman -S base-devel tcl

# Ubuntu/Debian
sudo apt update
sudo apt install build-essential tcl

# CentOS/RHEL
sudo yum install gcc-c++
```

3. 解压

```sh
tar -zxvf redis-stable.tar.gz && cd redis-stable
```

4. 编译安装

```sh
sudo make && sudo make install
```

- 安装默认路径/usr/local/bin

5. 修改配置

```
daemonize yes #后台守护进程
protected-mode no #保护模式  允许别人连接
#bind 127.0.0.1 #将bind注释
requirepass xxxx #设置密码,可以不设置
```

# 启动

在/usr/local/bin目录下

```sh
# 第二个参数为配置文件位置
redis-server /root/redis/redis.conf
```

查看是否成功

```sh
ps -ef|grep redis
```

## 客户端登录

```sh
redis-cli -a [password] -p 6379
# 输入ping 命令  出现 PONG 则成功
quit  #退出客户端 不关闭服务
shutdown # 关闭服务
```

关闭服务

```sh
redis-cli -a [password] shutdown
#指定端口关闭
redis-cli -p 6379  -a [password] shutdown
```

## 卸载

```sh
rm -rf /usr/local/bin/redis-*
```
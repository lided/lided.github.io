## 配置

主机无需配置,只需在从机上配置

设置要访问master密码

```
masterauth <master_pwd>
```

设置master主机ip地址

```
replicaof <master_ip> <port>
```

## 开始

按照master,slave顺序一次启动redis服务

使用info命令查看主从信息

```
info replication
```

* 主机die后,从机会原地等待主机上线
* slave在启动时会将master所有数据获取

## 动态配置

当没有在配置文件中配置主机IP时,可以在客户端命令行使用以下命令将当前redis配置为slave

```
slaveof <master_ip:port>
```

取消上述主从配置

```
slaveof no one
```

## 过程

1. slave启动连接到master后,会发送sync命令,将master所有数据全部复制,并覆盖slave自身原有的数据
2. master接收到sync命令后,会开始在后台保存rdb,同时收集所有接收到的修改数据集命令,rdb持久化完成后,开始向slave发送rdb文件和命令.
3. master会默认每10秒钟发送心跳检测
4. 持续连接过程中,master会将修改命令自动传给slave
5. master和slave都会保存offset信息,保证slave异常下线重新上线后master会从指定位置加载数据

## 缺点

* slave只能读不能写,当master异常die后整个主从都会无法正常使用(读)
* 随着服务器越来越多,从master到slave传输延迟越来越大
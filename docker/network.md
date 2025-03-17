docker network 有三种模式

- bridge(default) 桥接
- host 主机
- none 无


```sh
# 可以通过以下命令查看
$ docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
4f699915b4f4   bridge    bridge    local
ca5b537b5358   host      host      local
593abd797fe1   none      null      local
```

# bridge

## 默认

docker有一个默认bridge网络,通过docker0虚拟网桥实现容器与外部通信,可以在主机上查看

```sh
$ ip a show docker0 
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 36:72:66:bc:2c:e8 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::3472:66ff:febc:2ce8/64 scope link proto kernel_ll 
       valid_lft forever preferred_lft forever
```

默认bridge网络下,不同容器之间只能通过ip访问,需要通过--link参数添加其他容器ip-name对应

```sh
# 在容器a2上添加一个a1的链接
docker run -itd --name a1 alpine
docker run -itd --name a2 --link a1:aaa alpine
# 进入a2容器,可以看到是通过hosts文件实现name-ip对应
$ env | grep AAA
AAA_NAME=/a2/aaa
$ cat /etc/hosts | grep aaa
172.17.0.2      aaa 600915164d2a a1
```

link参数是单向通信，若需互相通信，则需要对所有容器指定link参数。当容器数量多时,就会非常麻烦。所以已不推荐使用，建议使用自定义bridge。

## 自定义bridge

```sh
# 创建一个docker网络,默认为bridge模式
$ docker network create bridge1
```

自定义bridge可以使用dns服务,在容器中直接通过容器名访问其他容器

```sh
# 创建俩个容器连接bridge1网络
docker run -itd --network=bridge1 --name=a1 alpine:latest 
docker run -itd --network=bridge1 --name=a2 alpine:latest

# 进入a1容器,可以通过a2名称访问a2容器
$ docker exec -it a1 sh
/ $ ping a2 -c1
PING a2 (172.18.0.3): 56 data bytes
64 bytes from 172.18.0.3: seq=0 ttl=64 time=0.257 ms

--- a2 ping statistics ---
1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max = 0.257/0.257/0.257 ms
```


# host

容器直接使用主机的网络
***优点***
- 无需nat转化,性能高
***缺点***
- 当容器较多时容易造成端口冲突,生产风险较高

# none

容器不使用网络
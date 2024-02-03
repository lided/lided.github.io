将客户端命令缓存起来,一个传输执行多个命令,节省传输时间

类似String类型mset命令一次设置多个键值对

## 开始

新建一个普通文本文件t.txt

```
set k1 v1
set k2 v2
hset hk id 1 name jack
lpush listk 1 2 3 4
```

在linux命令行运行即可

```
cat t.txt | redis-cli -a pwd --pipe
```

类似于mysql执行sql文件


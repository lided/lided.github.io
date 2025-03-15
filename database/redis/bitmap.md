bitmap就是string,不过是以二进制的视角进行操作

```redis
# 修改key指定位的值
setbit key offset [0|1]

# 创建k1,第12位设置为1,其他位(<12)为默认值0
127.0.0.1:6379> setbit k1 12 1
(integer) 1
```

- 如果key不存在则创建,长度为offset
- offset最小为0,最大为2^32 -1,限制最大为512MB(即string限制)

```redis
# 获取key指定位的值
getbit key offset

# 查看k1第12位的值
127.0.0.1:6379> getbit k1 12
(integer) 1
```

```redis
# 查询指定范围字节/比特中1的数量
bitcount key [start end [byte | bit]]

# 查询k1从2->倒2 字节中1的数量
# foobar 二进制: 01100110 01101111 01101111 01100010 01100001 01110010
127.0.0.1:6379> set k1 foobar
OK
127.0.0.1:6379> bitcount k1 2 -2 byte
(integer) 12
```

```redis
# 将多个bitmap按照指定方式运算,结果赋给new_key
bitop <and | or | xor | not> new_key [key]...

# 将k1 k2 与操作赋值给nk
127.0.0.1:6379> set k1 a # 01100001
OK
127.0.0.1:6379> set k2 b # 01100010
OK
127.0.0.1:6379> bitop and nk k1 k2
(integer) 1
127.0.0.1:6379> get nk
"`" # 01100000
```

- 当多个bitmap长度不一致时,会填充0
- 当给出的key不存在时,也会填充0
- not运算有且只能提供一个key

> bitop会遍历所有位,对于长数据会比较耗时,推荐使用集群,从库只读,在从库中执行bitop

```redis
# 查询指定范围第一个0/1的位置,不存在返回-1
bitpos key <0|1> [start [end [BYTE | BIT]]]

# 查询k从2->倒1字节中第一个0的位置
127.0.0.1:6379> set k foobar
OK
127.0.0.1:6379> bitpos k 0 2 -1 byte
(integer) 16
```

- start,end可以为负数(-2为倒数第二个)

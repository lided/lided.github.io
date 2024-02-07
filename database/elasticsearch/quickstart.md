# \_cat

```
# 查询所有索引信息
GET /_cat/indices

# 主节点信息
GET /_cat/master

# 节点信息
GET /_cat/nodes

# 健康信息
GET /_cat/health
```

# indexes

```
添加索引
PUT /[index_name]

//删除索引
DELETE /[index_name]

# 查询索引下所有文档
GET /[index_name]/_search

```

# doc

## 全量修改

```
PUT /index1/_doc/1
{
  "name":"jack",
  "gender":1
}
```

## 局部修改

```
POST /index1/_update/1
{
  "doc":{
    "name":"jack3"
  }
}
```

指定修改name属性,并用doc包裹

## 删除doc

```
DELETE /index1/_doc/1
```


# \_cat

```
/_cat/indices?
```

# indexes

```
添加索引
PUT /index1

//删除索引
DELETE /index1

# 查询索引下所有文档
GET /index1/_search

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


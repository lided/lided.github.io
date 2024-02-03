## 分类

### DDL(数据定义语言)

create,alter,drop,rename,truncate清空

### DML(数据操作语言)

insert,delete,update,select

### DCL(数据控制语言)

commit,rollback,savepoint,grant,revoke

## 大小写规范

在**windows**下不区分大小写

在**linux**下**数据库名,表名,表别名,变量名**区分大小写,**关键字,函数名,字段名,字段别名**不区分大小写

是因为windows文件本身不区分大小写,而liunx区分

## 注释


```
单行注释
--- 注释内容
#注释内容(mysql独有)

多行
/*  注释内容  */
```


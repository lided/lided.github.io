# 表结构

```sql
create table table_name
(
    id           bigint unsigned auto_increment primary key,
    #todo
    gmt_create   datetime   default CURRENT_TIMESTAMP,
    gmt_modified datetime   default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
    deleted      tinyint(1) default 0 comment '0 未删除; null 已删除'
);
```
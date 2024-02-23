# 系统数据库

![](images/Pasted%20image%2020240223193455.png)

# 常用工具

## mysql client

```sh
mysql [options] <database_name>?
```

- [options]
	- -h,--host 指定ip
	- -P,--port 指定端口
	- -p,--password 指定密码
	- -u,--user 指定登录用户
	- -e,--execute 指定要运行的sql,然后推出

## mysqladmin

## mysqlbinlog

```sql
mysqlbinlog [options] <log_file> <log_file>+
```

- [options]
	- -d,--database
	- -o,--offset 忽略日志前n行
	- -r,--result-file 输出到指定文件
	- -s,--short-form 简单格式
	- --start-datatime
	- --stop-datatime 指定日期间隔
	- --start-position
	- --stop-position 指定位置间隔

## mysqlshow

```sql
mysqlshow [options] [ database [ table [ filed] ] ]
```

- [options]
	- -i 显示状态信息
	- --count 显示统计信息

## mysqldump

```sql
mysqldump [options] [database_table] > <file_name.sql>
```

- [options]
	- --add-drop-database 在创建database前执行drop
	- --add-drop-table 同database(默认开启)
	- -n,--no-create-db 不包含create database
	- -t,--no-create-info 不包含create table
	- -d,--no-data 不包含数据
	- -T,--tab 将表结构和数据分开,并指定数据文件
	- --single-transaction innodb引擎不加锁保持数据一致性
- [database_table]
	- <database_name> <table_name>? 指定database,table
	- --database,-B 指定多个database,逗号隔开
	- --all-databases,-A 所有database

## mysqlimport

导入mysqldump使用-T参数生成的数据文件

```sql
mysqlimport [options] <database> <textfile> <textfile>+
```

## source

导入sql文件

```sql
source <sql_file_name>
```


# MySQL

```sh
docker run -p 3306:3306 -d --name mysql -v/cy/mysql/etc:/etc -v/cy/mysql/lib:/var/lib/mysql -v/cy/mysql/log:/var/log -e MYSQL_ROOT_PASSWORD=lide mysql:8
```

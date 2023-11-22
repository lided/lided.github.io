#  docker安装 

### 卸载旧版本

```shell
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

^ad12c0

### 安装yum-utils

````shell
yum install -y yum-utils
````

### 为其配置源

```shell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

或者阿里源

```shell
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 安装docker引擎

```shell
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

或者指定版本

````shell
#查看所有版本
yum list docker-ce --showduplicates | sort -r

sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io docker-buildx-plugin docker-compose-plugin
````

### 开始运行

```shell
systemctl start docker
# 自启
systemctl enable docker
```

### 卸载

先执行第一步卸载版本,再删除容器等文件

```shell
rm -rf /var/lib/docker /var/lib/containerd
```

### 配置加速器

```shell
vi /etc/docker/daemon.json
```

将如下放入并重启docker

```json
{
  "registry-mirrors":["https://v49t3g9l.mirror.aliyuncs.com","https://registry.docker-cn.com"]
}
```


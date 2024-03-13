[Install Docker Engine on CentOS | Docker Docs](https://docs.docker.com/engine/install/centos/)

### 卸载旧版本

```sh
sudo yum list installed | grep docker | xargs sudo yum -y remove
```


删除容器,镜像等文件

```shell
sudo rm -r /var/lib/docker /var/lib/containerd
```

### 安装yum-utils

````shell
sudo yum install -y yum-utils
````

### 为docker配置yum源

```shell
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

或者阿里源

```shell
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 安装docker引擎

```shell
sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

或者指定版本

````shell
#查看所有版本
sudo yum list docker-ce --showduplicates | sort -r

sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io docker-buildx-plugin docker-compose-plugin
````

### 配置加速器

```sh
echo '{
  "registry-mirrors":["https://docker.mirrors.sjtug.sjtu.edu.cn"]
}' | sudo tee /etc/docker/daemon.json         
```

### 开始运行

```shell
sudo systemctl start docker ; sudo systemctl enable docker
```
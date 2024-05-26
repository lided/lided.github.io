[Install Docker Engine on CentOS | Docker Docs](https://docs.docker.com/engine/install/centos/)

### 卸载旧版本

```sh
sudo yum list installed | grep docker | xargs sudo yum -y remove
```


### 删除容器,镜像等文件

```shell
sudo rm -r /var/lib/docker /var/lib/containerd
```

### 一键安装

```sh
sudo yum install -y yum-utils && sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo  &&  echo '{
  "registry-mirrors":["https://docker.mirrors.sjtug.sjtu.edu.cn"]
}' | sudo tee /etc/docker/daemon.json && sudo systemctl start docker && sudo systemctl enable docker
```
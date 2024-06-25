# 参考

[Install Docker Engine on CentOS | Docker Docs](https://docs.docker.com/engine/install/centos/)

# 卸载旧版本

```sh
sudo yum list installed | grep docker | xargs sudo yum -y remove
```


# 删除容器,镜像等文件

```shell
sudo rm -r /var/lib/docker /var/lib/containerd
```

# 一键安装

```sh
sudo yum install -y yum-utils && 
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo  &&
sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin &&
sudo systemctl start docker && sudo systemctl enable docker
```

# 配置加速器

```sh
echo '{
  "registry-mirrors":["https://docker.mirrors.tuna.tsinghua.edu.cn"]
}' | sudo tee /etc/docker/daemon.json && sudo systemctl restart docker
```

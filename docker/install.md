---
order: 1
---

[Install Docker Engine | Docker Docs](https://docs.docker.com/engine/install/)

# 清理

## 卸载旧版本

```sh
sudo yum list installed | grep docker | cut -f1 -d' ' | xargs sudo yum -y remove
```

## 删除容器,镜像等文件

```shell
sudo rm -r /var/lib/docker /var/lib/containerd
```


# 安装

## debian

```shell

#!/bin/bash

set -e

URL="https://mirrors.aliyun.com/docker-ce/linux/debian"

sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL "$URL/gpg" -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc


echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://mirrors.aliyun.com/docker-ce/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin \
&& sudo systemctl enable docker && sudo systemctl restart docker

if ! systemctl is-active --quiet docker; then
    echo "Error: Docker service failed to start!" >&2
    exit 1
fi

if [ -t 0 ]; then
    read -rp "Run hello-world to test? [Y/n]: " yn
    if [[ "${yn,,}" =~ ^(y|yes)?$ ]]; then
        sudo docker run --rm hello-world
    else
        echo "Skipping test."
    fi
fi

```

## fedora

```shell
sudo dnf install -y dnf-plugins-core && 
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo && 
sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin && 
sudo systemctl start docker && 
sudo systemctl enable docker
```

## centos

### yum docker 阿里源

```sh
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 一键安装

```sh
sudo yum install -y yum-utils && 
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo  &&
sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin &&
sudo systemctl start docker && sudo systemctl enable docker
```

## 加速器

```sh
##  /etc/docker/daemon.json
curl https://www.coderjia.cn/archives/dba3f94c-a021-468a-8ac6-e840f85867ea -s | sed -nE '/^\{$/,/^\}$/p'
```


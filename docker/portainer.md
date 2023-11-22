```sh
docker run -d --network=host --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce
```

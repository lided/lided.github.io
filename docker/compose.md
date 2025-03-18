https://docs.docker.com/compose/compose-file/



```yml
verison: "3"

services:
  name1:
    image: centos:7
    container_name: xxx
    restart: always
    command: ["run","xxx"]
    networks:
      - net
    environment:
      ENV1: xxx
      ENC2: xxx
    volumes:
      - /xxx/xxx:/xxx/xxx
      - /xxx/xxx:/xxx/xxx
    ports:
      - 1234:1234
      - 1234:1234
    hostname: xxx
networks:
  net:
    driver: bridge
```
# mybatis


[版本对应关系](https://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)

```xml
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.3.2</version>
</dependency>
```
# mybatis-plus

```xml
<dependency>
	<groupId>com.baomidou</groupId>
	<artifactId>mybatis-plus-boot-starter</artifactId>
	<version>最新版本</version>
</dependency>
```

# 问题

###### 雪花算法导致前端数据精度丢失问题

雪花算法生成数字大于js最大范围,所以在后端json格式化时将Long格式转成String

```java
@Configuration
public class JacksonConfig {
    @Bean
    public Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
        return new Jackson2ObjectMapperBuilder()
                .serializerByType(Long.class, ToStringSerializer.instance)
                .simpleDateFormat("yyyy-MM-dd HH:mm:ss")
                .timeZone("GMT+8");
    }
}
```
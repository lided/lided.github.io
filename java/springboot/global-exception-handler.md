```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public String ex(Exception e) {
        return "error:" + e.getMessage();
    }
}

```

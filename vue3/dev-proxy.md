解决开发环境下跨域问题

> vite.config.ts

```ts
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:80",
        // ChangeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```

上述配置将以/api开头的请求转发到指定地址
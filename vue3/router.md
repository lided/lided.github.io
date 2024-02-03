## 项目导入

```sh
npm i vue-router
```

> main.ts

```ts
import router from '@/router'
app.use(router)
```

## router配置

```ts
import { createRouter , createWebHistory } from 'vue-router'
// lazy loading
const UserDetails = () => import('path/to/UserDetails.vue')
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: xxx },
        { path: '/', component: () => import('path/to/UserDetails.vue') },
    ]
})
```

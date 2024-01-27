```sh
npm install vue-router
```

```main.ts
import router from '@/router'
app.use(router)
```

```router.ts
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const UserDetails = () => import('path/to/UserDetails.vue')
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: xxx },
        { path: '/', component: () => import('path/to/UserDetails.vue') },
    ]
})
```

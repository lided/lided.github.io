## vue3

```
<script setup>
</script>
<template>
    <div>
        
    </div>
</template>
<style scoped>
    
</style>
```

## router

```
npm install vue-router
```

```
import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:xxx},
    ]
})
```

```
import router from './assets/router'
app.use(router)
```

## pinia

```
import { defineStore } from 'pinia'
export default defineStore('id', {
    state: () => ({
    }),
    getters: {
    },
    actions: {
    },
})
```

```
import {createPinia} from 'pinia'
app.use(createPinia())
```

## axios

```
import axios from 'axios'
 const R = axios.create({
    // baseURL:'',
    // timeout:'',
})
R.interceptors.request.use((config)=>{
return config 
},(error)=>{
    return Promise.reject('error')
})
R.interceptors.response.use((resp)=>{
    return resp
},(error)=>{
    return Promise.reject('error')
})
export default R
```
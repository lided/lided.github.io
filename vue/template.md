## vue3

```
<template>
    <div>
        
    </div>
</template>
<script setup>
</script>
<style scoped>
    
</style>
```

## router

```
import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:xxx},
    ]
})
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
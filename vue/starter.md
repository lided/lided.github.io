# frist

```sh
npm create vite -- --template vue-ts
```

## vue3

```
<script setup lang="ts">

</script>

<template>
  
</template>

<style scoped>
</style>

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

# axios

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
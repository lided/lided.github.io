# npm导入

```sh
npm i axios
```

# 封装axios

```ts
import axios from "axios";
const A = axios.create({
  baseURL: "/api",
});
A.interceptors.request.use((config) => {
  return config;
});
A.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default A;
```
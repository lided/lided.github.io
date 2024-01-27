# path rename (src -> @)

```sh
npm i path
```

```ts
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": { "@/*": ["src/*"] }
}
```
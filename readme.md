# Vue.js intro


## Set up project

### Install Vue and manager
```js
// Set up vue project with vite
> npm create vue@latest my-vue-project-name
// Install package manager
> npm i
```

### Change port (Optional)
1. In `vite.config.js`
```json
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```
### Run dev
```js
npm run dev
```
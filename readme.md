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

### Etc.
#### ■ [Tailwind css](https://tailwindcss.com/)
```js
// This is for TW v.2
> npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

// Create config
> npx tailwindcss init -p

// Set tailwind.config.js
module.exports = {
  content: ['/index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30':'70% 28%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// Set css files
/* ./src/assets/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Restart server.


#### ■ [Primeicons](https://github.com/primefaces/primeicons#readme)

```js
// to install
npm install primeicons

// to use paste bellow to main.js
import 'primeicons/primeicons.css'
```

#### ■ json server (for fake backend)
```js
// install json server
> npm i json-server

// set env
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "server": "json-server --watch src/jobs.json --port 5000"
},

// run server
> npm run server
```

#### axios (alternate fetch)
```js
// install axios
> npm i axios


```

#### UI
##### vue-spinner
```js
> npm i vue-spinner
```


### Run dev
```js
npm run dev
```


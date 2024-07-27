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





### Run dev
```js
npm run dev
```


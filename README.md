**INSTALLATIONS**

# FRONTEND

npm create vite
npm install react-router-dom axios react-icons react-toastify redux react-redux redux-thunk @reduxjs/toolkit @tanstack/react-query
npm install --save @redux-devtools/extension

--- TAILWIND Entegrasyon ---
https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p (created tailwind.config.js)

tailwind.config.js (edited)

```javascript
/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.css(edited)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# BACKEND

npm init -y
npm install express body-parser cors jsonwebtoken dotenv bcryptjs mongoose
npm install --save-dev nodemon

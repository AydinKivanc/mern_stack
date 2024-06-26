import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import { authSuccess } from "../features/auth/authSlice"

const store = configureStore({
  // configureStore() fonksiyonu bir json dosyasi alir
  reducer: rootReducer,
})

// Uygulama başlatıldığında localStorage'dan kullanıcı bilgilerini al
const user = localStorage.getItem("user")
if (user) {
  store.dispatch(authSuccess(JSON.parse(user)))
}
export default store

/* 
! Redux DevTools 
configureStore fonksiyonu, Redux Toolkit tarafından sağlanan ve geliştirilmiş bir Redux store yapılandırma fonksiyonudur.
Bu fonksiyon, Redux DevTools ile birlikte otomatik olarak uyumludur ve ek bir yapılandırma gerektirmez.
*/

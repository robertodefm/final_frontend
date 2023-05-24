import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js'


import App from './App.vue'
import router from './router'
import { async } from '@firebase/util';

// import './logout.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// onAuthStateChanged(auth, async (user) => {
//     if (user){
//         loginCheck(user)
//     }else {

//     }
// })
app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'uno.css'
import VueForm from '@lljj/vue3-form-element'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use()

app.mount('#app')
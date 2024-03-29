import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ComponentLibrary } from 'design-system-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ComponentLibrary)

app.mount('#app')

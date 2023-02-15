import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.scss'

const app = createApp(App)

// Router
import router from './router';
app.use(router);
// end Router

//Pinia
import { createPinia } from 'pinia';
app.use(createPinia());
// end Pinia

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})
app.use(vuetify)
//  end Vuetify

//Material Desing Icons 
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

app.use(mdiVue, {
    icons: mdijs
})
//Material Desing Icons 

app.mount('#app')

import { createApp } from 'vue'
import 'babel-polyfill'
import { router } from './router'
import App from './App.vue'
import VueAgile from 'vue-agile'


const app = createApp(App);
app.use(router);
app.use(VueAgile);
app.mount('#container');
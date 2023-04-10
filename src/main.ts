import { createApp } from 'vue';
import globalRegister from './global';
import App from './App.vue';
import store from './store';
import router from './router';

import 'normalize.css';
import './assets/css/index.less';
const app = createApp(App);
app.use(store);
app.use(router);
app.use(globalRegister);
app.mount('#app');

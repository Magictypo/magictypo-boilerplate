import GlobalConfig from '@/config';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';

import './filters';
import './mixin';
// import './mock';

import App from './App.vue';
import router from './router';
import store from './store';

import './assets/scss/main.scss';

Vue.config.productionTip = false;
axios.defaults.baseURL = GlobalConfig.API_URL;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import api from "../public/api/api";
import router from './router'
import './assets/font.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

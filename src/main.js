import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import axios from 'axios';


Vue.config.productionTip = false

// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem("jwt");
//   config.headers["Authorization"] = `Bearer ${token}`;
//   return config;
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

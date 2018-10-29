import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';
import router from './router';
Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueResource);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
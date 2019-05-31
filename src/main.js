import 'font-awesome/css/font-awesome.css'


import Vue from 'vue';
import App from './App.vue';

import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'

import EventBus from './plugins/event-bus';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import VeuFlashMessage from 'vue-flash-message';




Vue.use(EventBus)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(Vueaxios, axios)
Vue.use(VeuFlashMessage)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

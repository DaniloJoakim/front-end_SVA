import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/event-bus';
import Vuelidate from 'vuelidate'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VeuFlashMessage from 'vue-flash-message'



Vue.use(EventBus)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(Vueaxios, axios)
Vue.use(VeuFlashMessage)

new Vue({
  render: h => h(App),
}).$mount('#app')

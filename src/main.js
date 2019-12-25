import Vue from 'vue';
import Axios from 'axios';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');

if (token) {
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

Vue.filter('dateFormat', (value) => {
  moment.locale('vi');
  const dateTime = moment(String(value));
  if (dateTime.isValid()) {
    return dateTime.format('LL');
  }
  return null;
});

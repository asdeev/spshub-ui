import Vue from 'vue';
// inject sass entry point for Parcel bundling
import '../public/styles/main.scss';
import App from './App';
import router from './router';
import store from './store/index';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

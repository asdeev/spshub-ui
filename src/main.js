// inject sass entry point for Parcel bundling
import '#/styles/main.scss';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

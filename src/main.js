// inject sass entry point for Parcel bundling
import '#/styles/main.scss';
// import Vue specific components
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import App from './App';
import router from './router';
import store from './store/index';

Vue.use(Vuetify, {
  iconfont: 'fa4',
  theme: {
    primary1: colors.green.darken2,
    secondary1: colors.teal.base,
    primary2: colors.purple.base,
    secondary2: colors.deepPurple.base,
    accent: colors.blue.darken1,
    info1: colors.lightBlue.darken1,
    info2: colors.lightGreen.darken1
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

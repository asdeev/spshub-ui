// inject sass entry point for Parcel bundling
import '#/styles/main.scss';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import Vue specific components
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import App from './App';
import router from './router';
import store from './store/index';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.amber.darken1,
    secondary: colors.deepPurple.darken2,
    accent: colors.green.base,
    error: colors.red.darken1,
    warning: colors.orange.darken1,
    info: colors.lightBlue.darken1,
    success: colors.indigo.darken1
  }
});

new Vue({
  el: '#app',
  components: {
    App
  },
  store,
  router,
  render: h => h(App)
});

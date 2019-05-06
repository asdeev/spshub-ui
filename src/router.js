import Vue from 'vue';
import Router from 'vue-router';
import HomeRoute from '~/pages/HomeRoute';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeRoute
    },
    {
      path: '/about',
      name: 'about'
    }
  ]
});

import Vue from 'vue';
import Router from 'vue-router';
import AboutRoute from '~/pages/AboutRoute';
import ContactUsRoute from '~/pages/ContactUsRoute';
import EventsRoute from '~/pages/EventsRoute';
import HomeRoute from '~/pages/HomeRoute';
import JoinSPSHubRoute from '~/pages/JoinSPSHubRoute';

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
      name: 'about',
      component: AboutRoute
    },
    {
      path: '/events',
      name: 'events',
      component: EventsRoute
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsRoute
    },
    {
      path: '/join-spshub',
      name: 'join-spshub',
      component: JoinSPSHubRoute
    }
  ]
});

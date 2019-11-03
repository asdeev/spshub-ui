import Vue from 'vue';
import Router from 'vue-router';
import AboutRoute from '~/pages/AboutRoute';
import ContactUsRoute from '~/pages/ContactUsRoute';
import EventsRoute from '~/pages/EventsRoute';
import HomeRoute from '~/pages/HomeRoute';
import JoinSPSHubRoute from '~/pages/JoinSPSHubRoute';
import MissionAndVisionRoute from '~/pages/MissionAndVisionRoute';
import TeamRoute from '~/pages/TeamRoute';
import Resources from '~/pages/ResourcesRoute';
import MemberProfileRoute from '~/pages/MemberProfileRoute';
import EventDetailsRoute from  '~/pages/EventDetailsRoute';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeRoute
    },
    {
      path: '/about',
      name: 'about',
      component: AboutRoute
    },
    {
      path: '/about/mission-and-vision',
      name: 'mission-and-vision',
      component: MissionAndVisionRoute
    },
    {
      path: '/about/team',
      name: 'team',
      component: TeamRoute
    },
    
    {
      path: '/EventsRoute',
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
    },
    {
      path: '/Resources',
      name: 'Resources',
      component: Resources

    },

    {
      path: '/MemberProfileRoute',
      name: 'MemberProfileRoute',
      component: MemberProfileRoute

    }, 
    {
      path: '/EventDetailsRoute',
      name: 'EventDetailsRoute',
      component: EventDetailsRoute
    }

  ]
});

export default {
  pages: [
    {
      id: 0,
      name: 'home',
      page: '/'
    },
    {
      id: 1,
      name: 'about',
      page: '/about',
      subpages: [
        {
          name: 'mission & vision',
          page: '/about/mission-and-vision'
        },
        {
          name: 'team',
          page: '/about/team'
        }
      ]
    },
    {
      id: 2,
      name: 'events',
      page: '/events'
    }
  ]
};

export default {
  header: {
    name: 'SPSHub',
    title: 'Somali Professionals & Students Hub',
    button1: 'Contact Us',
    button1Link: '/contact-us',
    button2: 'Join SPSHub Today!',
    button2Link: '/join-spshub',
    button3: 'Become a Mentor!',
    button3Link: '/become-mentor'
  },
  navigation: {
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
      }
      // {
      //   id: 2,
      //   name: 'events',
      //   page: '/events'
      // }
    ]
  },
  footer: {
    subheading: 'Get connected with us on social media!',
    name: 'SPSHub',
    links: [
      {
        id: 0,
        name: 'Facebook',
        link: 'facebook-link',
        icon: 'fab fa-facebook'
      },
      {
        id: 1,
        name: 'Twitter',
        link: 'twitter-link',
        icon: 'fab fa-twitter'
      },
      {
        id: 2,
        name: 'Instagram',
        link: 'instagram-link',
        icon: 'fab fa-instagram'
      },
      {
        id: 3,
        name: 'YouTube',
        link: 'youtube-link',
        icon: 'fab fa-youtube'
      }
    ]
  },
  home: {
    carousel: [
      { id: 0, src: './assets/images/education.jpg' },
      { id: 1, src: './assets/images/elephant-herd.jpg' },
      { id: 2, src: './assets/images/seattle-night.jpg' },
      { id: 3, src: './assets/images/baby-camel.jpg' }
     // { id: 4, src: './assets/images/school-children.jpg' }
    ]
  }
};

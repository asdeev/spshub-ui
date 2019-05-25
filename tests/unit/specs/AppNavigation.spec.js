import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import testMap from '../../testMap';
import navigation from './fixtures/navigation';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('AppNavigation', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(testMap.AppNavigation, {
      localVue,
      propsData: props
    });

    return {
      wrapper,
      toolbar: () => wrapper.find('.app-navigation__toolbar'),
      pages: () => wrapper.find('.app-navigation__pages'),
      linksArray: () => wrapper.findAll('.app-navigation__links'),
      sublinksMenuArray: () =>
        wrapper.findAll('.app-navigation__sublinks-menu'),
      sublinksArray: () => wrapper.findAll('.app-navigation__sublinks')
    };
  };

  beforeEach(() => {
    props = {
      navigation
    };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { toolbar, pages } = build();

    expect(toolbar().exists()).to.be.true;
    expect(pages().exists()).to.be.true;
  });

  // it('renders the navigation bar links correctly', () => {
  //   const { linksArray } = build();

  //   const home = linksArray().at(0);
  //   expect(home.text()).to.be.equal('home');

  //   const events = linksArray().at(1);
  //   expect(events.text()).to.be.equal('events');
  // });

  it('renders the navigation sublinks menu correctly', () => {
    const { sublinksMenuArray } = build();

    const about = sublinksMenuArray().at(0);
    expect(about.text()).to.be.equal('about');
  });

  it('renders the navigation sublinks correctly', () => {
    const { sublinksArray } = build();

    const missionAndVision = sublinksArray().at(0);
    expect(missionAndVision.text()).to.be.equal('Mission & Vision');

    const team = sublinksArray().at(1);
    expect(team.text()).to.be.equal('Team');
  });
});

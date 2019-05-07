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
      linksArray: () => wrapper.findAll('.app-navigation__links')
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

  it('renders the navigation bar links correctly', () => {
    const { linksArray } = build();

    const home = linksArray().at(0);
    expect(home.text()).to.be.equal('home');

    const events = linksArray().at(2);
    expect(events.text()).to.be.equal('events');
  });
});

import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import testMap from '../../testMap';
import navigation from './fixtures/navigation';

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(Vuetify);

describe('AppNavigation', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(testMap.App, {
      localVue,
      propsData: props
    });

    return {
      wrapper,
      toolbar: () => wrapper.find('.app-navigation__toolbar'),
      toolbarIcon: () => wrapper.find('app-navigation__toolbar-icon'),
      links: () => wrapper.find('app-navigation__links')
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

  it('renders the main components', () => {
    const { toolbar, toolbarIcon, links } = build();

    expect(toolbar().exists()).to.be.true;
    expect(toolbarIcon().exists()).to.be.true;

    expect(links().exists()).to.be.true;
  });
});

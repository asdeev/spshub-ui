import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import initialState from '~/store/state';
import testMap from '../../testMap';
import footerFixture from './fixtures/footer';
import navigationFixture from './fixtures/navigation';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);
localVue.use(Vuetify);

describe('App', () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(testMap.App, {
      localVue,
      store: new Vuex.Store({ state })
    });

    return {
      wrapper,
      appNavigation: () => wrapper.find(testMap.AppNavigation),
      appFooter: () => wrapper.find(testMap.AppFooter)
    };
  };

  beforeEach(() => {
    // reset the state variable with copy of our original state file
    state = { ...initialState };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { appNavigation, appFooter } = build();

    expect(appNavigation().exists()).to.be.true;
    expect(appFooter().exists()).to.be.true;
  });

  it('passes a bound data object to app components', () => {
    // set our local state with real sample data
    state.navigation = navigationFixture;
    state.footer = footerFixture;

    const { appNavigation, appFooter } = build();

    expect(appNavigation().vm.navigation).to.eql(state.navigation);
    expect(appFooter().vm.footer).to.eql(state.footer);
  });
});

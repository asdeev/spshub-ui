import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import initialState from '~/store/state';
import testMap from '../../testMap';
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
      appNavigation: () => wrapper.find(testMap.AppNavigation)
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
    const { appNavigation } = build();

    expect(appNavigation().exists()).to.be.true;
  });

  it('passes a bound navigation data object to app navigation component', () => {
    // set our local state with real sample data
    state.navigation = navigationFixture;

    const { appNavigation } = build();

    expect(appNavigation().vm.navigation).to.eql(state.navigation);
  });
});

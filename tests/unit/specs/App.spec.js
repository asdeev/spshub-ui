import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import testMap from '../../testMap';
// import initialState  from '~/store/state';
// import somethingFixture from './fixtures/something';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);
localVue.use(Vuetify);

describe('App', () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(testMap.App, {
      localVue,
      store: new Vuex.Store({ state }),
      data: () => ({
        pages: []
      })
    });

    return {
      wrapper,
      appNavigation: () => wrapper.find(testMap.AppNavigation)
    };
  };

  // beforeEach(() => {
  //   state = { ...initialState }
  // });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { appNavigation } = build();

    expect(appNavigation().exists()).to.be.true;
  });

  it('passes a bound pages array property to app navigation component', () => {
    const { wrapper, appNavigation } = build();

    // state.something = somethingFixture;

    wrapper.setData({
      pages: [
        {
          id: 0,
          name: 'home',
          page: '/'
        },
        {
          id: 1,
          name: 'about',
          page: '/about'
        }
      ]
    });

    expect(appNavigation().vm.pages).to.eql(wrapper.vm.pages);
  });
});

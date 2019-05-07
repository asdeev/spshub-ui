import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import initialState from '~/store/state';
import testMap from '../../testMap';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

// TODO: Fix failing tests
describe('ContactUsRoute', () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(testMap.ContactUsRoute, {
      localVue,
      state: new Vuex.Store({ state })
    });

    return {
      wrapper
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });
});

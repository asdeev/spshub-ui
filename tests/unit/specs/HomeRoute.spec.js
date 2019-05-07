import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import initialState from '~/store/state';
import testMap from '../../testMap';
import homeFixture from './fixtures/home';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

// TODO: Fix failing tests
describe('HomeRoute', () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(testMap.HomeRoute, {
      localVue,
      state: new Vuex.Store({ state })
    });

    return {
      wrapper,
      carousel: () => wrapper.find('.home-route__carousel'),
      imagesArray: () => wrapper.find('.home-route__images')
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { carousel } = build();

    expect(carousel().exists()).to.be.true;
  });

  it('renders the carousel images correctly', () => {
    state.home = homeFixture;

    const { imagesArray } = build();

    const image0 = imagesArray().at(0);
    const image3 = imagesArray().at(3);

    expect(image0.attributes().src).to.be.equal(
      './assets/images/education.jpg'
    );
    expect(image3.attributes().src).to.be.equal(
      './assets/images/baby-camel.jpg'
    );
  });
});

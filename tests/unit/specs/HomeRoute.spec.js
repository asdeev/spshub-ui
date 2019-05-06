import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import testMap from '../../testMap';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('HomeRoute', () => {
  const build = () => {
    const wrapper = shallowMount(testMap.HomeRoute, {
      localVue
    });

    return {
      wrapper,
      carousel: () => wrapper.find('.home-route__carousel')
    };
  };

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { carousel } = build();

    expect(carousel().exists()).to.be.true;
  });
});

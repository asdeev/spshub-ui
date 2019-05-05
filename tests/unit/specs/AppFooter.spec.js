import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import testMap from '../../testMap';
import footer from './fixtures/footer';

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(Vuetify);

describe('AppFooter', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(testMap.AppFooter, {
      localVue,
      propsData: props
    });

    return {
      wrapper,
      socialMedia: () => wrapper.find('.app-footer__social-media'),
      subheading: () => wrapper.find('.app-footer__subheading'),
      copyright: () => wrapper.find('.app-footer__copyright')
    };
  };

  beforeEach(() => {
    props = {
      footer
    };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main components', () => {
    const { socialMedia, subheading, copyright } = build();

    expect(socialMedia().exists()).to.be.true;
    expect(subheading().exists()).to.be.true;

    expect(copyright().exists()).to.be.true;
  });
});

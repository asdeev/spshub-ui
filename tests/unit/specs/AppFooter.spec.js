import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import testMap from '../../testMap';
import footer from './fixtures/footer';

const localVue = createLocalVue();
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
      copyright: () => wrapper.find('.app-footer__copyright'),
      linksArray: () => wrapper.findAll('.app-footer__links')
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

  it('renders the main child components', () => {
    const { socialMedia, subheading, copyright } = build();

    expect(socialMedia().exists()).to.be.true;

    expect(subheading().exists()).to.be.true;
    expect(subheading().text()).to.be.equal(
      'Get connected with us on social media!'
    );

    expect(copyright().exists()).to.be.true;
    expect(copyright().text()).to.be.equal(
      `SPSHub ${new Date().getFullYear()}`
    );
  });

  it('renders the social media links correctly', () => {
    const { linksArray } = build();

    const facebook = linksArray().at(0);
    const youtube = linksArray().at(3);

    expect(facebook.attributes().href).to.be.equal('facebook-link');
    expect(youtube.attributes().href).to.be.equal('youtube-link');
  });
});

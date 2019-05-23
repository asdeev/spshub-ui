import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import testMap from '../../testMap';
import header from './fixtures/header';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('AppHeader', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(testMap.AppHeader, {
      localVue,
      propsData: props
    });

    return {
      wrapper,
      title: () => wrapper.find('.app-header__title'),
      contactButton: () => wrapper.find('.app-header__contact-button'),
      joinButton: () => wrapper.find('.app-header__join-button')
    };
  };

  beforeEach(() => {
    props = {
      header
    };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { title, contactButton, joinButton } = build();

    expect(title().exists()).to.be.true;
    expect(title().text()).to.be.equal(props.header.title);

    expect(contactButton().exists()).to.be.true;
    expect(contactButton().text()).to.be.equal(props.header.button1);

    expect(joinButton().exists()).to.be.true;
    expect(joinButton().text()).to.be.equal(props.header.button2);
  });
});

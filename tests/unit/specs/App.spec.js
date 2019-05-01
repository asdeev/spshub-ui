import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import testMap from '../../testMap';

describe('App', () => {
  const build = () => {
    const wrapper = shallowMount(testMap.App);

    return {
      wrapper,
      appNavigation: () => wrapper.find(testMap.AppNavigation)
    };
  };

  it('renders the component', () => {
    const { wrapper } = build();

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('renders the main child components', () => {
    const { appNavigation } = build();

    expect(appNavigation().exists()).to.be.true;
  });
});

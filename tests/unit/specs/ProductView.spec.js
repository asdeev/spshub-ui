import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import testMap from '~/tests/testMap.js';

describe('ProductView', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(testMap.ProductView);

    expect(wrapper.html()).to.matchSnapshot();
  });
});

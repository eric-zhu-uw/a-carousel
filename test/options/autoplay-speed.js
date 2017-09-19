import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Autoplay Speed Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel > <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.autoplaySpeed).to.equal(3000);
    });

    it('autoplaySpeed={1}', () => {
      const component = (<Carousel autoplaySpeed={1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.autoplaySpeed).to.equal(1000);
    });

    it('autoplaySpeed={0}', () => {
      const component = (<Carousel autoplaySpeed={0}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('autoplaySpeed={-1}', () => {
      const component = (<Carousel autoplaySpeed={-1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('autoplaySpeed={invalid entry}', () => {
      const component = (<Carousel autoplaySpeed='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    // not sure how to unit test effectively
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Initial Slide Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel > <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div></Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(wrapper.state('slide')).to.equal(0);
    });

    it('initialSlide={1}', () => {
      const component = (<Carousel initialSlide={0}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div></Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(wrapper.state('slide')).to.equal(0);
    });

    it('initialSlide={4}', () => {
      const component = (<Carousel initialSlide={4}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div></Carousel>);
      expect(() => { shallow(initialSlide) }).to.throw(Error);
    });

    it('initialSlide={-1}', () => {
      const component = (<Carousel initialSlide={-1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div></Carousel>);
      expect(() => { shallow(initialSlide) }).to.throw(Error);
    });

    it('initialSlide={1.4}', () => {
      const component = (<Carousel initialSlide={1.4}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div></Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('autoplaySpeed={invalid entry}', () => {
      const component = (<Carousel initialSlide='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div></Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    //not sure how to effectively unit test
  });
});

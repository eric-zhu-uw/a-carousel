import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Dots option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dots).to.be.true;
    });

    it('arrow={true}', () => {
      const component = (<Carousel dots={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dots).to.be.true;
    });

    it('arrow={false}', () => {
      const component = (<Carousel dots={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dots).to.be.false;
    });

    it('arrow={invalid entry}', () => {
      const component = (<Carousel dots='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Dots', () => {
      it('Hide dots if dots={false}', () => {
        const component = (<Carousel dots={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.dotsCarousel').hasClass('hideElement')).to.be.true;
      });

      it('Show dots if dots={true}', () => {
        const component = (<Carousel dots={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.dotsCarousel').hasClass('hideElement')).to.be.false;
      });
    });
  });
});

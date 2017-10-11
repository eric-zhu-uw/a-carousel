import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Dots Style Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleBackward).to.equal('default');
    });

    it("dotsStyle='default'", () => {
      const component = (<Carousel dotsStyle='default'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dotsStyle).to.equal('default');
    });

    it("dotsStyle='custom-class-name'", () => {
      const component = (<Carousel dotsStyle='custom-class-name'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dotsStyle).to.equal('custom-class-name');
    });

    it('dotsStyle={1}', () => {
      const component = (<Carousel dotsStyle={1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Dots Children Style Class', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        // expect(wrapper.find('.dotsChildren')[0].hasClass('dotsChildrenStyle')).to.be.true;
      });

      it("dotsStyle='default'", () => {
        const component = (<Carousel dotsStyle='default'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.dotsChildren').node.hasClass('dotsChildrenStyle')).to.be.true;
      });

      it("dotsStyle='custom-class-name'", () => {
        const component = (<Carousel dotsStyle='custom-class-name'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        // expect(wrapper.find('.dotsChildren')[0].hasClass('custom-class-name')).to.be.true;
      });
    });
  });
});

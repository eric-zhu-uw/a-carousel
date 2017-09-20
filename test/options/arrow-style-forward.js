import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Arrow Style Forward Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleForward).to.equal('default');
    });

    it("arrowStyleForward='default'", () => {
      const component = (<Carousel arrowStyleForward='default'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleForward).to.equal('default');
    });

    it("arrowStyleForward='custom-class-name'", () => {
      const component = (<Carousel arrowStyleForward='custom-class-name'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleForward).to.equal('custom-class-name');
    });

    it('arrowStyleForward={1}', () => {
      const component = (<Carousel arrowStyleForward={1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Forward Button Style Class', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('forwardButtonStyle')).to.be.true;
      });

      it("arrowStyleForward='default'", () => {
        const component = (<Carousel arrowStyleForward='default'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('forwardButtonStyle')).to.be.true;
      });

      it("arrowStyleForward='custom-class-name'", () => {
        const component = (<Carousel arrowStyleForward='custom-class-name'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('custom-class-name')).to.be.true;
      });
    });
  });
});

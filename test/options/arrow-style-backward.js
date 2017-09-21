import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Arrow Style Backward Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleBackward).to.equal('default');
    });

    it("arrowStyleBackward='default'", () => {
      const component = (<Carousel arrowStyleBackward='default'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleBackward).to.equal('default');
    });

    it("arrowStyleBackward='custom-class-name'", () => {
      const component = (<Carousel arrowStyleBackward='custom-class-name'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowStyleBackward).to.equal('custom-class-name');
    });

    it('arrowStyleBackward={1}', () => {
      const component = (<Carousel arrowStyleBackward={1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Back Button Style Class', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('backwardButtonStyle')).to.be.true;
      });

      it("arrowStyleBackward='default'", () => {
        const component = (<Carousel arrowStyleBackward='default'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('backwardButtonStyle')).to.be.true;
      });

      it("arrowStyleBackward='custom-class-name'", () => {
        const component = (<Carousel arrowStyleBackward='custom-class-name'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('custom-class-name')).to.be.true;
      });
    });
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Speed Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.speed).to.equal(0.3);
    });

    it('speed={1}', () => {
      const component = (<Carousel speed={1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.speed).to.equal(1);
    });

    it('speed={-0.1}', () => {
      const component = (<Carousel speed={-0.1}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('speed={0}', () => {
      const component = (<Carousel speed={0}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('arrow={invalid entry}', () => {
      const component = (<Carousel arrow='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Set Transition-Duration CSS Property', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const multipleContainer = wrapper.find('.multipleContainerCarousel').get(0).props.style;
        expect(multipleContainer).to.have.property('transitionDuration', '0.3s');
      })

      it('speed={0.5}', () => {
        const component = (<Carousel speed={0.5}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const multipleContainer = wrapper.find('.multipleContainerCarousel').get(0).props.style;
        expect(multipleContainer).to.have.property('transitionDuration', '0.5s');
      });
    });
  });
});

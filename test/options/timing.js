import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Timing Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.timing).to.equal('ease-in');
    });

    it('timing=\'linear\'', () => {
      const component = (<Carousel timing='linear'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.timing).to.equal('linear');
    });

    it('timing=\'cubic-bezier(0, 0.12, 0.49, 1.00)\'', () => {
      const component = (<Carousel timing='cubic-bezier(0, 0.12, 0.49, 1.00)'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.timing).to.equal('cubic-bezier(0, 0.12, 0.49, 1.00)');
    });

    it('timing=\'cubic-bezier(  0.0 ,  0.33333  , 1  , 1.00)\'', () => {
      const component = (<Carousel timing='cubic-bezier(  0.0 ,  0.33333  , 1  , 1.00)'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.timing).to.equal('cubic-bezier(  0.0 ,  0.33333  , 1  , 1.00)');
    });

    it('timing=\'cubic-bezier(-1, 0.33333, 1, 1.00)\'', () => {
      const component = (<Carousel timing='cubic-bezier(-1 , 0.33333, 1, 1.00)'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('timing=\'cubic-bezier(0, 0.33333, 1.1, 1.00)\'', () => {
      const component = (<Carousel timing='cubic-bezier(0, 0.33333, 1.1, 1.00)'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('timing=\'invalid-string\'', () => {
      const component = (<Carousel timing='invalid-string'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });

    it('arrow={invalid entry}', () => {
      const component = (<Carousel timing={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Set Transition-Duration CSS Property', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const multipleContainer = wrapper.find('.multipleContainerCarousel').get(0).props.style;
        expect(multipleContainer).to.have.property('transitionTimingFunction', 'ease-in');
      })

      it('timing=\'cubic-bezier(0, 0.12, 0.49, 1.00)\'', () => {
        const component = (<Carousel timing='cubic-bezier(0, 0.12, 0.49, 1.00)'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const multipleContainer = wrapper.find('.multipleContainerCarousel').get(0).props.style;
        expect(multipleContainer).to.have.property('transitionTimingFunction', 'cubic-bezier(0, 0.12, 0.49, 1.00)');
      });
    });
  });
});

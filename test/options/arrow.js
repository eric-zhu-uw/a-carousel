import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Arrow Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrow).to.be.true;
    });

    it('arrow={true}', () => {
      const component = (<Carousel arrow={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrow).to.be.true;
    });

    it('arrow={false}', () => {
      const component = (<Carousel arrow={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrow).to.be.false;
    });

    it('arrow={invalid entry}', () => {
      const component = (<Carousel arrow='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Back Button', () => {
      it('Hide back button if arrow={false}', () => {
        const component = (<Carousel arrow={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('hideElement')).to.be.true;
      });

      it('Show back button if arrow={true}', () => {
        const component = (<Carousel arrow={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('hideElement')).to.be.false;
      });
    });

    describe('Forward Button', () => {
      it('Hide forward button if arrow={false}', () => {
        const component = (<Carousel arrow={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('hideElement')).to.be.true;
      });

      it('Show forward button if arrow={true}', () => {
        const component = (<Carousel arrow={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('hideElement')).to.be.false;
      });
    });
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Dots Click option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dotsClick).to.be.true;
    });

    it('dotsClick={true}', () => {
      const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dotsClick).to.be.true;
    });

    it('dotsClick={false}', () => {
      const component = (<Carousel dotsClick={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.dotsClick).to.be.false;
    });

    it('dotsClick={invalid entry}', () => {
      const component = (<Carousel dots='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Dots Click Disabled', () => {
      it('Make dots nav. unclickable dotsClick={false}', () => {
        const component = (<Carousel dotsClick={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(2).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide);
      });
    });

    describe('Dots Click Same', () => {
      it('slide 1 to 1', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(0).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide);
      });
    })

    describe('Dots Click Forward', () => {
      it('slide 1 to 3', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(2).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide + 2);
      });

      it('slide 1 to 2', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(1).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide + 1);
      });

      it('slide 2 to 3', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        wrapper.find('.dotsChildren').at(1).simulate('click');
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(2).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide + 1);
      });
    });

    describe('Dots Click Backward', () => {
      it('slide 3 to 1', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        wrapper.find('.dotsChildren').at(2).simulate('click');
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(0).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide - 2);
      });

      it('slide 2 to 1', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        wrapper.find('.dotsChildren').at(1).simulate('click');
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(0).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide - 1);
      });

      it('slide 3 to 2', () => {
        const component = (<Carousel dotsClick={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> <div> <h1> Hello 3 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        wrapper.find('.dotsChildren').at(2).simulate('click');
        const prevSlide = wrapper.state('slide');
        wrapper.find('.dotsChildren').at(1).simulate('click');
        expect(wrapper.state('slide')).to.equal(prevSlide - 1);
      });
    });
  });
});

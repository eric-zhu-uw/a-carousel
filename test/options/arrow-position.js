import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Arrow Position Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowPosition).to.equal('outside');
    });

    it("arrowPosition='below'", () => {
      const component = (<Carousel arrowPosition='below'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.arrowPosition).to.equal('below');
    });

    it("arrowPosition='invalid-string'", () => {
      const component = (<Carousel arrowPosition='invalid-string'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Add Correct Backward Button Class', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('backwardButton-outside')).to.be.true;
      })

      it("arrowPosition='inside'", () => {
        const component = (<Carousel arrowPosition='inside'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('backwardButton-inside')).to.be.true;
      });

      it("arrowPosition='bottom'", () => {
        const component = (<Carousel arrowPosition='bottom'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('backwardButton-bottom')).to.be.true;
      });

      it("arrowPosition='below'", () => {
        const component = (<Carousel arrowPosition='below'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.backwardButtonCarousel').hasClass('backwardButton-below')).to.be.true;
      });
    });

    describe('Add Correct Forward Button Class', () => {
      it('default option; no props', () => {
        const component = (<Carousel> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('forwardButton-outside')).to.be.true;
      })

      it("arrowPosition='inside'", () => {
        const component = (<Carousel arrowPosition='inside'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('forwardButton-inside')).to.be.true;
      });

      it("arrowPosition='bottom'", () => {
        const component = (<Carousel arrowPosition='bottom'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('forwardButton-bottom')).to.be.true;
      });

      it("arrowPosition='below'", () => {
        const component = (<Carousel arrowPosition='below'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.find('.forwardButtonCarousel').hasClass('forwardButton-below')).to.be.true;
      });
    });
  });
});

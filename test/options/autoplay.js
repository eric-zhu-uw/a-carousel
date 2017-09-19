import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../../src/index.js';

describe('Autoplay Option Testing', () => {
  describe('Props', () => {
    it('default option; no props', () => {
      const component = (<Carousel > <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.autoplay).to.be.false;
    });

    it('autoplay={true}', () => {
      const component = (<Carousel autoplay={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.autoplay).to.be.true;
    });

    it('autoplay={false}', () => {
      const component = (<Carousel autoplay={false}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      const wrapper = shallow(component);
      const instance = wrapper.instance();
      expect(instance.autoplay).to.be.false;
    });

    it('arrow={invalid entry}', () => {
      const component = (<Carousel autoplay='invalid-string-entry'> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
      expect(() => { shallow(component) }).to.throw(Error);
    });
  });

  describe('Functionality', () => {
    describe('Autoplay Off', () => {
      const component = (<Carousel autoplay={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);

    })

    describe('Autoplay On', () => {
      it('default autoplay', () => {
        const component = (<Carousel autoplay={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.instance().autoplay());
      });

      it('Show back button if arrow={true}', () => {
        const component = (<Carousel arrow={true}> <div> <h1> Hello 1 </h1> </div> <div> <h1> Hello 2 </h1> </div> </Carousel>);
        const wrapper = shallow(component);
        expect(wrapper.instance().autoplay());
      });
    });
  });
});

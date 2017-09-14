import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Carousel from '../src/index.js';

describe('Client Testing', () => {
  describe('No Children', () => {
    it('<Carousel />', () => {
      expect(() => { shallow(<Carousel />) }).to.throw(Error);
    });

    it('<Carousel></Carousel>', () => {
      expect(() => { shallow(<Carousel></Carousel>) }).to.throw(Error);
    });
  });
});

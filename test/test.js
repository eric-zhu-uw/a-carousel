import React from 'react';
import { expect } from 'chai';
import assert from 'assert';

import Carousel from '../src/index.js';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Carousel', () => {
  describe('Component Renders', () => {
    it('should return something', (done) => {
      console.log('sup');
      <Carousel />
      done(new Error('fked up'));
    });
  })
});

describe('Some functionality here', () => {
  it('random test');
})

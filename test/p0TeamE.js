/* global p0TeamE, describe, it, expect, should */

describe('p0TeamE()', function () {
  'use strict';

  it('exists', function () {
    expect(p0TeamE).to.be.a('function');

  });
  // it('Returns a cubed array', function () {
  //   expect(p0TeamE([2,4,3,1,6])).to.eql([8,64,27,1,216]);
  //
  // });
  // it('Returns a modulo 3 array', function () {
  //   expect(p0TeamE([8,64,27,1,216])).to.eql([2,1,0,1,0]);
  //
  // });
  // it('returns a modulo first array', function () {
  //   expect(p0TeamE([2,1,0,1,0])).to.eql([0,1,0,1,0]);
  //
  // });
  // it('returns a decrement_if_less_than_first array', function () {
  //   expect(p0TeamE([0,1,0,1,0])).to.eql([0,1,0,1,0]);
  //
  // });
  // it('returns a running total array', function () {
  //   expect(p0TeamE([0,1,0,1,0])).to.eql([0,1,1,2,2]);
  //
  // });
  // it('returns a diff array', function () {
  //   expect(p0TeamE([0,1,1,2,2])).to.eql([0,1,0,1,0]);
  //
  // });
  // it('returns a fact array', function () {
  //   expect(p0TeamE([0,1,0,1,0])).to.eql([1,1,1,1,1]);
  //
  // });
  // it('returns a xor21 array', function () {
  //   expect(p0TeamE([1,1,1,1,1])).to.eql([20,20,20,20,20]);
  //
  // });
  // it('returns a collatz array', function () {
  //   expect(p0TeamE([20,20,20,20,20])).to.eql([10,10,10,10,10]);
  //
  // });
  // it('returns a fizzbuzz array', function () {
  //   expect(p0TeamE([10,10,10,10,10])).to.eql([5,5,5,5,5]);
  //
  // });
  it('Returns an array after calculations', function () {
    expect(p0TeamE([2,4,3,1,6])).to.eql([5,5,5,5,5]);

  });
  // Add more assertions here
});

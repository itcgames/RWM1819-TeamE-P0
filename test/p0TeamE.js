/* global p0TeamE, describe, it, expect, should */

describe('p0TeamE()', function () {
  'use strict';

  it('exists', function () {
    expect(p0TeamE).to.be.a('function');

  });
  // it('Returns a cubed array', function () {
  //   expect(p0TeamE([6,5,4,3,2,1,7,8,9])).to.eql([216,125,64,27,8,1,343,512,729]);
  //
  // });
  // it('cubes an array then returns the result of modulo 3', function () {
  //   expect(p0TeamE([216,125,64,27,8,1,343,512,729])).to.eql([0,2,1,0,2,1,1,2,0]);
  //
  // });
  // it('cubes an array gets the result of modulo 3 then returns the result Modulo_First', function () {
  //   expect(p0TeamE([0,2,1,0,2,1,1,2,0])).to.eql([0,2,1,0,2,1,1,2,0]);
  //
  // });
  // it('cubes an array gets the result of modulo 3 then gets the result of Modulo_First then returns the result of decrement_if_less_than_first', function () {
  //   expect(p0TeamE([0,2,1,0,2,1,1,2,0])).to.eql([0,2,1,0,2,1,1,2,0]);
  //
  // });
  // it('cubes an array gets the result of modulo 3 then gets the result of Modulo_First then gets the result of decrement_if_less_than_first then returns the result of running_total', function () {
  //   expect(p0TeamE([0,2,1,0,2,1,1,2,0])).to.eql([0,2,3,0,5,6,7,9,0]);
  //
  // });
  it('Returns an array after calculations', function () {
    expect(p0TeamE([6,5,4,3,2,1,7,8,9])).to.eql([0,2,3,3,5,6,7,9,9]);

  });
  // Add more assertions here
});

/*! p0TeamE v0.0.0 - MIT license */
'use strict';

var p0TeamE = function (x) {

  //Return the array cubed
  var cubeResultArray = [];

  for(var i = 0; i<x.length; i++)
  {
    cubeResultArray.push(Cube(x[i]));
  }
//  return cubeResultArray;

  //return the array modulo 3
  var modulo_3ResultArray = [];

  for(var i = 0; i<x.length; i++)
  {
    modulo_3ResultArray.push(modulo_3(cubeResultArray[i]));
  }
  //return modulo_3ResultArray

  //return the array Modulo_First
  var Modulo_FirstResultArray = Modulo_First(modulo_3ResultArray);
  //return Modulo_FirstResultArray;

  //return the array decrement_if_less_than_first
  var DecrementResultArray = decrement_if_less_than_first(Modulo_FirstResultArray);
//  return DecrementResultArray;

  //Return the array running_total
  total = 0;
  input = 0;
  var runningTotalResultArray = [];

  for(var i = 0; i<x.length; i++)
  {
    runningTotalResultArray.push(running_total(DecrementResultArray[i]));
  }
  return runningTotalResultArray;

}

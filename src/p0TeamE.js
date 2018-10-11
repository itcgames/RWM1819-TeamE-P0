/*! p0TeamE v0.0.0 - MIT license */
'use strict';

var p0TeamE = function (x) {

  //Return the array cubed
  var cubeResultArray = [];

  for(var i = 0; i<x.length; i++)
  {
    cubeResultArray.push(Cube(x[i]));
  }
  console.log("Cube array: " + cubeResultArray);
//  return cubeResultArray;

  //return the array modulo 3
  var modulo_3ResultArray = [];

  for(var i = 0; i<x.length; i++)
  {
    modulo_3ResultArray.push(modulo_3(cubeResultArray[i]));
  }
  console.log("Modulo 3 array: " + modulo_3ResultArray);
  //return modulo_3ResultArray

  //return the array Modulo_First
  var Modulo_FirstResultArray = Modulo_First(modulo_3ResultArray);
  console.log("modulo first array: " + Modulo_FirstResultArray);
  //return Modulo_FirstResultArray;

  //return the array decrement_if_less_than_first
  var DecrementResultArray = decrement_if_less_than_first(Modulo_FirstResultArray);
  console.log("decrement array: " + DecrementResultArray);
//  return DecrementResultArray;
  //Return the array running_total
  total = 0;
  input = 0;
  var runningTotalResultArray = [];

  for(var i = 0; i<x.length; i++)
  {
    runningTotalResultArray.push(running_total(DecrementResultArray[i]));
  }
  console.log("running total array: " + runningTotalResultArray);
  //return runningTotalResultArray;

  //difference of self and previous number
 var diffResultArray = diff(runningTotalResultArray);
 console.log("Diff array: " + diffResultArray);
// return diffResultArray;

 //factorial
 var factResultArray = [];

 for (var i = 0; i<x.length; i++)
 {
   factResultArray.push(fact(diffResultArray[i]));
 }
 console.log("Fact array: " + factResultArray);
 //return factResultArray;

 //xor21
 var xor21ResultArray = [];

 for (var i = 0; i<x.length; i++)
 {
   xor21ResultArray.push(xor_21(factResultArray[i]));
 }
 console.log("Xor21 array: " + xor21ResultArray);
 //return xor21ResultArray;

//collatz
var collatzResultArray = [];

for (var i = 0; i<x.length; i++)
{
  collatzResultArray.push(collatz(xor21ResultArray[i]));
}
console.log("Collatz array: " + collatzResultArray);
//return collatzResultArray;

//fizzbuzz
var fizzbuzzResultArray = [];

for (var i = 0; i<x.length; i++)
{
  fizzbuzzResultArray.push(fizzbuzz(collatzResultArray[i]));
}
console.log("fizzbuzz array: " + fizzbuzzResultArray);
return fizzbuzzResultArray;
}

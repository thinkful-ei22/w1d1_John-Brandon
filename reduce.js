'use strict';

const testString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let decoded = '';
let testArray = testString.split(' ');

const reducer  = (currentValue, accumulator) => {
    if (accumulator.length === 3){
      decoded+= ' ';
    } else {
      decoded += accumulator.charAt(accumulator.length-1).toUpperCase(); 
    }
  };

testArray.reduce(reducer, '');
console.log(decoded);









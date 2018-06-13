'use strict';

const testString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let i = 1;
let decoded = '';
let testArray = testString.split(' ');
/*
array [noggin, oreo, the, moon, time, tele, steed, his, tent, apollo, her, lives, though, shoo, tofu, budapest]
*/
//console.log(testArray);

const reducer  = (currentValue, accumulator) => {

    //console.log (i + ': ' + accumulator);
    //console.log (i + ': ' + accumulator.length);
    //console.log ('Current: ' + decoded);
    if (accumulator.length === 3){
      decoded+= ' ';
    }
  
    else {
      decoded += accumulator.charAt(accumulator.length-1).toUpperCase(); 
    }
  //console.log(decoded);
  };

testArray.reduce(reducer, '');
console.log(decoded);

/*
array1[0]: noggin => 'N'
array1[1]: oreo => O
array1[2]: the = ' '
array1[3]: moon = N
array1[4]: time = E
array1[5]: tele = E
array1[6]: steed = D
array1[7]: his = ' '
array1[8]: tent = T
array1[9]: apollo = O
array1[10]: her = ' '
array1[11]: lives = S
array1[12]: though = H
array1[13]: shoo = O
array1[14]: tofu = U
array1[15]: budapest = T
*/





  








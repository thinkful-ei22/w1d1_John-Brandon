let numbers = [1,2,3,4,5];


function average(numbers) {
  // your code goes here
  let total = 0;
  numbers.forEach(function(e){
  	total += e;
  });
  let average = total / numbers.length;
  return average;
}

console.log(`The average is ${average(numbers)}`);


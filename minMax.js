//Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop

let numArray = [1,2,3,4,5,6];

let max = function(numbers){
	let max = numbers[0];
	for(num of numbers){
		num > max ? max=num : 0
	}
	return max;
}

console.log(max(numArray));


const min = function(numbers){
	let min = numbers[0];
	for(num of numbers){
		num < max ? min=num : 0
	}
	return min;
	//return smallest number in the array
}

console.log(min(numArray));

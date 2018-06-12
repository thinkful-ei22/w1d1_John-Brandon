//Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop

let numArray = [1,2,3,4,5,6];



let max = function(numbers){
	let i = 0;
	let max = numbers[0];
	while (i < numbers.length){
		if(numbers[i] > max){
			max = numbers[i];
		}
		i++;
	}
	//return largest number in the array
	return max;
}

console.log(max(numArray));




const min = function(numbers){
	let i = 0;
	let min = numbers[0];

	while (i < numbers.length) {
		if (numbers[i] < min){
			min = numbers[i];
		}
		i++;
	}
	return min;
	//return smallest number in the array
}

console.log(min(numArray));

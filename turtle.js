
//1. filter function
/*Use the filter method to remove any items where the turtle moves backwards 
or to the right (i.e. where either the first of second number is an item is negative).
*/
const movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


const result = function(movement){
	let newArray = [];
	function isZeroOrAbove(num){
		return num >=0;
	}
	movement.filter(function(tuple){
		if(tuple.every(isZeroOrAbove)){
			newArray.push(tuple);
		};
	});
	return newArray;
}
console.log(`These are the times the turtle moves in a positive direction, according to the Cartesian coordinate plane system:`);
console.log(result(movement));

//2. forEach function
//Use the forEach method to log out how many steps the turtle took in each case.
const totalSteps = function(movement){
	let answer = [];
	function addElements(arr){
		let total = 0;
		for(i of arr){
			total += i;
		}
		return total;
	}
	movement.forEach(move => 
		answer.push(addElements(move))
	);
	return answer;
}
console.log(`The turtle takes this many steps in each case: `);
console.log(totalSteps(movement) + '\n');


//3. map
/*Use the map method to create a new array containing how many steps the
turtle makes in total with each movement (i.e. the first and second number added together).
*/
const map = function(movement){
	const combine = function(movementPair){
		//copy-and-pasted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
		const reducer = (accumulator, currentValue) => accumulator + currentValue;	
		return(movementPair.reduce(reducer));
	}
	let newArray = movement.map(tuple => 
		combine(tuple)
	);
	return newArray;
}
console.log(`Each time the turtle moves, it moves a total of these many steps (as an array):`);
console.log(map(movement));

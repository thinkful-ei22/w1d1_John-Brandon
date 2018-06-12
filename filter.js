// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

// => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:


//BONUS MATERIAL:
function filter(arr, fn) {
	let array = [];
	arr.forEach(e => fn(e) ? array.push(e) : 0);
	return array;
}

console.log(filteredNames); 


function reduction(input){
	let words = input.split(' ');
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	//Push the upper-cased last letter of each word to the product array if it's not 3 in length
	const product = words.map(word => 
		word.length === 3 ? ' ' : word[word.length-1].toUpperCase()
	);		
	return(product.reduce(reducer));
}

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(reduction(input));


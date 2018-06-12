
function reduction(input){
	return input.split(' ').reduce((accumulator, word) => 
		accumulator + (word.length === 3 ? ' ' : word[word.length-1].toUpperCase()), ''
	);	
}

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(reduction(input));


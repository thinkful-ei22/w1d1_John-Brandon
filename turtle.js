const movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];



const result = function(movement){
	let newArray = [];
	movement.filter(function(move){
		for(i in move){
			if(move[i] >=0 && move[i+1] >=0 ){
				newArray.push(move);
				i++;
			}
		}
	})
	return newArray;
}

console.log(result(movement));


// let filter = movement.filter(function(move){
// 	move.forEach(function(dir){
		
// 	})
// });

// const result = movement.filter(move =>  
// 	move.forEach(function(index){ index >= 0})
// 	move.forEach(function(step){
// 		if(step >= 0){
// 			return true;
// 		};
// 	})
// );
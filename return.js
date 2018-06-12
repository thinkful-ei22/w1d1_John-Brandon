function hazardWarningCreator (typeOfWarning){
    let warningCounter = 0;

    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if (warningCounter ===1){
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        }
        else{
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
        }
    };

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const lavaWarning = hazardWarningCreator('A volcano erupted close by');
const floodWarning = hazardWarningCreator('The water level is too high');

rocksWarning('Main St and Pacific Ave');

rocksWarning('Centinela Ave and Olympic Blvd');

lavaWarning('Main St and Pacific Ave');

lavaWarning('Centinela Ave and Olympic Blvd');

floodWarning('Main St and Pacific Ave');

floodWarning('Centinela Ave and Olympic Blvd');
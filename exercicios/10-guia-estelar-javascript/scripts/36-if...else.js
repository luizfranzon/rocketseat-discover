//If.. else

let actualTemperature = 36

let highTemprature = actualTemperature >= 37.5;
let mediumTemperature = actualTemperature < 37.5 && actualTemperature >= 36.8;
let noFever = actualTemperature < 36.8;

if (highTemprature) {
    console.log("febre alta");
} else if (mediumTemperature) {
    console.log("febre moderada");
} else if (noFever){
    console.log("sem febre")
}

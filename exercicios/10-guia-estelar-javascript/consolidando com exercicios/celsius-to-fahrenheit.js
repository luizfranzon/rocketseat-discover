//Celsius to Fahrenheit

function transformDegree(degree) {
    
    const celsiusExist = degree.toUpperCase().includes("C");
    const fahrenheitExist = degree.toUpperCase().includes("F");

    if (celsiusExist === true && fahrenheitExist === true) {
        return "Só pode ter um símbolo de grau!";
    } else if (celsiusExist === false && fahrenheitExist === false) {
        return "Você deve especificar o sistema de graus!";

        //Calculo
    } else if (celsiusExist === true && fahrenheitExist === false) {
        let celsius = parseFloat(degree.replace("C", ""));
        return (
            celsius +
            "C são " +
            (calcFahrenheit = (celsius * 9) / 5 + 32).toFixed(2) +
            "F"
        );
    } else if (celsiusExist === false && fahrenheitExist === true) {
        let fahrenheit = parseFloat(degree.replace("F", ""));
        return (
            fahrenheit +
            "F são " +
            (calcCelsius = ((fahrenheit - 32) * 5) / 9).toFixed(2) +
            "C"
        );
    }
}

console.log(transformDegree("800"));
console.log(transformDegree("10C"));

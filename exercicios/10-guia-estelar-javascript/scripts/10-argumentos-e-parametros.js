//Função anonima ou 
// function expression

const sum = function(number1, number2) {
    number1 = number1 ? number1 : 0
    number2 = number2 ? number2 : 0
    console.log(number1 + number2)
}

sum(10, 30)
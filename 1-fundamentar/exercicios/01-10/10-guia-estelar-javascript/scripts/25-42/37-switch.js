//Switch

// let expression = 'a'

// switch (expression) {
//     case 'a':
//         console.log('a')
//         break
//     case 'b':
//         console.log('b')
//         break
//     default:
//         console.log("default")
// }

//Calculadora em Switch

function calculate(number1, operator, number2) {
    let result;
switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        result = "não implementado";
        break;
}
    return result;
}

console.log(calculate(1, "+", 3));

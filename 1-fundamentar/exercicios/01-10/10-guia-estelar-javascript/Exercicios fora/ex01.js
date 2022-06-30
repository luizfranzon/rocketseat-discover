// 10 JavaScript code challenges for beginners
// Source: https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/

//--------------------- 1. Print all even numbers from 0 – 10

for (let number = 0; number < 11; number++) {
    // console.log(number)
}

//--------------------- 2. Print a table containing multiplication tables

for (let tabuada = 1; tabuada < 11; tabuada++) {
    // console.log(`Tabuada do ${tabuada}`)
    for (let multiplicador = 1; multiplicador < 11; multiplicador++) {
        resultado = tabuada * multiplicador;
        // console.log(resultado)
    }
}

//--------------------- 3. Create a length converter function

function kmToMile(km) {
    let oneMile = 0.621371
    let result = Math.round(km * oneMile)
    console.log(`${km} é igual a aproximadamente ${result} milha(s)`)
}

// kmToMile(50)

//--------------------- 4. Calculate the sum of numbers within an array

let numberes1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30];

function sumArray(arrayName) {
    let result = 0;
    for (let arrayIndex = arrayName.length - 1; arrayIndex > -1; arrayIndex--) {
        result += arrayName[arrayIndex];
    }
    return `O Resultado da soma dos itens da Array é: ${result}`;
}

// console.log(sumArray(numberes1));

//--------------------- 5. Create a function that reverses an array

let numberes3 = [1,2,3,4,5,6,7,8,9,10,30]
let dale = []

function reverseArray (arrayName) {
    for (let arrayIndex = arrayName.length -1; arrayIndex > -1; arrayIndex--) {
        dale.push(arrayName[arrayIndex])
    }
    return dale
}

// console.log(reverseArray(numberes3))

// --------------------- 6. Sort an array from lowest to highest

let arraySorted = [50,40,10,14,293,1000,6745,329,1239,1,0,23]
let lowestToHighest = arraySorted.sort(
    (a, b) => a - b
);
// console.log(arraySorted)

// --------------------- 7. Create a function that filters out negative numbers

// --------------------- 8. Remove the spaces found in a string

let normalString = "Frase muito doida meu deus tem uma coisa aaaa aaaa"
let withoutSpaces = normalString.split(" ").join('')
// console.log(withoutSpaces)

// --------------------- 9. Return a Boolean if a number is divisible by 10
function isDivisibleBy10 (value) {
    if (value % 10 === 0) {
        console.log(`Sim!`)
    } else {
        console.log(`Não`)
    }
}

isDivisibleBy10(100)

// --------------------- 10. Return the number of vowels in a string

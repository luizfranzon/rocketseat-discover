//Declarar variável
var nome;

//Atribuindo valor a variável declarada
nome = "luiz";

//Qual tipo de dado foi declarado à variável "nome"?
console.log(typeof nome)

//Agrupando declarações
let age, isHuman

age = 18
isHuman = true

console.log(nome, age, isHuman)

// Multiplos argumentos na função
// console.log('O ' + nome + ' tem ' + age + ' anos.' )

// Interpolação de valores com template literals
console.log(`O ${nome} tem ${age} anos.`)

// Objects
let person = {
    name: "Carlos",
    age: 19,
    height: 1.7,
    isAdmin: true
}

console.log(person.name)

//Arrays
const animals = [
    'Leão',
    'Macaco',
    'Gato',
    'Cachorro'
]

console.log(animals.length)
console.log(animals[2])
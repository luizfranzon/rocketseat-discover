//Exercicios :)

let weight;

console.log(typeof weight)

let name = "Luiz"
let age = 10;
let stars = 60.5
let isSubscribed = true

let student = {
    name: "Carlos",
    age: 10,
    weight: 60.5,
    isSubscribed: true
};

console.log(student)
console.log(`O ${student.name} tem ${student.age} anos e ${student.weight} kg`)

let students = [
    student
];

console.log(students[0])

const luiz = {
    name: 'Luiz',
    age: 18
}

students[1] = luiz


console.log(students[1])
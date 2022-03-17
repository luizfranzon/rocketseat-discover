// Function constructor

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function (word) {
        word = word ? word : "Hi!"
        return this.name + " falou: " + word
    }
}

const luiz = new Person("Luiz", 18);
const pedro = new Person("Pedro", 21);

console.log(luiz.say('Oie'));
console.log(pedro.say('Eu não!'))

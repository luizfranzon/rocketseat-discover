const getFlag = require("./getFlags.js");

console.log(`Olá! ${getFlag('--name')}. ${getFlag('--greeting')}`)
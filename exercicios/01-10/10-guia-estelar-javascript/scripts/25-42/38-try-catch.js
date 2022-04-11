//Throw try e catch

function sayMyName(name = '') {
    if (name === '') {
        throw "Nome não pode estar vazio!"
    }
    console.log(name)
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}
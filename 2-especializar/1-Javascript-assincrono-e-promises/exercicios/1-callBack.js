function imprimirDado(dado) {
    console.log("Outras tarefas")
    let random = Math.floor(Math.random() * 10)
    console.log(dado());
    console.log(random)
}

imprimirDado(function (){
    return "Callback Function!!"
}) 
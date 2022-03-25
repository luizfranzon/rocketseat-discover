//Sistema de Gastos Familiares

let family = {
    incomes: [3500.487, 95.64, 475, 1396, 90.5, 1400.63],
    expenses: [800.41, 4751, 698, 215, 800.87],
};

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;
    }
    return total;
}

function calculateBalance(object) {
    let incom = sum(object.incomes);
    let expen = sum(object.expenses);

    let finalResult = incom - expen;

    if (finalResult < 0) {
        return "A familia está com saldo negativo: " + finalResult.toFixed(2);
    } else {
        return "A familia está com saldo positivo: " + finalResult.toFixed(2);
    }
}

console.log(calculateBalance(family));

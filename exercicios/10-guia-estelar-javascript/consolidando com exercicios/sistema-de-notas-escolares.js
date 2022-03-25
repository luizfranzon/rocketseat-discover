//Sistema de Notas Escolares

function getGradeByLetter(notaEmNumeros) {
    let notaFinal;
    notaEmNumeros = notaEmNumeros ? notaEmNumeros : 0

    if (notaEmNumeros >= 90 && notaEmNumeros <= 100) {
        notaFinal = "A";
    } else if (notaEmNumeros >= 80 && notaEmNumeros <= 89) {
        notaFinal = "B";
    } else if (notaEmNumeros >= 70 && notaEmNumeros <= 79) {
        notaFinal = "C";
    } else if (notaEmNumeros >= 60 && notaEmNumeros <= 69) {
        notaFinal = "D";
    } else if (notaEmNumeros < 60 && notaEmNumeros >= 0) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota inválida. (Apenas de 0 a 100)"
    }

    return notaFinal
}

console.log(getGradeByLetter())


// Passo 1:

let arrayA = [11, 12, 5, 8, 9, 10, 21, 19, 23, 25];
let arrayB = [10, 11, 12, 15, 17, 21, 8, 9, 25, 5];

// Passo 2:

function EncontrandoNumerosEmComum(arrayA, arrayB) {
    let resultado = [];
    let elementoAtual = [];
    let numerosIguais = [];

    for(let i = 0; i < arrayA.length; i++) {
            elementoAtual = arrayA[i]

        for(let j = 0; j < arrayB.length; j++) {
            if(arrayB[j] == elementoAtual) {
                numerosIguais = elementoAtual
            }
        }
    }

    for(let i = 0; i < numerosIguais.length; i++) {
        if(numerosIguais[i] != resultado) {
            resultado = numerosIguais[i]
        }
    }

    return resultado
}

console.log(EncontrandoNumerosEmComum(arrayA, arrayB))

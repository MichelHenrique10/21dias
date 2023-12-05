// Exercicio 1 de array > DoDev
/*
let numInt = Number(prompt(`Insira um número inteiro e positivo`));

let meuArray = []

for(let i = 0; i < 10; i++) {
   let numInseridos = Number(prompt(`insira 10 numeros para popular o array. Insira o ${i}°número`))

   meuArray[i] = numInseridos
}

for(let j = 0; j < 10; j++) {
    if (numInt === meuArray[j]) {
        console.log(`O numero inserido aparece na posição de número ${j}.`)
    } else {
        console.log(`O numero inserido não aparece na posição de número ${j}.`)
    }
} */

// Exercicio 2 > DoDev
/*
let tamanhoArray = Number(prompt(`Insira o tamanho do array que deseja ter.`))
let arrayUser = []
let arrayInvertido = []

for (let i = 0; i <= tamanhoArray; i++) {
    let numUser = Number(prompt(`Insira o ${i + 1}° número do array.`));

    arrayUser[i] = numUser;

    console.log(`${i + 1}° numero inserido foi: ${arrayUser[i]}, e a posição dele é ${i}`)
}

let contador = tamanhoArray

for (let j = 0; j <= tamanhoArray; j++) {
    arrayInvertido[j] = arrayUser[contador];
    contador --
}

console.log(`Aqui esta o array invertido: ${arrayInvertido}`)
*/

// Exercicio 3 > DoDev
/*
let numInt = Number(prompt(`Insira um numero inteiro e positivo.`));
let fibonnaci = [];
fibonnaci[0] = numInt - 1;
fibonnaci[1] = numInt;

for(let i = 0; i <= 10; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2]
}

console.log(`Fibonacci: ${fibonnaci}`)
*/
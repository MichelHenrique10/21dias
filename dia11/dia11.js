// Exercicio 1 > DoDev =
/*
let continuar = true
let nomes = []
let notas = []
let contador = 0

while (continuar) {
    let aluno = prompt(`Insira o nome do ${contador + 1}° aluno.`)
    let notaAluno = Number(prompt(`Insira a nota do aluno.`))

    nomes[contador] = aluno
    notas[contador] = notaAluno
    contador++

    let desejaContinuar = prompt(`Se deseja parar tecle 1, caso contrario tecle qualquer outra coisa.`)

    if(desejaContinuar == 1) {
        continuar = false
    }
}

console.log(`Notas dos alunos: `)
for (let i = 0; i <= nomes.length; i++) {
    console.log(`${nomes[i]} - ${notas[i]}`)   
}

let somaNotas = 0
for (let i = 0; i <= notas.length; i++) {
    somaNotas += notas[i]
}

let media = notas / nomes.length

console.log(`A soma das notas é: ${somaNotas}`);
console.log(`A média das notas é: ${media}`);
*/

// Exercicio 2 > DoDev =

let modelos = []
let anos = []
let valores = []

let continuar = true
let contador = 0

while (continuar) {
    let modelInserido = prompt(`Insira o modelo do ${contador + 1}° carro.`);
    let anoInserido = Number(prompt(`Insira o ano do carro.`));
    let valorInserido = Number(prompt(`insira o valor do carro.`))

    modelos[contador] = modelInserido;
    anos[contador] = anoInserido;
    valores[contador] = valorInserido;
    contador++

    let desejaContinuar = prompt(`Se deseja continuar tecle 'S' caso contrario tecle 'N'`)

    if (desejaContinuar == 'N') {
        continuar = false
    }
}

console.log(`Aqui estão os carros cadastrados: `)

for (let i = 0; i <= modelos.length - 1; i++) {
    console.log(`${modelos[i]} - ${anos[i]} - valor: ${valores}`)
}

for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[i] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1] 
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log(`Carros ordenados pelo preço:`)
for (let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]} - ${anos[i]} - ${valores[i]}`)
}
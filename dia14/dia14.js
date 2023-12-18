let nome
let salario
let novoSalario

function infosColaborador() {
    nome = prompt(`Insira seu nome.`)
    salario = Number(prompt(`Insira seu salario.`))

    return calcularAumento(nome, salario)
}

function calcularAumento(nome, salario) {
    let aumento = 0
    if (salario <= 1.500) {
        aumento = 0.2
        novoSalario = salario + (salario * 0.20);

    } else if (salario > 1.500 && salario <= 2.000) {
        aumento = 0.15
        novoSalario = salario + (salario * 0.15);

    } else if (salario > 2.001 && salario <= 3000) {
        aumento = 0.1
        novoSalario = salario + (salario * 0.10);

    } else {
        aumento = 0.05
        novoSalario = salario + (salario * 0.5);
    }

    return console.log(`Olá ${nome}, seu salario é de ${salario}, com o ajuste ele ficara ${novoSalario}, teve um aumento de ${aumento * 100}% `);
}

function DesejaContinuar() {
    let pergunta = prompt(`Você deseja continuar? caso queira continuar insira 1, senão qualquer outra coisa`)
    if (pergunta == '1') {
        return infosColaborador()
    }
}

infosColaborador()
DesejaContinuar()
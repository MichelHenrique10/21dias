let nomes = []
let senhas = []
let nome
let senha
let continuar = true

while(continuar) {
    Opcoes()
    let desejaContinuar = prompt(`Deseja continuar? Senão tecle P`)
    if(desejaContinuar == `P` || `p`) {
        continuar = false
    }
}

function Opcoes() {
    let opcoes = Number(prompt(`Insira 1 - Cadastro / 2 - Login / 3 - Excluir cadastro.`))

    switch (opcoes) {
        case 1:
            return Cadastro();
        case 2:
            return Login();
        case 3:
            return ExcluirCadastro();
        default:
            console.log(`Essa opção não existe. Tente novamente.`)
            break;
    }
}

function Cadastro() {
    nome = prompt(`Insira seu nome de usuario.`)
    senha = prompt(`Insira sua senha.`)

    nomes.push(nome)
    senhas.push(senha)

    console.log(`Cadastro realizado com sucesso!`)
}



function Login(nomeLogin, senhaLogin) {
    nomeLogin = prompt(`Insira seu nome de login`)
    senhaLogin = prompt(`Insira sua senha.`)
    if (nomes.includes(nomeLogin) && senhas.includes(senhaLogin)) {
        console.log(`Login efetuado com sucesso! Seja bem vindo!`)
    } else {
        console.log(`Login ou senha inserido incorretamente`)
    }
}

function ExcluirCadastro(nomeLogin) {
    nomeLogin = prompt(`Insira seu nome de login`);
    let nomeParaExcluir = nomes.indexOf(nomeLogin)
    if (nomeParaExcluir !== -1) {
        nomes.splice(nomeParaExcluir, 1)
        senhas.splice(nomeParaExcluir, 1)
        console.log(`Usuario Excluido com sucesso.`)
    } else {
        console.log(`Usuario não encontrado.`)
    }
}
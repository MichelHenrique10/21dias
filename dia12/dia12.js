let nomes = [];
let senhas = [];
let continuar = true;
let contador = 0


while (continuar) {

    let opcao = prompt(`Insira 1 para fazer cadastro, 2 para fazer login, 3 para excluir um cadastro ou 4 para encerrar sessão.`)

    switch (opcao) {
        case '1':
            let nomeUser = prompt(`Insira seu nome de usuário.`);
            let senhaUser = Number(prompt(`Insira a senha do seu login.`));
            nomes[contador] = nomeUser;
            senhas[contador] = senhaUser;
            contador++
            alert(`Cadastro feito com sucesso.`)
            break;

        case '2':
            let nomeLogin = prompt(`Insira seu nome de usuario.`);
            let senhaLogin = prompt(`Insira sua senha.`);

            for (let i = 0; i < nomes.length && i < senhas.length; i++) {
                if (nomeLogin == nomes && senhaLogin == senhas) {
                    alert(`O login foi bem sucedido! Seja bem-vindo ${nomeLogin}`)
                } else {
                    alert(`Senha ou login incorretos.`)
                }
            }
            break;

        case '3':
            let nomeExcluido = prompt(`Qual nome você deseja excluir?`);
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i = 0; i < nomes.length; i++) {
                if (nomeExcluido == nomes[i]) {
                    alert(`Usuário excluido com sucesso.`)
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--
            break;

        case '4':
            continuar = false
            break;

        default:
            console.log(`Opção invalida, escolha outra!`)
            break;
    }
}
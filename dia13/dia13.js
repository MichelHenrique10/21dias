/*
class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaRam, Ssd) {
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.SSD = Ssd
    }

    ExibirConsole() {
        console.log(`Sua maquina é um ${this.Tipo}, seu processador é um ${this.Processador}, sua maquina ${this.Video} placa de video, tem ${this.Armazenamento} gb de armazenamento, junto a ${this.MemoriaRam} de RAM e ${this.SSD}`)
    }
}

let MeuComputador = new Computador (`Notebook`, `Intel`, `Não possui`, 256, 8, `possui SSD`)

MeuComputador.ExibirConsole()
*/

// Exercicio 2 > DoDev = 
class Carro {
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor (nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }

    DistanciaSegundos(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }

    ExibirConsole() {
        console.log(this.Nome, this.Potencia, this.VelocidadeMaxima, this.Aceleracao)
    }
}

let meuCarro = new Carro ()
let distanciaSegundos = Number(prompt(`Insira distancia que deseja saber.`))

console.log(meuCarro.ExibirConsole())
console.log(meuCarro.DistanciaSegundos(distanciaSegundos))

class Corrida {
    NomeLocal
    Tipo
    DistanciaTotal
    Participantes
    Vencedor
    constructor(nomeLocal, tipo, distanciaTotal) {
        this.NomeLocal = nomeLocal;
        this.Tipo = tipo;
        this.DistanciaTotal = distanciaTotal;
        this.Participantes = []
        this.Vencedor = "";
    }

    DefinirVencedor() {
        let menorTempo = this.Participantes[0].DistanciaSegundos(this.distancia)
        let vencedor = this.Participantes[0]

        for(let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].DistanciaSegundos(this.distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo;
                vencedor = this.Participantes[index]
            }
        }
        return this.Vencedor = vencedor
    }

    ExibirVencedor() {
        alert(`O Vencedor é ${this.Vencedor.nome}`)
    }
}

let corrida = new Corrida("Monza", "Formula 1", 6000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Pegeout 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()
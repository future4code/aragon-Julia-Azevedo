type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

enum CORES {
    VERMELHO = "vermelho",
    AZUL = "azul",
    AMARELO = "amarelo",
    ROSA = "rosa",
    PRETO = "preto",
    BRANCO = "branco"
}

const pessoa: Pessoa = {
    nome:"julia",
    idade:26,
    corFavorita: CORES.PRETO
}

console.log(pessoa)
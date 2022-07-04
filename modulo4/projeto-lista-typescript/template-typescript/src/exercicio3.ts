enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Filme = {
    nome: string,
    lancamento: number,
    genero: GENERO,
    pontuacao?: number
}

function filmes(nome: string, lancamento: number, genero: GENERO, pontuacao?: number): Filme {
    if (pontuacao !== undefined) {
        const filme = {
            nome: nome,
            lancamento: lancamento,
            genero: genero,
            pontuacao: pontuacao
        }
        return filme
    } else {
        const filme = {
            nome: nome,
            lancamento: lancamento,
            genero: genero
        }
        return filme
    }
}

console.log(filmes("minions", 2022, GENERO.COMEDIA, 80))
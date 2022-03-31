/* Questões de interpretação
1- a) Matheus nachtergaele
Virginia Cavendigh
{canal: "Globo", horario: "14h"}

2- a) nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD"
b) "clona" o objeto inteiro e permite que sejam adicionadas novas propriedades

3- a) false
undefined
b) o console imprimiu falso em "backender" porque foi o valor atribuído à chave, e imprimiu 
undefined em "altura" porque essa chave não está contida no objeto.

*/


// Questões de escrita

// 1 a)
const pessoa = {
    nome: "Julia",
    apelidos: ["Ju", " Juju", " ou Juca"]
}

function informacoes(objetoPessoa){

    console.log(`Eu sou ${objetoPessoa.nome}, mas pode me chamar de: ${objetoPessoa.apelidos}`)
}

informacoes(pessoa)

// 1 b)
const novosApelidos = {
    ...pessoa,
    apelidos: ["Juba", " Julian", " ou Julinha"]
}

informacoes(novosApelidos)

// 2 a) 
const infos1 = {
    nome: "Julia", 
    idade: 26,
    profissao: "Estudante"
}

const infos2 = {
    ...infos1,
    nome: "Fabiana", 
    idade: 47,
    profissao: "Designer"
}

// 2 b)
function recebeERetornaInfos(infos) {
    obj = []
    obj.push(infos.nome)
    obj.push(infos.nome.length)
    obj.push(infos.idade)
    obj.push(infos.profissao)
    obj.push(infos.profissao.length)

    return obj
}

let infosPessoa1 = recebeERetornaInfos(infos1)
console.log(infosPessoa1) 

let infosPessoa2 = recebeERetornaInfos(infos2)
console.log(infosPessoa2)

// 3 a)
const carrinho = []

// 3 b)
const laranja = {
    nome: "Laranja",
    disponibilidade: true,
}

const banana = {
    ...laranja,
    nome: "Banana",
}

const melao = {
    ...banana,
    nome: "Melão"
}

//3 c)
function meuCarrinho(fruta) {
    carrinho.push(laranja) 
    carrinho.push(banana)
    carrinho.push(melao)
}

meuCarrinho(carrinho) 

// 3 d)
console.log(carrinho)

// Desafio 1

function dados() {
    const informacoes = {
        nome: prompt("Digite o seu nome:"), 
        idade: prompt("Digite a sua idade:"), 
        profissao: prompt("Digite a sua profissão:")
    }

    console.log(informacoes, typeof(informacoes))

}

dados()
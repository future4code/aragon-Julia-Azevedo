/* Exercícios de interpretação

1- o nome e o apelido, o índice e o array original
2- um array com os nomes
3- um array contendo as duas primeiras linhas

*/

// Exercícios de código

// 1-
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 

 // a)
 let apenasNome = pets.map((pet) => {
    return pet.nome
})

console.log(apenasNome)


// b)
let apenasCachorroSalsicha = pets.filter((pet) => {
    if (pet.raca === "Salsicha") return pet
})

console.log(apenasCachorroSalsicha)


// c)
let cupomDeDesconto = pets.filter((pet) => {
    if (pet.raca === "Poodle") return pet
}).map((cliente) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cliente.nome}`
})

console.log(cupomDeDesconto)
 
 
 // 2-
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 

 // a)
 const nomeItem = produtos.map((produto) => {
     return produto.nome
 })
 
 console.log(nomeItem)
 
 
 // b)
 let descontoItem = produtos.map((desconto) => {
     return {
         nome: desconto.nome,
         preco: (desconto.preco*0.95)
     }
 })
 
 console.log(descontoItem)
 
 
 // c)
 let itemBebidas = produtos.filter((produtoBebidas) => {
     return produtoBebidas.categoria === "Bebidas"
 })
 
 console.log(itemBebidas)
 
 
 // d)
 let itemYpe = produtos.filter((produto) => {
     if (produto.nome.includes("Ypê")) 
     return produto
 } )
 
 console.log(itemYpe)
 
 
 // e)
 let itemValor = produtos.filter((produto) => {
     if (produto.nome.includes("Ypê")) 
     return produto
 }).map((ype) => {
     return `Compre ${ype.nome} por R$ ${ype.preco}`
 })
 
 console.log(itemValor)
 
 
 // Desafio

 // 1
 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 

 // a)
 let ordemAlfabeticaPokemons = pokemons.map((pokemon) => {
     return pokemon.nome
 }).sort()
 
 console.log(ordemAlfabeticaPokemons)
 

 // b)
 let tiposDePokemon = new Set()
  pokemons.map((pokemon) => {
     tiposDePokemon.add(pokemon.tipo)
 })
 let tiposDePokemonArray = Array.from(tiposDePokemon) 
 
 console.log(tiposDePokemonArray)

 
// a) Responda como comentário no seu código: Como fazemos para acessar os parâmetros
// passados na linha de comando para o Node?

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores,
// imprima no console uma mensagem que siga a seguinte estrutura:
// Resposta esperada → ”Olá, (Nome)! Você tem (sua idade) anos!”

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// Resposta esperada → “Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você
// terá (nova idade)”
// Dica: Os parâmetros do node sempre chegam como strings. Pense em uma maneira de
// transformar estes valores em um tipo number.

// a) usando process.argv

// b)
// const nome = process.argv[2]
// const idade = process.argv[3]
// console.log(`Olá, ${nome}! Você tem ${idade} anos!`)

// c)
const nome = process.argv[2]
const idade = process.argv[3]
const idadeFutura = Number(idade) + Number(7)
console.log(`Olá, ${nome}! Você tem ${idade} anos! em sete anos você terá ${idadeFutura} anos`)




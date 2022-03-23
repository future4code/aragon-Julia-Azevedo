/* exercícios de interpretação 
1- a) false b) false c) true d) boolean

2- O número seguido do outro número, pois os dois são uma string.

3-
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// exercícios de escrita 

// 1
const idade = Number(prompt("Qual é a sua idade?"))
const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade >= idadeAmigo)
console.log("A diferença entre as suas idades é de:", idade - idadeAmigo)

// 2
const numeroPar = Number(prompt("Insira um número par:"))

console.log(numeroPar%2)

// 2c: O resto da divisão é sempre 0
// 2d: O resto da divisão é sempre 1

// 3
const idadeEmAnos = Number(prompt("Qual é a sua idade em anos?"))
const meses = idadeEmAnos*12
const dias = idadeEmAnos*365
const horas = idadeEmAnos*8760

console.log("A sua idade em meses é de:", meses)
console.log("A sua idade em dias é de:", dias)
console.log("A sua idade em horas é de:", horas)

// 4
const n1 = Number(prompt("Digite o primeiro número: "))
const n2 = Number(prompt("Digite o segundo número: "))

console.log(n1>n2)
console.log(n1==n2)
console.log((n1%n2)==0)
console.log((n2%n1)==0)
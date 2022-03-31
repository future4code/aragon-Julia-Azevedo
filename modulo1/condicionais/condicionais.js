/* Exercícios de interpretação
1) a) verifica se o número é par ou ímpar
b) números pares
c) números ímpares

2) a) para imprimir o valor da fruta inserida
b) O preço da fruta  Maçã  é  R$  2.25
c) O preço da fruta  Pêra  é  R$  5

3) a) está pedindo para que o usuário digite o primeiro número
b) 10: Esse número passou no teste
-10: mensagem is not defined
c) haverá erro no console se o número for menor que 0, porque faltou o else (numero < 0) e porque a variável mensagem
não possui nenhum comando de entrada
*/

// Exercícios de escrita

// 1
let idade = Number(prompt("Digite a sua idade:"))

if (idade >= 18) {
    console.log("Você pode dirigir")
}

else {
    console.log("Você não pode dirigir")
}

// 2
let turno = prompt("Digite a inicial do turno em que você estuda: M (Matutino), V (Vespertino) ou N (Noturno)")

if (turno === "M") {
    console.log("Bom Dia!")
} 

else if (turno === "V") {
    console.log("Boa Tarde!")
}

else if(turno === "N") {
    console.log("Boa Noite!")
}

else {
    console.log("Por favor, tente de novo.")
}

// 3
let turnoSwitch = prompt("Digite a inicial do turno em que você estuda: M (Matutino), V (Vespertino) ou N (Noturno)")

switch (turnoSwitch) {
    case "M": 
        console.log("Bom Dia!")
        break
    case "V": 
        console.log("Boa Tarde!") 
        break 
    case "N": 
        console.log("Boa Noite!")
        break 
    default: 
        console.log("Por favor, tente de novo.")
        break 
}

// 4
const genero = prompt("Qual é o gênero do filme?")
const valor = Number(prompt("Qual é o valor do ingresso?"))

if (genero === "fantasia" && valor < 15) {
    console.log("Bom filme!")
}

else {
    console.log("Escolha outro filme")
}
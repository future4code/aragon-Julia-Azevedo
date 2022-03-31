/* Exercícios de interpretação

1- Criando um loop para realizar uma soma
10

2- a) Os números maiores de 18 
b) indexOf

3- 
*
**
***
****

*/

// Exercicios de escrita

// 1
let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomeBichinhos = []

if (bichinhos === 0)
  console.log("Que pena! Você pode adotar um pet!")

else {
  for (let i = 0; i < bichinhos; i++) {
        nomeBichinhos.push(prompt("Insira o nome do bichinho, um por um:"))
    }
}

for (let nome of nomeBichinhos) {
    console.log(nome)
} 


// 2
let arrayOriginal = [5,10,15,20,25,30,35,40,45,50]

// 2 a)
let imprimirOriginal = (arr) => {
    for (let i of arr) {
        console.log(i)
    }
}


// 2 b)
let imprimirDivisao = (arr) => {
    for (let i of arr) {
        console.log(i/10)
    }
}


// 2 c)
function imprimirPares(arr) {
    let arrayPares = []
    for (let i of arr) {
        if(i%2 === 0) arrayPares.push(i)
    }
    console.log(arrayPares)
}


// 2 d)
function criarArrayComStrings(arr) {
    let stringArray = []

    for(let i of arr) {
        stringArray.push(`O elemento do índex ${arr.indexOf(i)} é: ${i}`)
    }
    console.log(stringArray)
}


// 2 e)
function maiorEMenor(arr) {
    let maior = arr[0] 
    let menor = arr[0]

    for (let i of arr) {
        if(menor > i) menor = i
        else if(maior < i) maior = i
    }
    console.log(`O maior número é ${maior}, e o menor é ${menor}.`)
}


imprimirOriginal(arrayOriginal)
imprimirDivisao(arrayOriginal)
imprimirPares(arrayOriginal) 
criarArrayComStrings(arrayOriginal) 
maiorEMenor(arrayOriginal) 
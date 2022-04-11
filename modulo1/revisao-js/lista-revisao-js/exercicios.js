// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

console.log (retornaTamanhoArray([1, 2, 3, 4, 5]))


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

console.log (retornaArrayInvertido([8, 23, 16, 10]))


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = array.filter((pares) => {
        return pares % 2 === 0
    })
    return numerosPares 
}

console.log (retornaNumerosPares([1, 2, 3, 4, 5, 6]))


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);
}

console.log (retornaMaiorNumero([1, 5, 3, 7, 5, 2]))


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menor 
    let maior = num1 > num2 ? ((menor = num2), num1) : ((menor = num1), num2)

    let infoNumeros = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: (maior % menor === 0),
        diferenca: (maior-menor)
    }
    return infoNumeros
}

console.log(retornaObjetoEntreDoisNumeros(15, 30))


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let retornaPares = []
    for (let i = 0; i < (n * 2); i += 2) retornaPares.push(i)
    return retornaPares
}

console.log(retornaNPrimeirosPares(3))


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC)
    return "Triângulo Equilátero"
   
    else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
    return "Triângulo Escaleno"
   
    else
    return "Triângulo Isósceles"
}
   
console.log(classificaTriangulo(5, 5, 5))


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    return [array[array.length -2], array[1]]
 }
 
 console.log(retornaSegundoMaiorESegundoMenor([3, 2, 1, 4, 7, 6, 5]))
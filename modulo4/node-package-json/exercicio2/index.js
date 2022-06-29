// Crie uma aplicação Node que recebe uma string representando uma operação matemática e
// dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando
// os 2 valores fornecidos.

// - Exemplo 1:
    
// Comando → npm run start add 2 2
// Resposta esperada → 4
// - Exemplo 2:

// Comando → npm run start sub 10 2
// Resposta esperada → 8

// - Exemplo 3:

// Comando → npm run start mult 50 2
// Resposta esperada → 100

// - Exemplo 4:

// Comando → npm run start div 100 2
// Resposta esperada → 50 

// Dicas: 

// - Dica 1: Todos os valores são armazenados como string.
// - Dica 2: Pense em uma maneira de separar a sua lógica condicionalmente para cada tipo 
// de operação passada como parâmetro para o Node.

function calculo(operador, n1, n2) {
    switch (operador) {
        case "adicao":
            return Number(n1) + Number(n2)
        case "subtracao":
            return Number(n1) - Number(n2)
        case "multiplicacao":
            return Number(n1) * Number(n2)
        case "divisao":
            return Number(n1) / Number(n2)
    }
}

console.log(calculo(process.argv[2],process.argv[3],process.argv[4])) 
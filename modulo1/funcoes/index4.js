/* Exercícios de interpretação

1- a) 10
      50
   b) Não apareceria nada, porque é necessário que o console.log imprima.

2- a) Verifica se há determinada palavra no texto inserido. 
   b) true, true, true
   */

// Exercícios de escrita 

// 1a

function informacoes() {
    const nome = prompt("Qual é o seu nome?")
    const idade = prompt("Qual é a sua idade?")
    const cidade = prompt("Qual é a sua cidade?")
    const profissao = prompt("Qual é a sua profissão?")
    
      console.log("Eu me chamo " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + ".")
    }
    
    informacoes()

// 1b

function ImprimeInformacoes(nome, idade, cidade, profissao) {
    return ("Eu me chamo " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + ".")
  }
  
  console.log(ImprimeInformacoes("", "", "", ""))

// 2a

function somaDeDoisNumeros(num1, num2) {
  const soma = num1 + num2
    return soma
  }
  
  console.log(somaDeDoisNumeros())

// 2b

function maiorOuIgual(num1, num2) {
  const verificar = num1 >= num2
    return verificar 
  }
  
  console.log(maiorOuIgual())

// 2c

function par(numero) {
  const restoDaDivisao = numero % 2 === 0
    return restoDaDivisao
  }
  
  console.log(par())

// 2d

function tamanho(mensagem) {
  const contador = mensagem.length
  const maiuscula = mensagem.toUpperCase()
    
  console.log(contador, maiuscula)
    
  }
  
  tamanho("")

// 3

function operacoesBasicas(num1, num2) {
  
    const soma = num1 + num2
    const subtracao = num1 - num2
    const multiplicacao = num1 * num2
    const divisao = num1 / num2
    
   console.log ("Números inseridos: " + num1 +", "+ num2 + " Soma: " + soma + " Subtração: " + subtracao + " Multiplicação: " + multiplicacao + " Divisão: " + divisao)
  }
  
  operacoesBasicas (,)


  




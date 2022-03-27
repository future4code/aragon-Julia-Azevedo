// EXEMPLOS DE IMPLEMENTAÇÃO ------------------------------------------------------------

  // EXERCÍCIO 0A
function soma(num1, num2) {
    return num1 + num2
  }
  

  // EXERCÍCIO 0B
  function imprimeMensagem() {
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  

// EXERCÍCIOS PARA FAZER ---------------------------------------------------------------
  

  // EXERCÍCIO 01
  function calculaAreaRetangulo() {
    const altura = prompt('Digite em cm a altura do retângulo')
    const largura = prompt('Digite em cm a largura do retângulo')
  
    console.log(altura*largura)
  }
  
  
  // EXERCÍCIO 02
  function imprimeIdade() {
    const anoAtual = prompt('Digite o ano atual')
    const anoDeNascimento = prompt('Digite o seu ano de nascimento')
  
    console.log(anoAtual-anoDeNascimento)
  }
  
  
  // EXERCÍCIO 03 
  function calculaIMC() {
    const altura = prompt('Digite a sua altura em metros')
    const peso = prompt('Digite o seu peso em quilogramas')
    const imc = peso/(altura*altura)
    console.log (imc.toFixed(1))
  }
  
  
  // EXERCÍCIO 04 
  function imprimeInformacoesUsuario() {
    const nome = prompt("Qual é o seu nome?")
    const idade = prompt("Qual é a sua idade?")
    const email = prompt("Qual é o seu e-mail?")
    
    console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
  
  }
  
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Qual é a sua 1a cor favorita?")
    const cor2 = prompt("Qual é a sua 2a cor favorita?")
    const cor3 = prompt("Qual é a sua 3a cor favorita?")
    const corArray = [cor1, cor2, cor3]
  
    console.log(corArray)
  }
  
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    const maiuscula = string.toUpperCase()
  
    console.log(maiuscula)
  }
  retornaStringEmMaiuscula("oi")
  
  
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    return custo/valorIngresso
  }
  console.log(calculaIngressosEspetaculo(custo, valorIngresso))
  
  
  // EXERCÍCIO 08 
  function checaStringsMesmoTamanho(string1, string2) {
    const contador1 = string1.length
    const contador2 = string2.length
    
    return console.log(contador1 == contador2)
  }
  checaStringsMesmoTamanho("ola", "abc")
  
  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    return array[0]
  }
  console.log(retornaPrimeiroElemento(["ola", "abc"]))
  
  
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    return array[array.length -1]
  
  }
  console.log(retornaUltimoElemento(["ola", "abc"]))
  
  
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    
    const trocarElementos = array
    trocarElementos.reverse()
    
      console.log(trocarElementos)
    }
    
  console.log(trocaPrimeiroEUltimo(["ola", "abc"]))
  
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    const maiuscula = string1.toUpperCase()
    const maiuscula2 = string2.toUpperCase()
  
    return maiuscula==maiuscula2
  }
  console.log(checaIgualdadeDesconsiderandoCase("Ola", "olA"))

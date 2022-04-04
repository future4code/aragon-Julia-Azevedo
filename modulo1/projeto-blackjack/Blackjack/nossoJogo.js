 // 1-
console.log("Boas vindas ao jogo de Blackjack!")

// 2- 3- 4- 5- 6- 7-
// Não consegui fazer. Fiz anteriormente usando objetos, que acredito que seja o método correto, mas também deu errado. Seria bom que pudessem fazer conosco em sala.

 if(confirm("Quer iniciar uma nova rodada?")) {

   const usuario = 
   const carta1Usuario = numero + naipe
   const carta2Usuario = numero + naipe
  

   const computador = 
   const carta1Computador = numero + naipe
   const carta2Computador = numero + naipe

   let pontuacaoUsuario = carta1Usuario + carta2Usuario
   let pontuacaoComputador = carta1Computador + carta2Computador

   console.log(`${usuario} - cartas: ${carta1Usuario} ${carta2Usuario} - pontuação ${pontuacaoUsuario}`)
   console.log(`${computador} - cartas: ${carta1Computador} ${carta2Computador} - pontuação ${pontuacaoComputador}`)
 
   if (pontuacaoComputador === pontuacaoUsuario) 
     return "Empate"
   
   else if (pontuacaoComputador > pontuacaoUsuario) 
     return "O computador ganhou!"

   else { 
      return "O usuário ganhou!"
   }
   
} else {
   
	console.log("O jogo acabou")
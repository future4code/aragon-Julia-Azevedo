//1
const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu e-mail?")

const cadastro = "O e-mail " + emailDoUsuario + "foi cadastrado com sucesso. Seja bem-vinda(o)," + nomeDoUsuario +"!"
console.log(cadastro)

//2
const comidasPreferidas = ["Cheeseburger", "Macarrão", "Bife", "Batata", "Queijo"]

console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
console.log("Essas são as minhas comidas preferidas: " + comidasPreferidas)


//3
let listaDeTarefas = []
let tarefa1 = prompt("Digite a 1a tarefa que você precisa realizar hoje:")
let tarefa2 = prompt("Digite a 2a tarefa que você precisa realizar hoje:")
let tarefa3 = prompt("Digite a 3a tarefa que você precisa realizar hoje:")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let tarefasRealizadas = prompt("Digite o índice das tarefas que você já realizou:")
listaDeTarefas.splice(tarefasRealizadas, 1)
console.log(listaDeTarefas)

/* Questões de interpretação

1- a) undefined 
b) null
c)  11
d) 3
e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f) 9

2- SUBI NUM ÔNIBUS EM MARROCOS 28
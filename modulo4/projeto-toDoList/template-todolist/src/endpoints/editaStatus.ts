import { Request, Response } from "express"
import connection from "../database/connection"

/* ## Endpoint 6) Editar Status de uma Tarefa
Este endpoint edita o status de uma tarefa, que só assume os valores: “A FAZER”, “FAZENDO” e “FEITO” conforme a query do arquivo migrations na criação da tabela de tarefas “Tasks”.
Método: PUT
Rota de requisição: “/tasks/:taskId”
Entradas → Id da tarefa selecionada.
Validação de Input:
- Status deve existir e assumir um dos seguintes valores: “A FAZER”, “FAZENDO” ou “FEITO”.
Regras de Negócio:
- Id da tarefa deve existir no banco de dados.
Saídas possíveis:
- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso, deve retornar o status de alteração e mensagem de sucesso da operação.
*/

export const editaStatus = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      res.status(200).send({ message: "Pong!" })
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
}
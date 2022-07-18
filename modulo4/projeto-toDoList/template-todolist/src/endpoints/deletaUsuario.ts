import { Request, Response } from "express"
import connection from "../database/connection"

/* ## Endpoint 7) Deletar uma tarefa
Este endpoint permite remover uma tarefa pelo seu id.
Método: DELETE
Rota de requisição: “/tasks/:taskId”
Entradas → Id da tarefa selecionada.
Validação de Input → Nenhuma.
Regras de Negócio:
- Id da tarefa deve ser compatível com registro existente em banco de dados.
- Deleção de tarefas necessita de remoção de usuários destacados para esta tarefa.
Saídas possíveis:
- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso, deve retornar o status de deleção e mensagem de sucesso da operação.
*/

export const deletaUsuario = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      res.status(200).send({ message: "Pong!" })
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
}
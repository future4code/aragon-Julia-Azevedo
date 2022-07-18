import { Request, Response } from "express"
import connection from "../database/connection"

/* ## Endpoint 4) Adicionar Usuário Responsável a um Tarefa
Este endpoint adiciona um responsável por uma tarefa. Um usuário pode ser atribuído a realizar múltiplas tarefas, mas não deve ser possível atribuir a mesma tarefa a mais de um usuário ao mesmo tempo. Esta relação é estabelecida pela tabela “Responsibles” do template.
Método: POST
Rota de requisição: “/tasks/:taskId/users”
Entradas → Id da tarefa e do usuário selecionado.
Validação de Input → Nenhuma.
Regras de Negócio:
- Id da tarefa e do usuário devem ser compatíveis com registros existentes em seus respectivos bancos de dados.
- O usuário só poderá ser registrado uma única vez para cada tarefa selecionada.
Saídas possíveis:
- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso, deve retornar o status de criação e mensagem de sucesso da operação.
*/

export const adicionaUsuarioATarefa = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const taskId = req.params.taskId
      const userId = req.body.userId

      
      res.status(200).send({ message: "Pong!" })
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
}
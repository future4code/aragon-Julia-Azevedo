import { Request, Response } from "express"
import connection from "../database/connection"

/* ## Endpoint 3) Pegar Usuário Responsável por uma Tarefa
Este endpoint retorna o usuário (apenas id e apelido) responsável por uma determinada tarefa. Esta relação é estabelecida pela tabela “Responsibles” do template.
Método: GET
Rota de requisição: “/tasks/:taskId/users”
Entradas → Id da tarefa selecionada.
Validação de Input → Nenhuma.
Regras de Negócio → Id da tarefa deve existir no banco de dados.
Saídas possíveis:
- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso, deve retornar o status de recebimento, mensagem de sucesso e o usuário responsável.
*/

export const pegaUsuarioDaTarefa = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const taskId = req.params.taskId as string

    const [idDaTarefa] = await connection.raw(`
      SELECT * FROM Tasks
      WHERE id = "${taskId}";
      `)

    const buscaTarefa = idDaTarefa[0]

    if (!buscaTarefa) {
      errorCode = 404
      throw new Error("Tarefa não encontrada.");
    }

    const [resultado] = await connection.raw(`
      SELECT 
      Users.id,
      Users.nickname
      FROM Responsibles
      JOIN Users
      ON Responsibles.userId = Users.id
      WHERE taskId = "${taskId}";
      `)

    if (!resultado[0]) {
      res.status(200).send({ mensagem: "Tarefa livre." })
    } else {
      res.status(200).send({ users: resultado })
    }

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
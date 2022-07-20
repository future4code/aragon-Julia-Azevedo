import { Request, Response } from "express"
import connection from "../database/connection"

/* ## Endpoint 5) Editar Apelido do Usuário
Este endpoint permite que editemos o apelido de um usuário buscado pelo seu id.
Método: PUT
Rota de requisição: “/users/:userId”
Entradas → Id do usuário selecionado.
Validação de Input:
- nickname (apelido) deve existir e ser do tipo string.
- nickname (apelido) deve ter ao menos 3 caracteres.
Regras de Negócio:
- Id do usuário deve existir no banco de dados.
Saídas possíveis:
- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso, deve retornar o status de alteração e mensagem de sucesso da operação.
*/

export const editaApelido = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      res.status(200).send({ message: "Pong!" })
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
}
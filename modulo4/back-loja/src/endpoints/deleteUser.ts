import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"

export const deleteUser = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 400
      throw new Error("Digite o id.");
    }

    const idDoUsuario = await connection(TABLE_USERS)
      .select("*")
      .where({ id })

    if (idDoUsuario.length === 0) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    await connection(TABLE_USERS)
      .delete()
      .where({ id })

    res.status(200).send({ message: "O usuário foi deletado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
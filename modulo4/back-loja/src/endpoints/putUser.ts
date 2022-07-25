import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"

export const putUser = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.price
    const password = req.body.price

    if (!id) {
      errorCode = 400
      throw new Error("Digite o id.");
    }

    if (!email) {
      errorCode = 400
      throw new Error("Digite o email.");
    }

    if (!password) {
      errorCode = 400
      throw new Error("Digite a password.");
    }

    const idDoUsuario = await connection(TABLE_USERS)
      .select("*")
      .where({ id })

    if (idDoUsuario.length === 0) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    await connection(TABLE_USERS)
      .update({
        email: email,
        password: password
      })
      .where({ id })

    res.status(200).send({ message: "O usuário foi alterado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
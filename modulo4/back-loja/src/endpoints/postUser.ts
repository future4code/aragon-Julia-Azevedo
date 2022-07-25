import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../models/User"

export const postUser = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { id, email, password } = req.body

    if (!id) {
      errorCode = 400
      throw new Error("Parâmetro id faltando");
    }

    if (!email) {
      errorCode = 400
      throw new Error("Parâmetro email faltando");
    }

    if (!password) {
      errorCode = 400
      throw new Error("Parâmetro password faltando");
    }

    if (typeof id !== "string") {
      errorCode = 422
      throw new Error("Id deve ser do tipo string.");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("Email deve ser do tipo string.");
    }

    if (typeof password !== "string") {
      errorCode = 422
      throw new Error("Password deve ser do tipo string.");
    }

    const newUser: User = {
      id: Date.now().toString(),
      email: email,
      password: password
    }

    await connection(TABLE_USERS)
      .insert({
        id: newUser.id,
        email: newUser.email,
        password: newUser.password
      })

    res.status(201).send({ message: "Usuário criado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
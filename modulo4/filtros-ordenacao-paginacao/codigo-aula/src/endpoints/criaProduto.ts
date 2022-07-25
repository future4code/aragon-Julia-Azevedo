import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const criaProduto = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, price } = req.body

    if (!name || !price) {
      errorCode = 400
      throw new Error("Parâmetros faltando");
    }

    if (typeof name !== "string" || typeof price !== "number") {
      errorCode = 422
      throw new Error("O nome deve ser do tipo string e o preço do tipo number");
    }

    const novoProduto = {
      id: Date.now(),
      name: name,
      price: price
    }

    await connection.raw(`
      INSERT INTO ${TABLE_PRODUCTS} (id, name, price)
      VALUES ("${novoProduto.id}", "${novoProduto.name}", "${novoProduto.price}")
      `)

    res.status(201).send({ message: "Produto criado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
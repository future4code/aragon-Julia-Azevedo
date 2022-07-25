import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const putProduct = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const price = req.body.price

    if (!id) {
      errorCode = 400
      throw new Error("Parâmetro id faltando");
    }

    if (!price) {
      errorCode = 400
      throw new Error("Parâmetro price faltando");
    }

    if (typeof id !== "string") {
      errorCode = 422
      throw new Error("Id deve ser do tipo string.");
    }

    if (typeof price !== "number") {
      errorCode = 422
      throw new Error("Price deve ser do tipo number.");
    }

    if (price <= 0) {
      errorCode = 422
      throw new Error("Parâmetro 'price' deve ser number maior que 0.")
    }

    const idDoProduto = await connection(TABLE_PRODUCTS)
      .select("*")
      .where({ id })

    if (idDoProduto.length === 0) {
      errorCode = 404
      throw new Error("Produto não encontrado");
    }

    await connection(TABLE_PRODUCTS)
      .update({
        price: price
      })
      .where({ id })

    res.status(200).send({ message: "O preço foi alterado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
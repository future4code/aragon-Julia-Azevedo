import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const editaProduto = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const price = req.body.price as number

    if (!id) {
      errorCode = 400
      throw new Error("Digite o id.");
    }

    const [idDoProduto] = await connection.raw(`
      SELECT * FROM ${TABLE_PRODUCTS}
      WHERE id = "${id}"
      `)

    if (!idDoProduto[0]) {
      errorCode = 404
      throw new Error("Produto não encontrado");
    }

    await connection.raw(`
      UPDATE ${TABLE_PRODUCTS}
      SET price = ${price}
      WHERE id = "${id}"
      `)

    res.status(200).send({ message: "O preço foi alterado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
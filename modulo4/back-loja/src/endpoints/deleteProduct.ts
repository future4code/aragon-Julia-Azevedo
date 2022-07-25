import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const deleteProduct = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 400
      throw new Error("Digite o id.");
    }

    const idDoProduto = await connection(TABLE_PRODUCTS)
      .select("*")
      .where({ id })

    if (idDoProduto.length === 0) {
      errorCode = 404
      throw new Error("Produto não encontrado");
    }

    await connection(TABLE_PRODUCTS)
      .delete()
      .where({ id })

    res.status(200).send({ message: "O produto foi deletado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
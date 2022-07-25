import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Purchase } from "../models/Purchase"

export const postPurchase = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { user_id, product_id, quantity } = req.body

    if (!user_id) {
      errorCode = 400
      throw new Error("Parâmetro user_id faltando");
    }

    if (!product_id) {
      errorCode = 400
      throw new Error("Parâmetro product_id faltando");
    }

    if (!quantity) {
      errorCode = 400
      throw new Error("Parâmetro quantity faltando");
    }

    if (typeof user_id !== "string") {
      errorCode = 422
      throw new Error("user_id deve ser do tipo string.");
    }

    if (typeof product_id !== "string") {
      errorCode = 422
      throw new Error("product_id deve ser do tipo string.");
    }

    if (typeof quantity !== "number") {
      errorCode = 422
      throw new Error("quantity deve ser do tipo number.");
    }

    if (quantity <= 0) {
      errorCode = 422
      throw new Error("Parâmetro 'quantity' deve ser maior que 0.")
    }

    const idUsuario = await connection(TABLE_USERS)
      .select("*")
      .where("id", "=", `${user_id}`)

    if (idUsuario.length === 0) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    const idProduto = await connection(TABLE_PRODUCTS)
      .select("*")
      .where("id", "=", `${product_id}`)

    if (idProduto[0]) {
      const newPurchase: Purchase = {
        id: Date.now().toString(),
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        total_price: idProduto[0].price * quantity
      }

      await connection(TABLE_PURCHASES)
        .insert({
          id: newPurchase.id,
          user_id: newPurchase.user_id,
          product_id: newPurchase.product_id,
          quantity: newPurchase.quantity,
          total_price: newPurchase.total_price
        })

      res.status(201).send({ message: "Compra registrada com sucesso!", newPurchase: newPurchase })
    } else {
      errorCode = 404
      throw new Error("Produto não encontrado");
    }

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const postProduct = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { id, name, price } = req.body

    if (!id) {
      errorCode = 400
      throw new Error("Parâmetro id faltando");
    }

    if (!name) {
      errorCode = 400
      throw new Error("Parâmetro name faltando");
    }

    if (!price) {
      errorCode = 400
      throw new Error("Parâmetro price faltando");
    }

    if (typeof id !== "string") {
      errorCode = 422
      throw new Error("Id deve ser do tipo string.");
    }

    if (typeof name !== "string") {
      errorCode = 422
      throw new Error("Name deve ser do tipo string.");
    }

    if (typeof price !== "number") {
      errorCode = 422
      throw new Error("Price deve ser do tipo number.");
    }

    if (price <= 0) {
      errorCode = 422
      throw new Error("Parâmetro 'price' deve ser number maior que 0.")
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: name,
      price: price
    }

    await connection(TABLE_PRODUCTS)
      .insert({
        id: newProduct.id,
        name: newProduct.name,
        price: newProduct.price
      })

    res.status(201).send({ message: "Produto criado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
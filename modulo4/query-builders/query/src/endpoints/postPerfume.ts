import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

// O mínimo esperado é a funcionalidade de cadastro de um novo perfume.

export const postPerfume = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const name = req.body.name
    const brand = req.body.brand
    const price = req.body.price
    const ml = req.body.ml

    if (!name || !brand || !price || !ml) {
      errorCode = 400
      throw new Error("Parâmetros faltando.")
    }

    if (typeof name !== "string") {
      errorCode = 422
      throw new Error("Parâmetro 'name' deve ser do tipo string.")
    }

    if (typeof brand !== "string") {
      errorCode = 422
      throw new Error("Parâmetro 'brand' deve ser do tipo string.")
    }

    if (typeof price !== "number") {
      errorCode = 422
      throw new Error("Parâmetro 'price' deve ser do tipo number.")
    }

    if (typeof ml !== "number") {
      errorCode = 422
      throw new Error("Parâmetro 'ml' deve ser do tipo number.")
    }

    if (price <= 0) {
      errorCode = 422
      throw new Error("Parâmetro 'price' deve ser number maior que 0.")
    }

    if (ml <= 0) {
      errorCode = 422
      throw new Error("Parâmetro 'ml' deve ser number maior que 0.")
    }

    const newProduct: Perfume = {
      id: Date.now().toString(),
      name: name,
      brand: brand,
      price: price,
      ml: ml
    }

    await connection(TABLE_PERFUMES)
      .insert({
        id: newProduct.id,
        name: newProduct.name,
        brand: newProduct.brand,
        price: newProduct.price,
        ml: newProduct.ml
      })

    res.status(201).send({ novoperfume: newProduct, message: "Perfume criado com sucesso." })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
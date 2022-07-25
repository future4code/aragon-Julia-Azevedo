import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS, TABLE_PURCHASES } from "../database/tableNames";

export const getPurchase = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const user_id = req.params.user_id

    if (!user_id) {
      errorCode = 422
      throw new Error("Digite a id do usuário");
    }

    const idDaListaUsuario = await connection(TABLE_USERS)
      .select("*")
      .where("id", "=", `${user_id}`)

    if (idDaListaUsuario.length === 0){
      errorCode = 404
      throw new Error("Usuário não encontrado.")
    }

    const idDaListaDeCompras = await connection(TABLE_PURCHASES)
      .select("*")
      .where("user_id", "=", `${user_id}`)

    if (idDaListaDeCompras.length === 0){
      errorCode = 404
      throw new Error("O usuário não realizou nenhuma compra.")
    }

    const result = await connection.raw(`
    SELECT 
    Labe_Users.email,
    Labe_Products.name,
    Labe_Products.price,
    Labe_Purchases.quantity,
    Labe_Purchases.total_price
    FROM Labe_Purchases
    INNER JOIN Labe_Products
    ON Labe_Products.id = Labe_Purchases.product_id
    INNER JOIN Labe_Users
    ON Labe_Users.id = Labe_Purchases.user_id
    WHERE user_id = "${user_id}";
    `)

    res.status(200).send({ lista: result })

} catch (error) {
  res.status(errorCode).send({ message: error.message })
}
}
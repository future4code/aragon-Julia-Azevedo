import { Request, Response } from "express"
import { PurchaseDatabase } from "../database/PurchaseDatabase"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchaseDatabase = new PurchaseDatabase()
        const result = await purchaseDatabase.getUserPurchase(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
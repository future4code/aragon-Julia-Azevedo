import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

export const getUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const query = req.query.q
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if (query) {
            const result = await connection(TABLE_USERS)
                .select("*")
                .where("email", "LIKE", `%${query}%`)
                .limit(limit)
                .offset(offset)

            return res.status(200).send({ users: result })
        }

        const result = await connection(TABLE_USERS)
            .select("*")
            .limit(limit)
            .offset(offset)

        res.status(200).send({ users: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
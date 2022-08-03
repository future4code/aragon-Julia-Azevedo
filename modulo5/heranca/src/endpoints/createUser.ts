import { Request, Response } from "express"
import { User } from "../models/User"
import { UserDatabase } from "../database/UserDatabase"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        // const newUser: User = {
        //     id: Date.now().toString(),
        //     email,
        //     password
        // }

        const user = new User(
            Date.now().toString(),
            email,
            password
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)
        
        res.status(201).send({ message: "Usuário criado", user: user })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
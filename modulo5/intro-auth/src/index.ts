import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { PingController } from './controller/PingController'
import { UserController } from './controller/UserController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const userController = new UserController()

// endpoint de teste
app.get("/ping", pingController.ping)

// cadastra usuário
app.post("/signup", userController.signup)

// faz login
app.post("/login", userController.login)

// exibe todos os usuários
app.get("/users", userController.getAllUsers)

// modifica cadastro
app.put("/users", userController.update)

// deleta usuário
app.delete("/users/:id", userController.delete)

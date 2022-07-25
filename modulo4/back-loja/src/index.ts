import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { deleteProduct } from './endpoints/deleteProduct'
import { deleteUser } from './endpoints/deleteUser'
import { getProduct } from './endpoints/getProduct'
import { getUser } from './endpoints/getUser'
import { getPurchase } from './endpoints/getPurchase'
import { postPurchase } from './endpoints/postPurchase'
import { postProduct } from './endpoints/postProduct'
import { postUser } from './endpoints/postUser'
import { putProduct } from './endpoints/putProduct'
import { putUser } from './endpoints/putUser'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// deleta produto ok
app.delete("/products/:id", deleteProduct)
// deleta usuario ok
app.delete("/users/:id", deleteUser)
// lista produtos ok
app.get("/products", getProduct)
// lista as compras de determinado usuário FALTA
app.get("/users/:user_id/purchases", getPurchase)
// lista usuários ok
app.get("/users", getUser)
// cadastra produto ok 
app.post("/products", postProduct)
// registra compras do usuário FALTA
app.post("/purchases", postPurchase)
// cadastra usuário ok 
app.post("/users", postUser)
// edita produto
app.put("/products/:id", putProduct)
// edita usuário
app.put("/users/:id", putUser)
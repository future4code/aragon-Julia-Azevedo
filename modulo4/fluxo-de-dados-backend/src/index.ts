import express, { Request, Response } from 'express'
import cors from 'cors'
import { Produto, produtos } from './data'

const app = express()

app.use(cors())
app.use(express.json())

// 1 
app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send({ mensagem: "Testando API" })
    } catch (error) {
        res.status(500).send({ mensagem: error.message })
    }
})

// 3 Crie um endpoint que retorna todos os produtos existentes na lista.

app.get('/produtos', (req: Request, res: Response) => {
    try {
        res.status(200).send(produtos)
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

// 4 Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

app.post('/produtos', (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            res.statusCode = 422
            throw new Error("Erro: Digite o nome e o preço do produto.");
        }

        if (typeof name !== "string") {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido de 'name', deve ser do tipo string.");
        }

        if (typeof price !== "number") {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido de 'price', deve ser do tipo number.");
        }

        if (price <= 0) {
            res.statusCode = 422
            throw new Error("Erro: preço inválido, digite um número maior que 0.");
        }

        const novoProduto: Produto = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        produtos.push(novoProduto)

        res.status(201).send({
            mensagem: "ok",
            produtos: produtos
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

// 5 Crie um endpoint que edita o preço de um determinado produto e retorna o produto atualizado.

app.put('/produtos/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { price } = req.body

        if (!id || !price) {
            res.statusCode = 422
            throw new Error("Erro: Digite o nome e o preço do produto.");
        }

        if (typeof price !== "number") {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido de 'price', deve ser do tipo number.");
        }

        if (price <= 0) {
            res.statusCode = 422
            throw new Error("Erro: preço inválido, digite um número maior que 0.");
        }

        const editaPreco = produtos.map((produto) => {
            if (produto.id === id) {
                produto.price = price
            }
            return produto
        }).filter((item) => {
            return item.id === id
        })

        res.status(200).send({
            mensagem: "ok",
            produto: editaPreco
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

// 6 Construa um endpoint que deleta um determinado produto.

app.delete('/produtos/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            res.statusCode = 422
            throw new Error("Erro: Digite a id do produto.")
        }

        const novaLista = produtos.filter((produto) => {
            return produto.id !== id
        })

        res.status(200).send({
            mensagem: "ok",
            produtos: novaLista
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})


app.listen(3003, () => { 
    console.log("Servidor rodando em http://localhost:3003")
})
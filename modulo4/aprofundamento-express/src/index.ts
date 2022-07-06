import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// 1
app.get("/ping", (req: Request, res: Response) => {
    res.send({ mensagem: "pong!" })
})

// 2
type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

let afazeres: Afazer[] = [
    {
        userId: 1,
        id: 1,
        title: "Arrumar quarto",
        completed: false
    },

    {
        userId: 1,
        id: 2,
        title: "Trocar lençol",
        completed: true
    },

    {
        userId: 2,
        id: 3,
        title: "Lavar louça",
        completed: false
    },

    {
        userId: 2,
        id: 4,
        title: "Passar roupa",
        completed: true
    },

]

// 3

app.get("/afazeres/:userId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const filtro = afazeres.filter((afazer) => {
        return afazer.userId === userId
    })
    res.send({
        usuario: userId,
        Afazeres: filtro
    })
})

// 4

app.post("/afazeres"), (req: Request, res: Response) => {
    const { userId, title } = req.body
    const deletaAfazer = afazeres[afazeres.length - 1]

    const novoAfazer: Afazer = {
        userId: userId,
        id: deletaAfazer.id + 1,
        title: title,
        completed: false
    }

    afazeres.push(novoAfazer)

    res.send({
        mensagem: "Afazer modificado com sucesso!",
        afazeres: novoAfazer
    })
}

// 5

app.put("/afazeres/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { completed } = req.body

    const edita = afazeres.map((afazer) => {
        if (afazer.id === id) {
            return { ...afazer, completed: completed }
        }
    })

    res.send({
        mensagem: "O Status do afazer foi modificado!",
        afazeres: edita
    })
})

// 6

app.delete("/afazeres/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const index = afazeres.findIndex(afazer => afazer.id === id)

    if (index === -1) {
        return res.send({
            mensagem: "Produto não encontrado",
            id: id
        })
    }

    afazeres.splice(index, 1)

    res.send({
        mensagem: "Afazer deletado com sucesso!",
        afazeres: afazeres
    })
})

// 7

app.get('/afazeres', (req: Request, res: Response) => {
    const busca = req.query.busca

    if (busca !== "true" && busca !== "false") {
        return res.send({
            busca: busca,
            afazeres: afazeres
        })
    }

    if (busca === "true") {
        const resultado = afazeres.filter((afazer) => {
            return afazer.completed === true
        })

        return res.send({
            afazeres: resultado,
            busca: busca,
        })
    } else {
        const resultado = afazeres.filter((afazer) => {
            return afazer.completed === false
        })

        return res.send({
            afazeres: resultado,
            busca: busca
        })
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})
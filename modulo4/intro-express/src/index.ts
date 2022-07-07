import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// 1

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})

// 2

type User = {
    id: number,
    nome: string,
    phone: number,
    email: string
}

const listaUsers: User[] = [
    {
        id: 1,
        nome: "julia",
        phone: 874247923,
        email: "julia@hotmail.com"
    },

    {
        id: 2,
        nome: "luisa",
        phone: 983404833,
        email: "luisa@hotmail.com"
    },

    {
        id: 3,
        nome: "marcela",
        phone: 823479835,
        email: "marcela@hotmail.com"
    }
]

// 3

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(listaUsers)
})

// 4

app.get('/users/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const user = listaUsers.filter(user => user.id === id)
    res.status(200).send(user)
})

// 5

app.put('/users/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const phone: number = req.body

    let alteraTelefone: User[] = []

    listaUsers.map((user) => {

        if (user.id === id) {
            user.phone = phone
            alteraTelefone.push(user)
        }
    })

    res.status(200).send(["O telefone foi alterado com sucesso!", alteraTelefone])
})

// 6

app.delete('/users/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const index: number = listaUsers.findIndex(user => user.id === id)
    listaUsers.splice(index, 1)

    res.status(200).send(listaUsers)
})


app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))

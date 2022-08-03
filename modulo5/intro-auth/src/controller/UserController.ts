import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {

    /* Crie um endpoint chamado de signup para cadastrar novos usuários. Ele deve
    receber o apelido, o e-mail e a senha do novo usuário. Em sucesso, deve ser retornada
    uma mensagem e também um token de acesso que guarda o id gerado da pessoa.

    Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):
    - nickname, email e password devem ser fornecidos e serem do tipo string
    - nickname deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres
    - email deve ter um formato válido e único, não podendo repetir no banco de dados */

    public signup = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { nickname, email, password } = req.body

            if (!nickname) {
                errorCode = 400
                throw new Error("Parâmetro nickname faltando");
            }

            if (!email) {
                errorCode = 400
                throw new Error("Parâmetro email faltando");
            }

            if (!password) {
                errorCode = 400
                throw new Error("Parâmetro password faltando");
            }

            if (typeof nickname !== "string") {
                errorCode = 422
                throw new Error("Nickname deve ser do tipo string.");
            }

            if (typeof email !== "string") {
                errorCode = 422
                throw new Error("E-mail deve ser do tipo string.");
            }

            if (typeof password !== "string") {
                errorCode = 422
                throw new Error("Password deve ser do tipo string.");
            }

            if (nickname.length < 3) {
                errorCode = 422
                throw new Error("Nickname deve possuir ao menos 3 caracteres.")
            }

            if (!email.includes("@")) {
                errorCode = 422
                throw new Error("E-mail inválido.")
            }

            if (password.length < 6) {
                errorCode = 422
                throw new Error("Password deve possuir ao menos 6 caracteres.")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const user = new User(
                id,
                nickname,
                email,
                password
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({
                message: "Cadastro realizado com sucesso",
                token
            })
        } catch (error) {
            if (
                typeof error.message === "string"
                && error.message.includes("Duplicate entry")
            ) {
                return res.status(400).send("Email already taken")
            }
            res.status(errorCode).send({ message: error.message })
        }
    }

    /* Crie um endpoint chamado de login para logar de usuários já cadastrados. Ele
    deve receber o e-mail e a senha da pessoa e em caso de sucesso retornar a mensagem
    e o token de acesso.

    Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):
    - email e password devem ser fornecidos e serem do tipo string
    - password deve possuir ao menos 6 caracteres
    - email deve ter um formato válido
    - O usuário com o e-mail fornecido deve existir no sistema
    - email e password recebidos devem ser exatamente iguais aos do cadastro no banco de dados */

    public login = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { email, password } = req.body

            if (!email) {
                errorCode = 400
                throw new Error("Parâmetro email faltando");
            }

            if (!password) {
                errorCode = 400
                throw new Error("Parâmetro password faltando");
            }

            if (typeof email !== "string") {
                errorCode = 422
                throw new Error("E-mail deve ser do tipo string.");
            }

            if (typeof password !== "string") {
                errorCode = 422
                throw new Error("Password deve ser do tipo string.");
            }

            if (password.length < 6) {
                errorCode = 422
                throw new Error("Password deve possuir ao menos 6 caracteres.")
            }

            if (!email.includes("@")) {
                errorCode = 422
                throw new Error("E-mail inválido.")
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if (!userDB) {
                errorCode = 401
                throw new Error("Email não foi cadastrado")
            }

            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password
            )

            if (user.getPassword() !== password) {
                errorCode = 401
                throw new Error("Senha inválida")
            }

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(200).send({
                message: "Login realizado com sucesso",
                token
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    /* Crie um endpoint protegido que busca usuários do sistema. Ele deve fazer uma
    busca completa de todos os usuários cadastrados e retornar a lista com seus ids,
    nicknames e emails. Caso tentem acessá-lo sem token deve ser retornada uma mensagem
    de erro.

    Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):
    - O usuário identificado no token deve existir no banco de dados
    - Possibilidade de busca por nickname via query params “search”, caso a query não seja
    passada então é retornada a lista com todas as ids, nicknames e emails cadastrados */

    public getAllUsers = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const userDatabase = new UserDatabase()
            const usersDB = await userDatabase.getAllUsers()

            const users = usersDB.map((user) => {
                return new User(
                    user.id,
                    user.nickname,
                    user.email,
                    user.password
                )
            })

            res.status(200).send({ users })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    /* Crie um endpoint protegido de edição de dados do próprio usuário. Este endpoint
    poderá modificar o apelido, o e-mail e/ou a senha cadastrados. Caso tentem acessá-lo
    sem token deve ser retornada uma mensagem de erro.

    Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):
    - Deve ser recebido pelo menos um dado para ser editado dentre nickname, email e password
    - Se o novo nickname for fornecido ele deve ser uma string e ter ao menos 3 caracteres
    - Se o novo password for fornecido ele deve ser uma string e ter ao menos 6 caracteres
    - Se o novo email for fornecido ele deve ser uma string com formato válido e não ser
    repetido com o antigo e os que já existem cadastrados
    - O usuário identificado no token deve existir no banco de dados */

    public update = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const { nickname, email, password } = req.body

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 422
                throw new Error("Token ausente ou inválido.")
            }

            if (!nickname && !email && !password) {
                errorCode = 422
                throw new Error("Informe ao menos um dos 3 parâmetros.")
            }

            if (nickname.length < 3) {
                errorCode = 422
                throw new Error("Nickname deve possuir ao menos 3 caracteres.")
            }

            if (!email.includes("@")) {
                errorCode = 422
                throw new Error("E-mail inválido.")
            }

            if (password.length < 6) {
                errorCode = 422
                throw new Error("Password deve possuir ao menos 6 caracteres.")
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if (userDB) {
                errorCode = 409
                throw new Error("Email já cadastrado.")
            }

            await userDatabase.editData(payload.id, nickname, email, password)

            res.status(200).send({ message: "Dados alterados com sucesso!" })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    /* Crie um endpoint protegido que deleta via id a conta de um usuário cadastrado.

    Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):
    - id do usuário a ser deletado deve existir no sistema
    - O usuário logado não poderá remover a si mesmo */

    public delete = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const id = req.params.id

            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(id)

            res.status(200).send({ message: "Usuário deletado com sucesso!" })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}
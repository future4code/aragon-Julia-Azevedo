import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    /* ## Exercício 1

    Crie um endpoint chamado de signup para cadastrar novos usuários. Ele deve receber o name, email e password do novo usuário. Em sucesso, deve ser retornada uma mensagem e também um token de acesso que guarda o id e a role da pessoa.

    Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

    - name, email e password devem ser fornecidos e serem do tipo string
    - name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres
    - email deve ter um formato válido e único, não podendo repetir no banco de dados */

    public signup = async (input: ISignupInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'password' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new Error("E-mail já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }

        /* ## Exercício 2

        Crie um endpoint chamado de login para logar de usuários já cadastrados. Ele deve receber o email e o password da pessoa, e em caso de sucesso retornar a mensagem e o token de acesso.

        Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

        - email e password devem ser fornecidos e serem do tipo string
        - password deve possuir ao menos 6 caracteres
        - email deve ter um formato válido
        - O usuário com o e-mail fornecido deve existir no sistema */

    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'password' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB) {
            throw new Error("E-mail não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }
}
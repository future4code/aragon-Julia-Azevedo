import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Funcionario } from "./endpoints/types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// busca usuário

app.get("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const busca = req.query.busca as string

    if (busca) {
      const [resultado] = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE LOWER(nome) LIKE "%${busca.toLowerCase()}%";
      `)

      return res.status(200).send({ funcionarios: resultado })
    }

    const [resultado] = await connection.raw(`
    SELECT * FROM Funcionarios;
    `)

    res.status(200).send({ funcionarios: resultado })
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

// cria usuário

app.post("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { nome, email } = req.body

    if (!nome || !email) {
      errorCode = 400
      throw new Error("Parâmetros nome e/ou email faltando.");
    }

    if (typeof nome !== "string" || typeof email !== "string") {
      errorCode = 422
      throw new Error("Os parâmetros devem ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("O e-mail deve conter o caractere @");
    }

    const [funcionarios] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "&{email}";
    `)

    const buscaFuncionario = funcionarios[0]

    if (buscaFuncionario) {
      errorCode = 409
      throw new Error("E-mail já cadastrado.");
    }

    if (nome.length < 4) {
      errorCode = 422
      throw new Error("O nome deve conter ao menos 4 caracteres");
    }

    const novoFuncionario: Funcionario = {
      id: Date.now(),
      nome: nome,
      email: email
    }

    await connection.raw(`
    INSERT INTO Funcionarios (id, nome, email)
    VALUES ("${novoFuncionario.id}", "${novoFuncionario.nome}", "${novoFuncionario.email}");
    `)

    res.status(201).send({ mensagem: "Funcionario cadastrado com sucesso", funcionario: novoFuncionario })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

// edita email do funcionario

app.put("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email as string

    if (!email) {
      errorCode = 422
      throw new Error("Digite o e-mail")
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("O e-mail deve ser do tipo string.")
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("O e-mail deve conter o caractere @");
    }

    const [idFuncionarios] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE id = "${id}";
    `)

    const buscaFuncionarioId = idFuncionarios[0]

    if (!buscaFuncionarioId) {
      errorCode = 404
      throw new Error("A id do funcionário não foi encontrada");
    }

    const [funcionarios] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "${email}";
    `)

    const funcionarioEncontrado = funcionarios[0]

    if (funcionarioEncontrado) {
      errorCode = 409
      throw new Error("E-mail já cadastrado.");

    }

    await connection.raw(`
    UPDATE Funcionarios
    SET email = "${email}"
    WHERE id = "${id}";
    `)

    res.status(200).send({ mensagem: "E-mail atualizado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

// deleta usuário

app.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 422
      throw new Error("Digite o id");
    }

    const [funcionariosId] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE id = "${id}";
    `)

    const funcionarioEncontradoId = funcionariosId[0]

    if (!funcionarioEncontradoId) {
      errorCode = 404
      throw new Error("Funcionário não encontrado")
    }

    await connection.raw(`
    DELETE FROM Funcionarios
    WHERE id = "${id}";
    `)

    res.status(200).send({ mensagem: "Funcionário deletado com sucesso." })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})
import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

// O mínimo esperado é a funcionalidade de remoção de um perfume através de sua id.

export const deletePerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (!id) {
          errorCode = 400
          throw new Error("Digite a id do perfume.");
        }

        const productExists = await connection(TABLE_PERFUMES)
            .select()
            .where({ id })

        if (productExists.length === 0) {
            errorCode = 404
            throw new Error("Perfume não encontrado.")
        }

        await connection(TABLE_PERFUMES)
            .delete()
            .where({ id })
      
        res.status(200).send({ message: "Perfume deletado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
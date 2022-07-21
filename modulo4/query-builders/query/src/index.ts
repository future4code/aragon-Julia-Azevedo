import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getPerfume } from "./endpoints/getPerfume";
import { putPerfume } from "./endpoints/putPerfume";
import { postPerfume } from "./endpoints/postPerfume";
import { deletePerfume } from "./endpoints/deletePerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

app.get("/perfumes", getPerfume)

app.post("/perfumes", postPerfume)

app.put("/perfumes/:id", putPerfume)

app.delete("/perfumes/:id", deletePerfume)
import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { pegaProduto } from "./endpoints/pegaProduto";
import { removeProduto } from "./endpoints/removeProduto";
import { criaProduto } from "./endpoints/criaProduto";
import { editaProduto } from "./endpoints/editaProduto";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});


// Endpoint de teste
app.get("/ping", ping)

// Get produto
app.get("/products", pegaProduto)

// Post produto
app.post("/products", criaProduto)

// Put produto
app.put("/products/:id", editaProduto)

// Remove produto
app.delete("/products/:id", removeProduto)

// back-end/server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Configura __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Habilita CORS
app.use(cors());

// Permite receber JSON em POST/PUT
app.use(express.json());

// Detecta se estamos em produção (assume que se existir dist, é produção)
const isProduction = fs.existsSync(path.join(__dirname, "../front-end/dist"));

if (isProduction) {
  console.log("Rodando em modo produção");

  // Servir arquivos estáticos da pasta dist do React
  app.use(express.static(path.join(__dirname, "../front-end/dist")));
  app.use(express.static(path.join(__dirname, "../front-end/src/pages")));

  // Qualquer rota não reconhecida retorna index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
  });
} else {
  console.log("Rodando em modo dev");
  app.get("/", (req, res) => {
    res.send("Backend rodando.");
  });
}

// Rotas da API
app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

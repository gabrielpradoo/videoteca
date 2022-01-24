const express = require("express");
const routes = express.Router();

// GET: Buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parte da informação
// DELETE: Deletar uma informação

routes.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = routes;

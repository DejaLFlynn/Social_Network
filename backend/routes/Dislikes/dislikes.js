const dislikes = require('express').Router();
const { createDislike, removeDislike } = require("../../queries/dislikes");

dislikes.post("/", createDislike);
dislikes.delete("/:id", removeDislike);

module.exports = dislikes;
const dislikes = require('express').Router();
const { createDislike } = require("../../queries/dislikes");

dislikes.post("/", createDislike);

module.exports = dislikes;
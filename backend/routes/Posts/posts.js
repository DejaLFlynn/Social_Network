const posts = require('express').Router();
const { createPost } = require("../../queries/posts");

posts.post("/", createPost);

module.exports = posts
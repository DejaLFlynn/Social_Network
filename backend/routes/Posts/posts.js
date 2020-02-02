const posts = require('express').Router();
const { createPost, deletePost, getPostsForUser } = require("../../queries/posts");

posts.post("/", createPost);
posts.delete("/:id", deletePost);
posts.get("/:id", getPostsForUser);

module.exports = posts
const users = require("express").Router()
const {createUser, deleteUser, getUser, getAllUsers, getUserSearch} = require("../../queries/users")

users.post("/", createUser)

users.delete("/:id", deleteUser)

users.get("/:id", getUser)

users.get("/", getAllUsers)

users.get("/", getUserSearch)

module.exports = users
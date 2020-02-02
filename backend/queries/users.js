const db = require("../db/index")

const createUser = async (req,res,next) => {
    try {
        let user = await db.none("INSERT into users (name, age, email, photo_url) VALUES (${name}, ${age}, ${email}, ${photo_url})", req.body)
        res.status(200).json({
            user,
            status: "Success",
            message: "New User Created"
        })
    } catch(error) {
        next(error)
    }
}

const deleteUser = async (req,res,next) => {
    try {
        await db.none("DELETE from users WHERE id = $1", req.params.id)
        res.status(200).json({
            status: "Success",
            message: "User Deleted"
        })
    } catch(error) {
        next(error)
    }
}

const getUser = async (req,res,next) => {
    try {
        let user = await db.one("SELECT * from users WHERE id = $1", req.params.id)
        res.status(200).json({
            user,
            status: "Success",
            message: "User Fetched"
        })
    }catch(error) {
        next(error)
    }
}

const getAllUsers = async (req,res,next) => {
    try {
        let users = await db.any("SELECT * from users")
        res.status(200).json({
            users,
            status: "Success",
            message: "Users Fetched"
        })
    } catch(error) {
        next(error)
    }
}

const getUserSearch = async (req,res,next) => {
    try {
        let users = await db.any("SELECT * from users WHERE use LIKE %$1", req.params.id)
    } catch(error) {
        next(error)
    }
}


module.exports = {createUser, deleteUser, getUser, getAllUsers, getUserSearch}

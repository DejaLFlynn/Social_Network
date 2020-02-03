const db = require("../db/index")

const addHater = async (req,res,next) => {
    try {
        let hater = await db.none("INSERT into haters (curr_user, hater_id) VALUES (${curr_user}, ${hater_id}", req.body)
        res.status(200).json({
            status: "Success",
            message: "Following Hater"
        })
    }
}


const removeHater = async (req,res,next) => {
    try {
        let hater = await db.none("DELETE from haters WHERE id = $1", req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Unfollowed Hater"
        })
    }
}


const getHaters = async (req,res,next) => {
    try {
        let haters = await db.any("SELECT * from haters WHERE curr_user = $1", req.params.id)
        res.status(200).json({
            haters,
            status: "Success",
            message: "Haters Fetched"
        })
    } catch(error) {
        next(error)
    }
}

const getHaterFeed = async (req,res,next) => {
    try {
        let haterFeed = await db.any("SELECT * from haters INNER JOIN posts ON hater_id = user_post_id WHERE curr_user = $1", req.params.id)
        res.status(200).json({
            haterFeed,
            status: "Success",
            message: "Hater Feed Extracted"
        })
    }
}



module.exports = {getHaters}
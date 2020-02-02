const db = require("../db/index")

const getHaters = async (req,res,next) => {
    try {
        let haters = await db.any("SELECT * from haters WHERE curr_user = $1", req.params.id)
        res.status(200).json({
            haters,
            status: "Success",
            message: "Users Fetched"
        })
    } catch(error) {
        next(error)
    }
}

module.exports = {getHaters}
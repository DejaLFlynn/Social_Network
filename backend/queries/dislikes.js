const db = require("../db/index")

const createDislike = async(req, res, next) => {
    try {
        let dislike = await db.one("INSERT INTO dislikes (dislike_user, dislike_post) VALUES(${dislike_user}, ${dislike_post}) RETURNING *", req.body);
        res.status(200).json({
            dislike,
            status: "success",
            message: "one dislike added"
        })
    } catch(err) {
        next(err)
    }
}

module.exports = {createDislike}
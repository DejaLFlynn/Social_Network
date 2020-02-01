const db = require("../db/indexs");

const getPostsForUser = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts WHERE user_posts_id = $1", req.params.id);
    res.status(200).json({
      posts,
      status: "success",
      message: "user post retrieved"
    })
  } catch(err) {
    next(err);
  }
}

module.exports = {getPostsForUser}
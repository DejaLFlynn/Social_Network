const db = require("../db/index");

const createPost = async (req, res, next) => {
  try {
    let post = await db.one("INSERT INTO posts (body) VALUES(${body}) RETURNING *", req.body);
    res.status(200).json({
      post,
      status: "success",
      message: "user created post"
    })
  } catch (err) {
    next(err)
  }
}

const getPostsForUser = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts WHERE user_posts_id = $1", req.params.id);
    res.status(200).json({
      posts,
      status: "success",
      message: "user posts retrieved"
    })
  } catch(err) {
    next(err);
  }
}

module.exports = {getPostsForUser, createPost}
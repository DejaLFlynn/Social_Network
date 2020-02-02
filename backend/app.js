const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const postsRouter = require("./routes/Posts/posts")

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/posts", postsRouter)

app.listen(port, () => console.log("server running on port ", port))
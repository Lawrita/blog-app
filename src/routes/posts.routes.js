const createPost = require("../controllers/posts.controllers/create-post");
const deletePost = require("../controllers/posts.controllers/delete-post");
const getAllPosts = require("../controllers/posts.controllers/get-all-posts");
const getPost = require("../controllers/posts.controllers/get-post");
const updatePost = require("../controllers/posts.controllers/update-post");


const postsRouter = require("express").Router();

postsRouter.get("/", getAllPosts);
postsRouter.put("/", createPost);
postsRouter.post("/", updatePost);
postsRouter.delete("/", deletePost);
postsRouter.post("/", getPost);

module.exports = postsRouter;  

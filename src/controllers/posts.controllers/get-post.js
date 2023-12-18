const Post = require("../../models/post.model")
const constants = require("../../configs/constants")


module.exports = async (req, res) => {
    
    try{
        const id = req.params.id

        const post = await Post.findById(id)

        return res.status(200).json({
            message: "successful",
            post
        })
    } catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
    }
  
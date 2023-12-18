const constants = require("../../configs/constants");
const Post = require("../../models/post.model");
const Joi = require("joi");
const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    body: Joi.string().required(),
    category: Joi.string()
      .valid(...constants.postCategories)
      .required(),
    });





// create an endpoint to delete
module.exports = async (req, res) => {
    const Post = req.params.Post;
    const {error} = schema.validate(Post);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        statusText: "fail",
      });
    }
  
  
    try {
      const deletePost = await Post.delete(Post);
      if (!deletePost) {
        console.log("error");
        return;
      }
    

      app.delete("/delete/:id", async(req, res)=>{
        const id = req.params.id
        const Post = await Post.findByIdAndDelete(id)
    
        return res.status(200).json({message: "deleted successfuly"})
    })
    
      return res
        .status(201)
        .json({ statusText: "Successfully deleted the post", data: deletePost,
     });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
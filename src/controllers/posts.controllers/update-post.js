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

    
// create an endpoint to update a post 
module.exports = async (req, res) => {
    const Post = req.params
    const {error} = schema.validate(Post);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        statusText: "fail",
      });
    }
  
  
    try {
      const upDatePost = await Post.upDate(Post);
      if (!upDatePost) {
        console.log("error");
        return;
      }
    
      app.put("/updatepost/:id", async (req, res)=>{

        try {
            const id = req.params.id
            const {postId, title, description, body, category} =req.body
            const upDateDescription = await tech.findByIdAndUpDate({_id: id}, {
                postId,
                title,
                description, 
                body, 
                category,
                web
        }, {new: true})
        
            return res.status(200).json({
                message: "updated successfully", 
                upDatePost
            })
        
        }catch(error){
            return res.status(500).json({message: error.message})
            }
        
        })
    
    
      return res
        .status(201)
        .json({ statusText: "Successfully updated", data: upDatePost,
     });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
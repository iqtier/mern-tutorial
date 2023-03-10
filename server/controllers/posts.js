import Post from "../models/postModel.js";

export const getPosts = async (req, res) =>{
    try{
        const post = await Post.find()
        
        res.status(200).json(post)
    }catch(err){
        res.status(404).json({message: err.message});
    }
} 

export const createPost = async (req, res) =>{
    const post = req.body
    const newPost = new Post(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
} 
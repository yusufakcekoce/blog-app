import express from "express";
import Blogs from "../models/Blogs.js";

const router = express.Router();

router.post("/",async (req,res) => {
    const newBlog = new Blogs(req.body);

    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    }catch(err) {
        res.status(500).json(err);
    }
})

export default router;
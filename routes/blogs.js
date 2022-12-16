import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog.js";
import Blogs from "../models/Blogs.js";

const router = express.Router();

// Create a blog
router.post("/", createBlog);

// Update a blog
router.put("/:id", updateBlog);

// Delete a blog
router.delete("/:id", deleteBlog);

// Get a blog

router.get("/:id", getBlog);

// Get all blog
router.get("/", getBlogs);

export default router;

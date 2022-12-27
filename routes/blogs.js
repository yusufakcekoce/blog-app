import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import cors from "cors";

const router = express.Router();
router.use(cors());

// Create a blog
router.post("/", createBlog);

// Update a blog
router.put("/:id", verifyAdmin, updateBlog);

// Delete a blog
router.delete("/:id", verifyAdmin, deleteBlog);

// Get a blog
router.get("/:id", getBlog);

// Get all blog
router.get("/", getBlogs);

export default router;

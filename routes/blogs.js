import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog.js";
import Blogs from "../models/Blogs.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import cors from "cors";

// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true,
//   optionSuccessStatus: 200,
// };

const router = express.Router();
router.use(cors());

// Create a blog
router.post("/", verifyAdmin, createBlog);

// Update a blog
router.put("/:id", verifyAdmin, updateBlog);

// Delete a blog
router.delete("/:id", verifyAdmin, deleteBlog);

// Get a blog
router.get("/:id", getBlog);

// Get all blog
router.get("/", getBlogs);

export default router;

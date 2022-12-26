import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import cors from "cors";

const router = express.Router();
router.use(cors());

// Update a User
router.put("/:id", verifyUser, updateUser);

// Delete a User
router.delete("/:id", verifyAdmin, deleteUser);

// Get a User
router.get("/:id",  getUser);

// Get all User
router.get("/", getUsers);

export default router;

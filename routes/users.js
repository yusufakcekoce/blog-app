import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello you are loged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello you are loged in and you can delete account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are loged in and you can delete all accounts");
});

// Update a User
router.put("/:id", updateUser);

// Delete a User
router.delete("/:id", deleteUser);

// Get a User
router.get("/:id", getUser);

// Get all User
router.get("/", getUsers);

export default router;

import express from "express";
import { login, register } from "../controllers/auth.js";
import cors from "cors";

const router = express.Router();
router.use(cors());

router.post("/register", register);
router.post("/login", login);

export default router;

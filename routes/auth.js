import express from "express";

const router = express.Router();

router.get("/register", (req,res) => {
    res.send("auth register endpoint!")
})

export default router;

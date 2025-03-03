import express from "express";
import { getSavedPost, SavePost } from "../controller/user.controller.js";

const router = express.Router();
router.get("/savedPost", getSavedPost);
router.patch("/savePost", SavePost);

export default router;

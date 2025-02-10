import express from "express";
import {
  AllPosts,
  createPost,
  deletePost,
  getPost,
} from "../controller/post.controller.js";

const router = express.Router();

router.get("/all", AllPosts);
router.get("/:slug", getPost);
router.post("/createpost", createPost);
router.delete("/:id", deletePost);

export default router;

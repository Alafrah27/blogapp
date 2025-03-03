import express from "express";
import {
  AllPosts,
  createPost,
  deletePost,
  getPost,
  UploadFile,
} from "../controller/post.controller.js";

const router = express.Router();
router.get("/upload-auth", UploadFile);
router.get("/", AllPosts);
router.get("/:slug", getPost);
router.post("/create", createPost);
router.delete("/:id", deletePost);

export default router;

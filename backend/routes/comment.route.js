import express from "express";
import {
  addPostComment,
  deletePostComment,
  getPostComment,
} from "../controller/comment.controller.js";

const router = express.Router();
router.get("/:postId", getPostComment);
router.post("/:postId", addPostComment);
router.delete("/:id", deletePostComment);

export default router;

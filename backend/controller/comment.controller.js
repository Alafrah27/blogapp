import Comment from "../model/comment.model.js";
import User from "../model/user.model.js";

export const getPostComment = async (req, res) => {
  const postId = req.params.postId;

  const comments = await Comment.find({ post: postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  if (!comments) {
    return res.status(404).json({ message: "Comments not found" });
  }

  return res.status(200).json(comments);
};

export const addPostComment = async (req, res) => {
  const userClerkId = req.auth.userId;
  const postId = req.params.postId;
  if (!userClerkId)
    return res.status(401).json({ message: "you are not authorized" });

  const user = await User.findOne({ clerkUserId: userClerkId });

  const comment = new Comment({
    ...req.body,
    post: postId,
    user: user._id,
  });
  const savedComment = await comment.save();
  setTimeout(() => {
    return res.status(201).json(savedComment);
  }, 3000);
};

export const deletePostComment = async (req, res) => {
  const commentId = req.params.id;
  const userClerkId = req.auth.userId;
  if (!userClerkId) {
    return res.status(401).json({ message: "you are not authorized" });
  }

  const role = req.auth.sessionClaims?.metadtata?.role || "user";

  if (role !== "admin") {
    await Comment.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "comment deleted successfully",
    });
  }

  const user = await User.findOne({ clerkUserId: userClerkId });

  const comment = await Comment.findByIdAndDelete({
    _id: commentId,
    user: user._id,
  });

  if (!comment) {
    return res.status(400).json({ message: "you are not owner to delete" });
  }
  return res.status(200).json({ message: "comment deleted successfully" });
};

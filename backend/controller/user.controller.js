import User from "../model/user.model.js";

export const getSavedPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json({
      message: "you are not authorized",
    });
  }

  const user = await User.findOne({ clerkUserId });

  return res.status(200).json(user.savedPosts);
};
export const SavePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;
  if (!clerkUserId) {
    return res.status(401).json({
      message: "you are not authorized",
    });
  }

  const user = await User.findOne({ clerkUserId });

  const isSaved = user.savedPosts.some((id) => id === postId);

  if (!isSaved) {
   await  User.findByIdAndUpdate(
      user._id,
      { $push: { savedPosts: postId } },
      { new: true }
    );
  } else {
    await User.findByIdAndUpdate(
      user._id,
      { $pull: { savedPosts: postId } },
      { new: true }
    );
  }

  res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
};

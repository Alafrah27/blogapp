import Post from "../model/post.model.js";

export const AllPosts = async (req, res) => {
  const post = await Post.find();
  res.status(200).json(post);
};
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "post deleted successfully",
  });
};

export const createPost = async (req, res) => {
  const newpost = new Post(req.body);
  await newpost.save();
  res.status(200).json({
    message: "post created successfully",
    newpost,
  });
};

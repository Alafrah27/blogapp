import ImageKit from "imagekit";
import Post from "../model/post.model.js";
import User from "../model/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const AllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const query = {};
  const cat = req.query.cat;
  const author = req.query.author;
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;

  if (cat) {
    query.category = cat;
  }

  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }

  if (author) {
    const user = await User.findOne({ username: author }).select("_id");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    query.user = user._id;
  }

  let sortbj = { createdAt: -1 };
  switch (sortQuery) {
    case "newest":
      sortbj = { createdAt: -1 };
      break;
    case "oldest":
      sortbj = { createdAt: 1 };
      break;
    case "popular":
      sortbj = { visit: -1 };
      break;
    case "trending":
      sortbj = { visit: -1 };
      query.createdAt = {
        $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
      };
      break;
    default:
      break;
  }

  const post = await Post.find(query)
    .populate("user", "username ")
    .sort(sortbj)
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Post.countDocuments();
  const hasMore = page * limit < total;
  return res.status(200).json({ post, hasMore });
};
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "user",
    "username img"
  );
  return res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const role = req.auth.sessionClaims?.metadtata?.role || "user";

  if (role !== "admin") {
    await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "post deleted successfully",
    });
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const post = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  if (!post) {
    return res
      .status(400)
      .json({ message: "you are not owner to delete the post" });
  }
  return res.status(200).json({
    message: "post deleted successfully",
  });
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });
  const post = await newPost.save();
  return res.status(200).json(post);
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRAVITE_KEY,
});
export const UploadFile = async (req, res) => {
  var result = imagekit.getAuthenticationParameters();
  res.status(200).send(result);
};

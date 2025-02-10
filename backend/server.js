import express from "express";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import commentRoute from "./routes/comment.route.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();
app.use(clerkMiddleware());
app.use("/webhook", commentRoute);
app.use(express.json());
app.use(cors());

const POST = process.env.POST || 5000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/comment", commentRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(POST, () => {
  console.log(`server is running on port ${POST}`);
  connectDB();
});

import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./lib/connnectDB.js";
import dotenv from "dotenv";

dotenv.config();
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import commentRoute from "./routes/comment.route.js";
import webhoobRoute from "./routes/webhook.route.js";

const app = express();

app.use(clerkMiddleware());
app.use("/webhook", webhoobRoute);

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors({origin: "*"));
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

const POST = process.env.PORT || 5000;

app.listen(POST, () => {
  console.log(`server is running on ${POST}`);
  connectDB();
});

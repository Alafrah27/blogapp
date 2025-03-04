import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl = process.env.MONGO_ATLAS;
export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("DB connected");
  } catch (error) {
    console.log("db error:", error);
    process.exit(1);
  }
};

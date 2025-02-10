import express from "express";
import { webhook } from "../controller/webhook.controller.js";

const router = express.Router();

router.post ("/clerk", webhook)


export default router;
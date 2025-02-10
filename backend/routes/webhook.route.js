import express from "express";
import { webhook } from "../controller/webhook.controller.js";
import bodyParser from "body-parser";

const router = express.Router();

router.post("/clerk", bodyParser.raw({ type: "application/json" }), webhook);

export default router;

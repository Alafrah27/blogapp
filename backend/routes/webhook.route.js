import express from "express";
import bodyParser from "body-parser";
import { webhook } from "../controller/webhook.controller.js";

const router = express.Router();

router.post("/clerk", bodyParser.raw({ type: "application/json" }), webhook);

export default router;

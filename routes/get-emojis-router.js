import express from "express";
import { getEmojis } from "../controllers/get-emojis-controller.js";

const router = express.Router();
router.get("/", getEmojis);

export default router;
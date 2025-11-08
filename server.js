import express from "express";
import getEmojisRouter from "./routes/get-emojis-router.js";

export const app = express();
app.use("/api/emojis", getEmojisRouter);
import express from "express";
import getEmojisRouter from "./routes/get-emojis-router.js";

export const app = express();
app.use("/api/emojis", getEmojisRouter);

// Running the site locally
app.use(express.static("public"));
app.listen(8080, () => console.log("View site at: http://localhost:8080"));

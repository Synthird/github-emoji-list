import express from "express";
import { Octokit } from "octokit";

const octokit = new Octokit({
	auth: process.env.TOKEN
});

const router = express.Router();

router.get("/", async (_, res) => {
	try {
		const emojis = await octokit.request("GET /emojis");
		res.json(emojis.data);
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).json({ message: error.response.data.message });
		} else {
			console.log(error);
		}
	}
});

export default router;

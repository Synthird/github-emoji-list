import { Octokit } from "octokit";

const octokit = new Octokit({
	auth: process.env.TOKEN
});

export async function getEmojis(req, res) {
	try {
		const result = await octokit.request("GET /emojis"),
			emojis = result.data;

		res.json(emojis);
	} catch (error) {
		res.status(404).json({ message: "Cannot get emojis" });
	}
}
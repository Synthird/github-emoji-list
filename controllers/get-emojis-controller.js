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
		if (error.response) {
			res.status(error.response.status).json({ message: error.response.data.message });
		} else {
			console.log(error);
		}
	}
}

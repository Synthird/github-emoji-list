# GitHub emoji list

A list of emojis taken from the [GitHub API](https://docs.github.com/en/rest/emojis/emojis).

This is helpful if you are searching for emojis you want to use in your README files.

## Built with

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en)
- [Octokit.js](https://github.com/octokit/octokit.js/)
- [Vercel](https://vercel.com/)

## Running the site locally

1. Install [Node.js](https://nodejs.org/en) on your machine.
1. Fork this repository.
2. Clone the forked repository into your machine.
3. Install dependencies.

```bash
npm i
```

4. Create a GitHub personal access token. (A fine-grained one with default settings.)
5. Copy the token.
6. Create a ```.env``` file in the root folder of your cloned repository with the following:

```.env
TOKEN=PASTE-YOUR-TOKEN-HERE
```

7. Run the site locally.

```bash
npm start
```

## License

This repository contains the AGPL version 3 license. You must give credit if you want to use its source code. If you make any changes, and your project is accessed through a network, you must open source it under the same license.

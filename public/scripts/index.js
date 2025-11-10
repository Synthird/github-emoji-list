const emojiList = document.getElementById("emoji-list"),
	loadingText = document.getElementById("loading-text");

fetch("/api/emojis")
	.then(res => {
		if (!res.ok) {
			throw new Error();
		}

		return res.json();
	})
	.then(emojis => {
		const names = Object.keys(emojis);

		for (const name of names) {
			emojiList.innerHTML += `
				<div>
					<p>${name}</p>
					<p><img alt=${name} src=${emojis[name]}></p>
				</div>
			`;
		}

		loadingText.remove();
	})
	.catch(err => loadingText.innerHTML = `<p>${err}</p>`);
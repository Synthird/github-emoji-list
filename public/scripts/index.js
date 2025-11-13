const emojiList = document.querySelector(".emoji-list"),
	loadingText = document.getElementById("loading-text");

fetch("/api/emojis")
	.then(res => {
		if (!res.ok) {
			throw new Error();
		}

		return res.json();
	})
	.then(emojis => {
		for (const name of Object.keys(emojis)) {
			emojiList.innerHTML += `
				<div>
					<p>${name}</p>
					<p><img src=${emojis[name]}></p>
				</div>
			`;
		}

		loadingText.remove();
	})
	.catch(err => loadingText.innerHTML = `<p>${err}</p>`);

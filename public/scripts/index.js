const emojiList = document.querySelector(".emoji-list"),
	searchDiv = document.querySelector(".search-div"),
	searchBar = document.getElementById("search-bar"),
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
					<p class="emoji-name">${name}</p>
					<p><img src=${emojis[name]}></p>
				</div>
			`;
		}

		loadingText.remove();
		searchDiv.style.display = "block";
	})
	.catch(err => loadingText.innerHTML = `<p>${err}</p>`);

searchBar.addEventListener("keyup", () => {
	const searchBarValue = searchBar.value,
		emojis = document.querySelectorAll(".emoji-name");

	for (const emoji of emojis) {
		const emojiContainer = emoji.parentElement;

		if (!emoji.textContent.includes(searchBarValue.toLowerCase())) {
			emojiContainer.style.display = "none";
		} else {
			emojiContainer.style.display = "block";
		}
	}
});

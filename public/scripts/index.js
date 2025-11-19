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
			const emojiDiv = document.createElement("div"),
				nameElement = document.createElement("p"),
				image = document.createElement("img");

			nameElement.textContent = name;
			emojiDiv.appendChild(nameElement);

			image.src = emojis[name];
			emojiDiv.appendChild(image);

			emojiList.appendChild(emojiDiv);
		}

		loadingText.remove();
		searchDiv.style.display = "block";
	})
	.catch(err => {
		loadingText.removeChild(loadingText.firstElementChild);

		const errorElement = document.createElement("p");
		errorElement.textContent = err;
		loadingText.appendChild(errorElement);
	});

searchBar.addEventListener("input", () => {
	const searchBarValue = searchBar.value,
		emojis = document.querySelectorAll(".emoji-list p");

	for (const emoji of emojis) {
		const emojiContainer = emoji.parentElement;

		if (!emoji.textContent.includes(searchBarValue.toLowerCase())) {
			emojiContainer.style.display = "none";
		} else {
			emojiContainer.style.display = "block";
		}
	}
});

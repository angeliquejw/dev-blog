const sanitizeHTML = require("sanitize-html");

module.exports = function getWebmentionsForUrl(webmentions, url) {
	const likes = ["like-of"];
	const retweets = ["repost-of"];
	const messages = ["mention-of", "in-reply-to"];

	const URLmatch = (entry) => {
		let mentionedURL = entry["wm-target"];
		mentionedURL = new URL(mentionedURL);
		mentionedURL.hash = "";
		if (mentionedURL.href === url) return true;
		return false;
	};
	const hasRequiredFields = (entry) => {
		const { author, published, content } = entry;
		return author.name && published && content;
	};
	const allowedHTML = {
		allowedTags: ["b", "i", "em", "strong", "a"],
		allowedAttributes: {
			a: ["href"],
		},
	};
	const sanitize = (entry) => {
		const { html, text } = entry.content;

		if (html) {
			// really long html mentions, usually newsletters or compilations
			entry.content.value =
				html.length > 2000
					? `Mentioned this post in <a href="${entry["wm-source"]}">${entry["wm-source"]}</a>`
					: sanitizeHTML(html, allowedHTML);
		} else {
			entry.content.value = sanitizeHTML(text, allowedHTML);
		}

		return entry;
	};

	return {
		likes: webmentions
			.filter(URLmatch)
			.filter((entry) => likes.includes(entry["wm-property"])),
		retweets: webmentions
			.filter((entry) => entry["wm-target"] === url)
			.filter((entry) => retweets.includes(entry["wm-property"])),
		// .filter(hasRequiredFields)
		// .map(sanitize),
		messages: webmentions
			.filter((entry) => entry["wm-target"] === url)
			.filter((entry) => messages.includes(entry["wm-property"]))
			.filter(hasRequiredFields)
			.map(sanitize),
	};
};

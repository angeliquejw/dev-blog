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
	const sanitize = (entry) => {
		const { content } = entry;
		if (content["content-type"] === "text/html") {
			content.value = sanitizeHTML(content.value);
		}
		return entry;
	};

	return {
		likes: webmentions
			.filter(URLmatch)
			.filter((entry) => likes.includes(entry["wm-property"])),
		retweets: webmentions
			.filter((entry) => entry["wm-target"] === url)
			.filter((entry) => retweets.includes(entry["wm-property"]))
			.filter(hasRequiredFields)
			.map(sanitize),
		messages: webmentions
			.filter((entry) => entry["wm-target"] === url)
			.filter((entry) => messages.includes(entry["wm-property"]))
			.filter(hasRequiredFields)
			.map(sanitize),
	};
};

export default function (eleventyConfig) {
	eleventyConfig.addCollection("bits", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("bits");
	});

	eleventyConfig.addCollection("posts", function (collectionsApi) {
		const coll = collectionsApi.getFilteredByTag("posts");

		for (let i = 0; i < coll.length; i++) {
			const prevPost = coll[i - 1];
			const nextPost = coll[i + 1];

			coll[i].data["prevPost"] = prevPost;
			coll[i].data["nextPost"] = nextPost;
		}

		return coll;
	});

	eleventyConfig.addCollection("tags", (collectionApi) => {
		let tags = new Set();
		let posts = collectionApi.getFilteredByTag("posts");
		posts.forEach(p => {
			let tops = p.data.tags;
			if (tops) {
				tops.forEach(t => tags.add(t));
			}
		});
		return Array.from(tags).sort();
	});
}
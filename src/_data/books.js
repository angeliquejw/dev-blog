const fetch = require("node-fetch").default;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const SGurl = "https://app.thestorygraph.com/currently-reading/angeliquejw/";

async function getBooks() {
	const response = await fetch(SGurl);
	const text = await response.text();
	const dom = await new JSDOM(text);
	const bookPane = dom.window.document.querySelectorAll(".read-books .book-pane-content");

	const books = [];

	bookPane.forEach(function (book) {
		// the following code is v brittle and based on page markup and my page being public
		const title = book
			.querySelector(".book-title-author-and-series a[href^='/books/']")
			.textContent.trim();
		const author = book
			.querySelector(".book-title-author-and-series a[href^='/authors/']")
			.textContent.trim();
		const img = book.querySelector(".book-cover img").src;
		const url =
			"https://app.thestorygraph.com" +
			book.querySelector(".book-cover a").href;

		if (!books.flat().includes(title)) { books.push([title, author, img, url]); }
	});
	// console.log(books);
	return books;
}

module.exports = async function () {
	return await getBooks();
};

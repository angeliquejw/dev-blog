const SGurl = "https://app.thestorygraph.com/currently-reading/angeliquejw/";

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from "fs";

puppeteer.use(StealthPlugin());

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(SGurl, {
        waitUntil: "load",
    });
	await page.waitForSelector(".read-books");

	// const pageTitle = await page.title();
	// console.log(pageTitle);

	const bookData = await page.evaluate(() => {
		const bookPane = document.querySelectorAll(".read-books .book-pane-content");

		return Array.from(bookPane).map((book) => {
			const title = book
				.querySelector(".book-title-author-and-series a[href^='/books/']")
				.textContent.trim();
			const author = book
				.querySelector(".book-title-author-and-series a[href^='/authors/']")
				.textContent.trim();
			const img = book.querySelector(".book-cover img").src;
			const url = book.querySelector(".book-cover a").href;

			return { title, author, img, url };
		});
	});

	const books = [...new Set(bookData.map(JSON.stringify))].map(JSON.parse);

	// console.log(books);

	const filePath = "src/_data/reading.json";

	fs.writeFile(filePath, JSON.stringify(books, null, 2), (error) => {
		if (error) throw error;
		console.log("Updated reading.json");
	});

	await browser.close();
})();

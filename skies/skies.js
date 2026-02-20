import dotenv from "dotenv";
import fs from "fs";
import { createClient } from "tumblr.js";

// step 0: get our credentials and references
dotenv.config({
  path: [".env.local", ".env"]
});

const postsFilePath = "temp-sky.json";

// step 1: evaluate if we need to update our data
const localData = JSON.parse(fs.readFileSync(postsFilePath));
const localPosts = localData.length;

console.log(`Existing sky photos: ${localPosts}`);

const client = createClient({
  consumer_key: process.env.TUMBLR_CONSUMER_KEY,
  consumer_secret: process.env.TUMBLR_SECRET_KEY,
  token: process.env.TUMBLR_OATH_TOKEN,
  token_secret: process.env.TUMBLR_OATH_TOKEN_SECRET,
});

const blogInfo = await client.blogInfo(process.env.TUMBLR_BLOG);
const remotePosts = blogInfo.blog.total_posts;

const numMissing = remotePosts - localPosts;
console.log(`Missing photos: ${numMissing}`);

// step 3: if we have missing posts, get their data
if (numMissing > 0) {
  const lastPost = Array.from(localData).pop();
  const lastPostDate = lastPost.timestamp;

  const missingPosts = await client.blogPosts(process.env.TUMBLR_BLOG, { limit: numMissing, after: lastPostDate, sort: "asc" });

  const regex = /img\ssrc="(.*?)"/;

  const posts = missingPosts.posts.map((post) => {
    const imgURL = post.body.match(regex)[1];
    // we only want posts that we can return an image for
    if (imgURL) {
      return {
        id: post.id,
        post_url: post.post_url,
        date: post.date,
        timestamp: post.timestamp,
        state: post.state,
        body: post.body,
        img_url: imgURL,
      }
    }
  });

  // step 4: update our local JSON data with the missing posts
  localData.push(...posts);

  fs.writeFile(postsFilePath, JSON.stringify(localData, null, 2), (error) => {
    if (error) throw error;
    console.log(`New total of sky photos: ${localPosts}`);
  });
} else {
  console.log("Already up to date, no changes needed.");
}
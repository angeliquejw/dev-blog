import fs from 'fs';

// Define Cache Location and API Endpoint
const CACHE_DIR = 'cache'

// get cache contents from json file
function readFromCache() {
  const filePath = `${CACHE_DIR}/webmentions.json`

  if (fs.existsSync(filePath)) {
    const cacheFile = fs.readFileSync(filePath)
    return JSON.parse(cacheFile)
  }

  // no cache found.
  return {
    lastFetched: null,
    children: []
  }
}

export default async function () {
  const cache = readFromCache()

  if (cache.children.length) {
    console.log(
      `>>> ${cache.children.length} webmentions loaded from cache`
    )
  }

  return cache
}

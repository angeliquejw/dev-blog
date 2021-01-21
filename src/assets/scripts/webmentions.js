const sanitizeHTML = require('sanitize-html');

module.exports = function getWebmentionsForUrl(webmentions, url) {
  const likes = ['like-of'];
  const retweet = ['repost-of'];
  const messages = ['mention-of', 'in-reply-to'];

  const hasRequiredFields = entry => {
    const {
      author,
      published,
      content
    } = entry;
    return author.name && published && content;
  };
  const sanitize = entry => {
    const {
      content
    } = entry;
    if (content['content-type'] === 'text/html') {
      content.value = sanitizeHTML(content.value);
    }
    return entry;
  };

  return {
    'likes': webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => likes.includes(entry['wm-property'])),
    'retweet': webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => retweet.includes(entry['wm-property']))
      .filter(hasRequiredFields)
      .map(sanitize),
    'messages': webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => messages.includes(entry['wm-property']))
      .filter(hasRequiredFields)
      .map(sanitize)
  };
}

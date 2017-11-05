const parseMarkdownUrl = (date, rawUrl) => (
  `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}/`
);

const parseUrl = (date, rawUrl) => (
  `/${date}/${rawUrl}/`
);

export default {
  parseMarkdownUrl,
  parseUrl,
};

## Calpa's Blog

[![GitHub license](https://img.shields.io/github/license/calpa/blog.svg)](https://github.com/calpa/blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog)

Starter of Calpa's Blog.

If you like [my blog](https://calpa.me), please star it. Many thanks.

## Feature

1. Sitemap is supported
1. Contentful

## Prerequisites

1. Git
1. Node: any 8.x version starting with 8.5.0 or greater
1. A fork of the repo (for any contributions)
1. A clone of the this repo on your local machine

## Develop

How to start this project?

1. Install Gatsby-CLI

```
npm install --global gatsby-cli
```

2. Create new Gatsby project using this starter, `awesome-blog` is your blog's folder

```
gatsby new awesome-blog https://github.com/calpa/blog
```

3. Open the folder

```
cd awesome-blog
```

4. Run Development Server

   1. `npm start` to start the hot-reloading development server (powered by [Gatsby](https://www.gatsbyjs.org/))
   1. `open http://localhost:8000` to open the site in your favorite browser

5) Connect Contentful Server

## Configuration

Edit the export object in `data/config`

## Deploy

[My blog](https://calpa.me) is currently using Netlify, though, you may use Github Pages as an alternative.

- Github Pages

  `npm run deploy` to deploy the blog to Github Pages

- Netlify

  Auto Deploy

## TODO

1. Update from GatsbyJs v1.0 to v2.0
2. Extract Contentful id

## Troubleshooting

- For `window is defined`, wrap the require in check for window:

  ```JavaScript
  if (typeof window !== `undefined`) {
    const module = require("module");
  }
  ```

- `npm run reset` to clear the local cache
- Check [GatsbyJS Debugging Docs](https://www.gatsbyjs.org/docs/debugging-html-builds/)

## Contact

[Github: Calpa](https://github.com/calpa/)

## Gatsby Starter - Calpa's Blog

[![GitHub license](https://img.shields.io/github/license/calpa/gatsby-starter-calpa-blog.svg)](https://github.com/calpa/gatsby-starter-calpa-blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/gatsby-starter-calpa-blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/gatsby-starter-calpa-blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog)
[![Greenkeeper badge](https://badges.greenkeeper.io/calpa/gatsby-starter-calpa-blog.svg)](https://greenkeeper.io/)
[![Build Status](https://api.travis-ci.org/calpa/gatsby-starter-calpa-blog.svg?branch=master)](https://github.com/calpa/gatsby-starter-calpa-blog/blob/master/.travis.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/calpa/gatsby-starter-calpa-blog/badge)](https://www.codefactor.io/repository/github/calpa/gatsby-starter-calpa-blog)

[繁體中文](README-zh-Hant.md) | [简体中文](README-zh-Hans.md) | [English](README.md)

![HomePage](https://i.imgur.com/6Xd4yVQ.png)

Build a blog system like [Calpa's Blog](https://calpa.me) in ease.

If you like this project, please don't hesitate to star it. Thank you.

## Feature

### Structure

1. GatsbyJS v2, faster than faster
1. Google Analytics
1. Offline support
1. Web App Manifest
1. Page pagination
1. Netlify optimization
1. Awesome comment component (powered by [Gitalk](https://github.com/gitalk/gitalk))
1. Search Engine Optimization (SEO)
1. Parse Markdown in high speed (powered by [remarkable](https://github.com/jonschlinkert/remarkable))
1. Support to sitemap

### Design

1. Lazy loading (powered by [lozad.js](https://github.com/ApoorvSaxena/lozad.js))
1. Responsive Web Design
1. Font Awesome is auto loaded (powered by [react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
1. Scroll smoothly (powered by [smooth-scroll](https://github.com/cferdinandi/smooth-scroll))
1. Show system components (powered by [storybook](https://github.com/storybooks/storybook))

### Data Source

1. Source from Contentful, a flexible and easy-to-use content management system
1. For now, not just Contentful content source, you can use any database

### Customization for developers

1. SEO
1. Styled using SCSS
1. Data Source

## Get Started

### Deploy with Netlify

Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/calpa/gatsby-starter-calpa-blog" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template.

Next, it will build and deploy the new site on Netlify, bringing you to the blog system when the build is complete.

You may use Contentful as your content management system.

### Code with Codesandbox

Use the button below to code with the blog system:

[![Edit blog](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/calpa/gatsby-starter-calpa-blog/tree/master/)

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
gatsby new awesome-blog https://github.com/calpa/gatsby-starter-calpa-blog
```

3. Open the folder

```
cd awesome-blog
```

4. Run Development Server

   1. `npm start` to start the hot-reloading development server (powered by [Gatsby](https://www.gatsbyjs.org/))
   1. `open http://localhost:8000` to open the site in your favorite browser

5. Connect Contentful Server

   1. add the following config into `.env.development` file

   ```
   API_BASE_URL = 'https://cdn.contentful.com'
   API_SPACE_ID = Your Contentful Space ID
   API_TOKEN = Your Content Delivery (Preview) API - access token
   ```

   If you are using contentful preview API, then all unpublished content will be available.

## Configuration

Edit the export object in `data/config`

Note: [To look up theme_color hex code, click here.](https://www.colorhexa.com/)

```JavaScript
module.exports = {
  title: 'your blog title here',
  maxPages: 12
  meta: {
    description: 'blog description',
    keyword: 'blog, JavaScript',
    theme_color: '#hexcode',
    favicon: 'https:yourimageurl.com',
    google_site_verification: 'your google verification hash',
  },
  name: 'your name',
  email: 'your_email@gmail.com',
  iconUrl: 'https://youricon.jpg',
  License: 'by',
  url: 'https://yourblog.me',
  about: '/2018/05/01/about-your-name/',
  // Sidebar
  zhihuUsername: 'your zhiu user name here',
  githubUsername: 'your github user name here',
  friends: [
    {
      title: 'friend title',
      href: 'link to their blog',
    }
  ]
```

Plugins in the configuration file:

```JavaScript
gaOptimizeId: 'GTM-WHP7SC5',
gaTrackId: 'UA-84737574-3',
navbarList: [
  {
    href: '/stats/',
    title: 'stat title',
  },
  {
    href: '/tags/',
    title: 'tags',
  },
  {
    href: '/guestbook/',
    title: 'guestbook',
  },
  {
    href: '/2018/10/04/about-your-blog/',
    title: 'your title',
  },
],
redirectors: [
  {
    fromPath: '/',
    toPath: '/page/1',
  },
],
```

Gitalk plugin configuration

```JavaScript
gitalk: {
    clientID: '18255f031b5e11edd98a',
    clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
    repo: 'calpa.github.io',
    owner: 'calpa',
    admin: ['calpa'],
    distractionFreeMode: true,
  },
}
```

## Content Model

1. Posts

To create a post, just provide the following object model:

```json
{
  "name": "Post",
  "fields": {
    "title": "Post Title",
    "headerImgur": "header Image Link",
    "headerBackgroundColor": "#66ccff",
    "tags": "tag1, tag2, tag3",
    "url": "awesome-post",
    "createdDate": "new Date() or other dayjs supported datetime value",
    "content": "your markdown content",
    "jueJinLikeIconLink": "掘金 Badge Icon Url",
    "jueJinPostLink": "掘金 Post Url"
  }
}
```

2. Headers

There are two configurable headers, [Homepage](https://calpa.me) and [tags page](https://calpa.me/tags/).

```json
{
  "name": "Headers",
  "fields": {
    "purpose": "Tags or Home",
    "headerImage": "header Image",
    "createdDate": "new Date() or other dayjs supported datetime value",
    "title": "Display Title",
    "titleVisible": "Do you want to show your title in the header?",
    "subTitle": "Display a smaller wordings",
    "subTitleVisible": "Do you want to show a smaller wordings in the header?"
  }
}
```

## Deploy

[Calpa's blog](https://calpa.me) is currently using Netlify, though, you may use Github Pages as an alternative.

- Github Pages

  `npm run deploy` to deploy the blog to Github Pages

- Netlify

  Auto Deploy

## Troubleshooting

- For `window is defined`, wrap the require in check for window:

  ```JavaScript
  if (typeof window !== `undefined`) {
    const module = require("module");
  }
  ```

- `npm run reset` to clear the local cache
- Check [GatsbyJS Debugging Docs](https://www.gatsbyjs.org/docs/debugging-html-builds/)

## Scripts

1. Backup config.js as raw-config.js, create config.json (npm start)

```
node ./scripts/index.js
```

2. Delete raw-config.js and create config.js (do this before you commit)

```
npm run revert
```

## Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more information.

And don't hesitate to put your star and watch this starter project.

## Contact

If you are interested in this project, please feel free to contact [Calpa Liu](calpaliu@gmail.com).

Thanks For Contribute... :)

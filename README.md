## Calpa's Blog

[![GitHub license](https://img.shields.io/github/license/calpa/blog.svg)](https://github.com/calpa/blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog) [![Greenkeeper badge](https://badges.greenkeeper.io/calpa/blog.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://github.com/calpa/blog/blob/master/.travis.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/calpa/blog/badge)](https://www.codefactor.io/repository/github/calpa/blog)
 
![HomePage](https://i.imgur.com/6Xd4yVQ.png)

Starter of Calpa's Blog.

If you like [my blog](https://calpa.me), please star it. Many thanks.

## Feature

1. Responsive Design
1. Parse Markdown in high speed (powered by [remarkable](https://github.com/jonschlinkert/remarkable))
1. Support to sitemap
1. Font Awesome is auto loaded (powererd by [react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
1. Source from Contentful, a flexible and easy-to-use content management system

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

5. Connect Contentful Server

   1. add the following config into `.env.development` file

   ```
   API_SPACE_ID = Your Contentful Space ID
   API_TOKEN = Your Content Delivery (Preview) API - access token
   ```

   If you are using contentful preview API, then all unpublished content will be available.

## Configuration

Edit the export object in `data/config`

Note: [To look up theme_color hex code, click here.](https://www.colorhexa.com/)

```
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
  ```
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-84737574-3',
  ga_domain: 'auto',
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
  contentful: {
    API_SPACE_ID: 'api_id_here',
    API_TOKEN: 'api_token_hash_here',
  },
  redirectors: [
    {
      fromPath: '/',
      toPath: '/page/1',
    },
  ],
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

## TODO

1. Update the number of post pages automatically.

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

If you are interested in this project, please feel free to contact [Calpa Liu](calpaliu@gmail.com).

Thanks For Contribute... :)

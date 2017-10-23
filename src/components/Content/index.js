import React from 'react';

import marked from 'marked';

import config from '../../../data/config';

const getBody = (mdFile) => {
  // As Gastby's markdownRemark add '---' at the beginnings
  // We need to extract the body part only
  const secondHR = mdFile.indexOf('---', 4) + 3;
  const body = mdFile.slice(secondHR);

  // Override the renderer methods
  const renderer = new marked.Renderer();
  renderer.image = (href, title, text) => {
    console.log(href, title, text);
    return `<img src=${href} title=${title || text} text=${text}/>`;
  };

  const html = marked(body, { renderer });
  return html;
};


const Content = ({ post }) => (
  <div>
    <div className="col-lg-8 col-sm-8 post-container order-md-2">
      <div
        dangerouslySetInnerHTML={{ __html: getBody(post) }}
      />
      <hr />
    </div>

    {config.post.tableOfContents &&
      <div className="col-lg-2 col-sm-4 order-md-3" />
    }
  </div>
);

export default Content;

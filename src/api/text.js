import marked from 'marked';
import { parseImageTag } from './images';

const getBody = async (mdFile, remark = false) => {
  let body;
  if (remark === true) {
    // As Gastby's markdownRemark add '---' at the beginnings
    // We need to extract the body part only
    const secondHR = mdFile.indexOf('---', 4) + 3;
    body = mdFile.slice(secondHR);
  } else {
    body = mdFile;
  }

  // Override the renderer methods
  const renderer = new marked.Renderer();
  renderer.image = (href, title, text) =>
    parseImageTag({ href, title, text });

  const toc = {};

  renderer.heading = (text, level) => {
    let id;
    const link = text.match(/<a.*>(.*)<\/a>/);
    if (link) {
      id = link[1];
    } else {
      id = text.match(/[\u4e00-\u9fa5\S]+/g).join('');
    }
    toc[level] = toc[level] || [];
    toc[level].push(id);
    return `<h${level} id="${id}">${text}</h${level}>`;
  };

  const html = marked(body, { renderer });
  return { html, toc };
};

export {
  getBody,
};

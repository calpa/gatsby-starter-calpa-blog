import marked from 'marked';
import { parseImageTag } from './images';

const getBody = (mdFile, remark = false) => {
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
  const html = marked(body, { renderer });
  return html;
};

export {
  getBody,
};

import marked from 'marked';
import { parseImageTag } from './images';

const getBody = (mdFile) => {
  // As Gastby's markdownRemark add '---' at the beginnings
  // We need to extract the body part only
  const secondHR = mdFile.indexOf('---', 4) + 3;
  const body = mdFile.slice(secondHR);

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

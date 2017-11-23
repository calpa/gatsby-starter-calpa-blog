import marked from 'marked';
import Remarkable from 'remarkable';
import highlightjs from 'highlight.js';
import { getGalleryImage } from './images';

const beautifyCode = (code, language = 'javascript') => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

const getContent = async (mdFile) => {
  const md = new Remarkable({
    highlight(str, lang) {
      return beautifyCode(str, lang);
    },
  });
  const html = md.render(mdFile);
  return { html };
};

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
    getGalleryImage({ href, title, text });

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

  renderer.code = (code, language = 'javascript') => {
    // Check whether the given language is valid for highlight.js.
    const validLang = !!(language && highlightjs.getLanguage(language));
    // Highlight only if the language is valid.
    const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
    // Render the highlighted code with `hljs` class.
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
  };

  const html = marked(body, { renderer });
  return { html, toc };
};

const getFirstParagraph = (content) => {
  const introduction = content.match(/[\n]+(.*)[\n]/);
  return introduction[1].substring(0, 140);
};

export {
  getContent,
  getBody,
  getFirstParagraph,
};

/* eslint-disable import/no-extraneous-dependencies, import/order, import/no-self-import */
const Remarkable = require('remarkable');
const { escapeHtml, replaceEntities } = require('remarkable/lib/common/utils');
const { getGalleryImage } = require('./images');
const hljs = require('highlight.js/lib/highlight');

const beautifyCode = (code, language = 'javascript') => {
  ['javascript', 'bash'].forEach((langName) => {
    // Using require() here because import() support hasn't landed in Webpack yet
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const langModule = require(`highlight.js/lib/languages/${langName}`);
    hljs.registerLanguage(langName, langModule);
  });
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && hljs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? hljs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

const extractId = (text = '') => {
  let id;
  const link = text.match(/<a.*>(.*)<\/a>/);
  if (link) {
    [id] = link;
  } else {
    // Extract Chinese and English wordings
    const temp = text.match(/[\u4e00-\u9fa5\S]+/g);
    if (temp) {
      id = temp.join('');
    }
  }
  return id;
};

const getContent = async (mdFile) => {
  const toc = [];
  const md = new Remarkable({
    highlight(str, lang) {
      return beautifyCode(str, lang);
    },
  });

  // Add image to fancybox
  md.renderer.rules.image = (tokens, idx) => {
    const { src, title, alt } = Remarkable.utils.escapeHtml(tokens[idx]);
    return getGalleryImage({ href: src, title, text: alt });
  };

  md.renderer.rules.heading_open = (tokens, idx) => {
    const id = extractId(tokens[idx + 1].content);
    toc.push(id);
    return `<h${tokens[idx].hLevel} id=${id}>`;
  };

  md.renderer.rules.table_open = () => '<div class="table-responsive"><table class="table table-striped">';

  md.renderer.rules.table_close = () => '</table></div>';

  md.renderer.rules.blockquote_open = () => '<blockquote class="blockquote">';

  md.renderer.rules.link_open = (tokens, idx) => {
    const title = tokens[idx].title
      ? ` title="${escapeHtml(replaceEntities(tokens[idx].title))}"`
      : '';
    const href = escapeHtml(tokens[idx].href);
    const isExternal = href.charAt(0) !== '/';
    const target = isExternal ? 'target="_blank"' : '';
    const rel = isExternal ? 'rel="external nofollow noopener"' : '';
    return `<a ${rel} href="${href}"${title}${target}>`;
  };

  const html = md.render(mdFile);
  return { html, toc };
};

const getFirstParagraph = (content) => {
  const introduction = content.match(/[\n]+(.*)[\n]/);
  return introduction[1].substring(0, 140);
};

module.exports = {
  getContent,
  getFirstParagraph,
};

// s = Small Square (90×90)
// b = Big Square (160×160)
// t = Small Thumbnail (160×160)
// m = Medium Thumbnail (320×320)
// l = Large Thumbnail (640×640)
// h = Huge Thumbnail (1024×1024)
const defaultPicture = 'M795H8A.jpg';

const parseImgur = (rawImage, size = 'large') => {
  if (!rawImage) {
    return `https://i.imgur.com/${defaultPicture}`;
  }

  const mapping = {
    'small-square': 's',
    'big-square': 'b',
    small: 't',
    medium: 'm',
    large: 'l',
    huge: 'h',
  };

  // Don't resize the png image
  // as there is a transparent bug in imgur
  if (rawImage.match('(png)|(gif)')) {
    // Prevent double http url
    if (rawImage.match('http')) {
      return rawImage;
    }
    return `https://i.imgur.com/${rawImage}`;
  }

  const resizedImage = rawImage.replace(/(.*)\.(.*)/, `$1${mapping[size]}.$2`);
  // Prevent double http url
  if (resizedImage.match('http')) {
    return resizedImage;
  }
  return `https://i.imgur.com/${resizedImage}`;
};

const parseTitle = (title, text) => `title="${title || text}"`;

const parseImageTag = ({ href, title, text }) => `<img class="lozad d-block mx-auto" data-src=${parseImgur(
  href,
  'large',
)} ${parseTitle(title, text)} />`;

const getGalleryImage = ({ href, title, text }) => `<a data-fancybox="gallery" href="${parseImgur(
  href,
  'huge',
)}">${parseImageTag({ href, title, text })}</a>`;

module.exports = {
  parseImgur,
  parseImageTag,
  getGalleryImage,
};

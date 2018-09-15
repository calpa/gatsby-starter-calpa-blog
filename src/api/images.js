// s = Small Square (90×90)
// b = Big Square (160×160)
// t = Small Thumbnail (160×160)
// m = Medium Thumbnail (320×320)
// l = Large Thumbnail (640×640)
// h = Huge Thumbnail (1024×1024)
const getDefaultPicture = () => 'M795H8A.jpg';

const parseImgur = (rawImage, size = 'large') => {
  let subfix = '';
  const image = rawImage || getDefaultPicture();

  switch (size) {
    case 'small-square':
      subfix = 's';
      break;
    case 'big-square':
      subfix = 'b';
      break;
    case 'small':
      subfix = 't';
      break;
    case 'medium':
      subfix = 'm';
      break;
    case 'large':
      subfix = 'l';
      break;
    case 'huge':
      subfix = 'h';
      break;
    default:
      break;
  }
  // Don't resize the png image
  // as there is a transparent bug in imgur
  if (image.match('(png)|(gif)')) {
    // Prevent double http url
    if (image.match('http')) {
      return image;
    }
    return `https://i.imgur.com/${image}`;
  }

  const resizedImage = image.replace(/(.*)\.(.*)/, `$1${subfix}.$2`);
  // Prevent double http url
  if (resizedImage.match('http')) {
    return resizedImage;
  }
  return `https://i.imgur.com/${resizedImage}`;
};

const parseTitle = (title, text) => `title="${title || text}"`;

const parseImageTag = ({ href, title, text }) =>
  `<img class="lozad d-block mx-auto" data-src=${parseImgur(
    href,
    'large',
  )} ${parseTitle(title, text)} />`;

const getGalleryImage = ({ href, title, text }) =>
  `<a data-fancybox="gallery" href="${parseImgur(
    href,
    'huge',
  )}">${parseImageTag({ href, title, text })}</a>`;

module.exports = {
  parseImgur,
  parseImageTag,
  getGalleryImage,
};

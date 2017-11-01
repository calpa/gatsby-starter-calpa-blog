// s = Small Square (90×90)
// b = Big Square (160×160)
// t = Small Thumbnail (160×160)
// m = Medium Thumbnail (320×320)
// l = Large Thumbnail (640×640)
// h = Huge Thumbnail (1024×1024)

const getDefaultPicture = () => (
  Math.random() > 0.5 ? 'kkKoV4d.jpg' : 'YexhzBP.jpg'
);

const parseImgur = (headerImage, size = 'large') => {
  let subfix;

  headerImage = headerImage || getDefaultPicture(); // eslint-disable-line

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
    default:
      subfix = 'h';
  }

  // Don't resize the png image
  // as there is a transparent bug in imgur
  if (headerImage.match('png')) {
    // Prevent double http url
    if (headerImage.match('http')) {
      return headerImage;
    }
    return `https://i.imgur.com/${headerImage}`;
  }

  const resizedImage = headerImage.replace(/(.*)\.(.*)/, `$1${subfix}.$2`);
  // Prevent double http url
  if (resizedImage.match('http')) {
    return resizedImage;
  }
  return `https://i.imgur.com/${resizedImage}`;
};

const parseImageTag = ({ href, title, text }) =>
  `<img class="lozad" data-src=${parseImgur(href, 'large')} title=${title || text} />`;

export {
  parseImgur,
  parseImageTag,
  getDefaultPicture,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Image = ({ imageSrc }) => (
  <img
    className="d-block w-100"
    src={imageSrc}
    alt={imageSrc}
    style={{
      minHeight: '10rem',
      background: 'rgba(0, 0.3, 0.1, 0.5)',
    }}
  />
);

const LinkedImage = ({ target, imageSrc }) => (
  <Link to={target}>
    <Image imageSrc={imageSrc} />
  </Link>
);

const Item = ({ active, imageSrc, target }) => (
  <div className={`carousel-item${active ? ' active' : ''}`}>
    {target ? (
      <LinkedImage target={target} imageSrc={imageSrc} />
    ) : (
      <Image imageSrc={imageSrc} />
    )}
  </div>
);

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

LinkedImage.propTypes = {
  target: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

Item.propTypes = {
  active: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  target: PropTypes.string,
};

Item.defaultProps = {
  active: false,
  target: '',
};

export default Item;

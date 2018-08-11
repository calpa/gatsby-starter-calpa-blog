import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Tag from '../Tag';

const Header = ({
  img, title, subTitle, tags,
}) => (
  <div className="col-12 header" style={{ padding: 0 }}>
    <div
      className="img-container"
      style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${img})`,
          marginTop: -58,
          }}
    >
      {title && <h1 style={{ fontSize: 24 }}>{title}</h1>}
      {subTitle && <h2 style={{ fontSize: 22 }}>{subTitle}</h2>}
      <div className="tag">
        {tags &&
              tags.map(tag => (<Tag name={tag} key={tag} />))
        }
      </div>
    </div>
  </div>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  title: '',
  subTitle: '',
  tags: [],
};

export default Header;

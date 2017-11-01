import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

// import lozad from 'lozad';

import { parseImgur } from '../../api/images';

import './index.scss';

const parseMarkdownUrl = (date, rawUrl) => (
  `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}/`
);

const parseUrl = (date, rawUrl) => (
  `/${date}/${rawUrl}/`
);

const imageStyle = (headerImage, color) => ({
  background: `#${color} url(${parseImgur(headerImage, 'large')}) center/contain no-repeat`,
});

class Card extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.date = this.props.date;
    this.url = this.props.url;
    this.headerImage = this.props.headerImage;
    this.headerBackgroundColor = this.props.headerBackgroundColor;
    this.index = this.props.index;
  }
  /*
  componentDidMount() {
    const observer = lozad();
    observer.observe();
  }
  */
  render() {
    return (
      <div className="col-sm-12 pb-4">
        <Link
          to={parseUrl(this.date, this.url)}
        >
          <div
            className="card text-black bg-light border-info"
            role="button"
            tabIndex={this.index}
          >
            <div
              className="img-resized"
              style={imageStyle(this.headerImage, this.headerBackgroundColor)}
            />
            <div className="card-body">
              <h4 className="card-title">{this.title}</h4>
              <p className="card-text">{this.date}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string.isRequired,
  headerBackgroundColor: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;

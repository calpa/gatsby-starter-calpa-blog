import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';

// import lozad from 'lozad';

import { parseImgur } from '../../api/images';

import './index.scss';

const parseUrl = (date, rawUrl) => (
  `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}/`
);

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
      <div className="col-sm-6 pb-4">
        <div
          className="card text-black bg-light border-info"
          onClick={() => navigateTo(parseUrl(this.date, this.url))}
          role="button"
          tabIndex={this.index}
        >
          <img
            className="card-img-top"
            src={parseImgur(this.headerImage, 'large')}
            alt={`${this.title}`}
          />
          <div className="card-body">
            <h4 className="card-title">{this.title}</h4>
            <p className="card-text">{this.date}</p>
          </div>
        </div>
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

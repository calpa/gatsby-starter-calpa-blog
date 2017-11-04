import React from 'react';

import PropTypes from 'prop-types';

import Friend from '../Friend';

import './index.scss';

const Information = ({ totalCount }) => (
  <div className="d-none d-lg-block information">
    <hr />
    <p>共{totalCount}篇文章</p>
    <hr />
    <Friend />
  </div>
);


Information.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

export default Information;

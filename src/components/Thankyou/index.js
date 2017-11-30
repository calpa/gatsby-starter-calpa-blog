import React from 'react';
import PropTypes from 'prop-types';
import Clap from '../Clap';

const Thankyou = ({ uuid }) => (
  <div>
    <p>如果你覺得這篇文章寫得不錯的話，請拍手一下。</p>
    <Clap uuid={uuid} />
    <p>歡迎在下面的評論區留言。</p>
  </div>
);

Thankyou.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export default Thankyou;

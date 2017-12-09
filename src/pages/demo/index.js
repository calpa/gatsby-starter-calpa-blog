import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import ExternalLink from '../../components/ExternalLink';
import { demoList } from '../../../data/config';

const DemoItem = ({ href, title }) => (
  <Link to={href} href={href}>
    <p>
      {title}
    </p>
  </Link>
);

DemoItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Demo = () => (
  <div className="demo container">
    <div className="row">
      <div className="col">
        <h2>Demo Purpose</h2>
        <p>
          你可以在 <ExternalLink href="https://github.com/calpa/blog" title="Github" /> 獲取這個博客使用的代碼。
        </p>
        {demoList.map(demo =>
          (
            <DemoItem
              href={demo.href}
              title={demo.title}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default Demo;

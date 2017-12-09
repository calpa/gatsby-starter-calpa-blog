import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

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

const Demos = [
  {
    href: 'redux',
    title: 'Redux 例子',
  },
  {
    href: 'gun',
    title: 'Gun 例子',
  },
];

const Demo = () => (
  <div className="demo container">
    <div className="row">
      <div className="col">
        <h2>Demo</h2>
        {Demos.map(demo =>
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

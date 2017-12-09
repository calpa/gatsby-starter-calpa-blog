import React from 'react';

import './fonts.scss';

const fontsHant =
['han-sans-hant', 'han-sans-italic-hant',
  'han-serif-hant', 'han-serif-italic-hant',
  'han-cursive-hant', 'han-cursive-italic-hant',
];
  // 西文字體基型
const fonts =
['han-sans', 'han-sans-italic',
  'han-serif', 'han-serif-italic',
  'han-cursive', 'han-cursive-italic',
  'han-mono-hant', 'han-mono',
];

const description = ['夢裡不覺秋已深', '餘情豈是為他人'];

const testingWords = '永東國酬愛鬱靈鷹袋';

const Sample = ({ font, order }) => (
  <div className="col-sm-6 col-md-4 col-lg-2">
    <p className={font}>{font || '默認字體'}</p>
    <h1 className={font}>愛鬱詠酬袋，東國遇靈鷹。</h1>
    <h2 className={font}>我是H2</h2>
    <h3 className={font}>我是H3</h3>
    <h4 className={font}>我是H4</h4>
    <h5 className={font}>我是H5</h5>
    <hr />
    {description.map(words =>
      <p key={words} className={`${font} mb-1 custom-word`}>{words}</p>)
    }
    <hr />
  </div>
);


const Fonts = () => (
  <div className="row">
    <p>本頁面字體取自漢字標準格式</p>
    <div className="row">
      {fontsHant.map((font, index) => <Sample font={font} key={font} order={index} />)}
      {fonts.map((font, index) => <Sample font={font} key={font} order={index} />)}
    </div>
    <Sample />
  </div>
);

export default Fonts;

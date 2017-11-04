import React from 'react';

import ExternalLink from '../../ExternalLink';

import { friends } from '../../../../data/config';

const Friend = () => (
  <div>
    <p>友情鏈接</p>
    {friends.map(friend =>
    (
      <ExternalLink
        href={friend.href}
        title={friend.title}
        key={friend.title}
      />
    ))}
  </div>
);

export default Friend;

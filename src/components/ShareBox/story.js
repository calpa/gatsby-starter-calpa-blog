import React from 'react';

import { storiesOf } from '@storybook/react';

import installFontAwesome from '../../api/installFontAwesome';

import ShareBox from '.';

installFontAwesome();

storiesOf('Blog', module).add('ShareBox', () => <ShareBox />);

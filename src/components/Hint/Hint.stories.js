import React from 'react';
import { action } from '@storybook/addon-actions';

import Hint from './Hint';
import './Hint.css';

export default {
  component: Hint,
  title: 'Hint',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  hintId: '1',
  hintText: 'Hint text',
};


export const Default = () => {
  return <Hint data={{ ...Data }}  />;
};
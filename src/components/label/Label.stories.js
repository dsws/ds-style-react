import React from 'react';
import { action } from '@storybook/addon-actions';

import Label from './Label';
import './Label.css';

export default {
  component: Label,
  title: 'Label',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  id: '1',
  text: 'Primary Label',
  flag: ''
};


export const Default = () => {
  return <Label data={{ ...Data }}  />;
};

export const DefaultWithFlag = () => {
  return <Label data={{ ...Data, flag: "(required/optional)" }}  />;
};

export const Large = () => <Label data={{ ...Data, type: 'large', text: 'Secondary Label' }}  />;

export const Heading = () => (
  <Label data={{ ...Data, type: 'heading', text: 'Tertiary Label' }}  />
);
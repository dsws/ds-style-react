import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  decorators: [withA11y],
  parameters: {
    a11y: {
      // optional selector which element to inspect
      element: '#root',
      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      config: {},
      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
      options: {},
    },
  },
};

export const Data = {
  id: '1',
  text: 'Primary Button',
  skin: 'primary',
};

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export const Primary = () => {
  return <Button data={{ ...Data }} {...actionsData} />;
};

export const Secondary = () => <Button data={{ ...Data, skin: 'secondary', text: 'Secondary Button' }} {...actionsData} />;

export const Tertiary = () => (
  <Button data={{ ...Data, skin: 'tertiary', text: 'Tertiary Button' }} {...actionsData} />
);
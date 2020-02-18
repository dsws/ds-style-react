import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import './Input.css';

export default {
  component: Input,
  title: 'Input',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  inputId: '1',
  char: '',
  hintId: ''
};

export const actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),

};

export const Primary = () => {
  return <Input data={{ ...Data }} {...actionsData} />;
};

export const Input20 = () => <Input data={{ ...Data, char: '20' }} {...actionsData} />;

export const Input10 = () => <Input data={{ ...Data, char: '10' }} {...actionsData} />;

export const Input7 = () => <Input data={{ ...Data, char: '7' }} {...actionsData} />;

export const Input5 = () => <Input data={{ ...Data, char: '5' }} {...actionsData} />;

export const Input4 = () => <Input data={{ ...Data, char: '4' }} {...actionsData} />;

export const Input3 = () => <Input data={{ ...Data, char: '3' }} {...actionsData} />;

export const Input2 = () => <Input data={{ ...Data, char: '2' }} {...actionsData} />;

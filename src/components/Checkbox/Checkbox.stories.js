import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import './Checkbox.css';

export default {
  component: Checkbox,
  title: 'Checkbox',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  className: "ontario-checkboxes__input",
  id: "checkboxId",
  name: "checkboxName",
  value: "checkboxValue"
};

export const actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
};

export const Primary = () => {
  return <Checkbox  data={{ ...Data }} {...actionsData} />;
};


// <input class="ontario-checkboxes__input" id="{{this.checkboxId}}" name="{{this.checkboxName}}" type="checkbox" value="{{this.checkboxValue}}">


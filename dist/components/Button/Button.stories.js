import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Button from './Button';
import './Button.css';
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
      options: {}
    }
  }
};
export var Data = {
  id: '1',
  text: 'Primary Button',
  skin: 'primary'
};
export var actionsData = {
  onClickHandler: action('onClickHandler')
};
export var Primary = function Primary() {
  return React.createElement(Button, Object.assign({
    data: _objectSpread({}, Data)
  }, actionsData));
};
export var Secondary = function Secondary() {
  return React.createElement(Button, Object.assign({
    data: _objectSpread({}, Data, {
      skin: 'secondary',
      text: 'Secondary Button'
    })
  }, actionsData));
};
export var Tertiary = function Tertiary() {
  return React.createElement(Button, Object.assign({
    data: _objectSpread({}, Data, {
      skin: 'tertiary',
      text: 'Tertiary Button'
    })
  }, actionsData));
};
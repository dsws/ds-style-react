import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { action } from '@storybook/addon-actions';
import Hint from './Hint';
import './Hint.css';
export default {
  component: Hint,
  title: 'Hint',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
export var Data = {
  hintId: '1',
  hintText: 'Hint text'
};
export var Default = function Default() {
  return React.createElement(Hint, {
    data: _objectSpread({}, Data)
  });
};
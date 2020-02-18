import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { action } from '@storybook/addon-actions';
import Label from './Label';
import './Label.css';
export default {
  component: Label,
  title: 'Label',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
export var Data = {
  id: '1',
  text: 'Primary Label',
  flag: ''
};
export var Default = function Default() {
  return React.createElement(Label, {
    data: _objectSpread({}, Data)
  });
};
export var DefaultWithFlag = function DefaultWithFlag() {
  return React.createElement(Label, {
    data: _objectSpread({}, Data, {
      flag: "(required/optional)"
    })
  });
};
export var Large = function Large() {
  return React.createElement(Label, {
    data: _objectSpread({}, Data, {
      type: 'large',
      text: 'Secondary Label'
    })
  });
};
export var Heading = function Heading() {
  return React.createElement(Label, {
    data: _objectSpread({}, Data, {
      type: 'heading',
      text: 'Tertiary Label'
    })
  });
};
import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './Input';
import './Input.css';
export default {
  component: Input,
  title: 'Input',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
export var Data = {
  inputId: '1',
  "char": '',
  hintId: ''
};
export var actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur')
};
export var Primary = function Primary() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data)
  }, actionsData));
};
export var Input20 = function Input20() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '20'
    })
  }, actionsData));
};
export var Input10 = function Input10() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '10'
    })
  }, actionsData));
};
export var Input7 = function Input7() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '7'
    })
  }, actionsData));
};
export var Input5 = function Input5() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '5'
    })
  }, actionsData));
};
export var Input4 = function Input4() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '4'
    })
  }, actionsData));
};
export var Input3 = function Input3() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '3'
    })
  }, actionsData));
};
export var Input2 = function Input2() {
  return React.createElement(Input, Object.assign({
    data: _objectSpread({}, Data, {
      "char": '2'
    })
  }, actionsData));
};
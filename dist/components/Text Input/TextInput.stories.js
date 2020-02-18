import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { action } from '@storybook/addon-actions';
import TextInput from './TextInput';
import './TextInput.css';
export default {
  component: TextInput,
  title: 'TextInput',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
export var Data = {
  id: 'ontario-textinput-example-1',
  inputChar: '',
  labelText: 'Label Text',
  labelType: '',
  labelFlag: '',
  hintText: '',
  hintId: ''
};
export var actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur')
};
export var Default = function Default() {
  return React.createElement(TextInput, Object.assign({
    data: _objectSpread({}, Data)
  }, actionsData));
};
export var DefaultChar20 = function DefaultChar20() {
  return React.createElement(TextInput, Object.assign({
    data: _objectSpread({}, Data, {
      inputChar: 20,
      id: "ontario-textinput-example-2"
    })
  }, actionsData));
};
export var DefaultWithHint = function DefaultWithHint() {
  return React.createElement(TextInput, Object.assign({
    data: _objectSpread({}, Data, {
      hintText: "This info is on the back of your card",
      id: "ontario-textinput-example-3",
      hintId: "hint3"
    })
  }, actionsData));
};
export var DefaultWithHintLarge = function DefaultWithHintLarge() {
  return React.createElement(TextInput, Object.assign({
    data: _objectSpread({}, Data, {
      hintText: "This info is on the back of your card",
      hintId: "hint4",
      id: "ontario-textinput-example-infoOnCardLarge",
      labelType: "large"
    })
  }, actionsData));
};
export var DefaultWithHintAndFlag = function DefaultWithHintAndFlag() {
  return React.createElement(TextInput, Object.assign({
    data: _objectSpread({}, Data, {
      hintText: "This info is on the back of your card",
      hintId: "hint5",
      id: "ontario-textinput-example-infoOnCard",
      labelFlag: "(required)"
    })
  }, actionsData));
};
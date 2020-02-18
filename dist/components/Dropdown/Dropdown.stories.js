import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown';
import './Dropdown.css';
export default {
  component: Dropdown,
  title: 'Dropdown',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
export var Data = {
  id: 'ontario-select-example-1',
  name: 'ontario-select-example-1',
  placeholder: "Select an option",
  options: [{
    id: 0,
    value: 'Left'
  }, {
    id: 1,
    value: 'Right'
  }, {
    id: 2,
    value: 'Ambidextrous'
  }],
  labelText: 'Label Dropdown',
  labelType: '',
  labelFlag: '',
  hintText: '',
  hintId: '',
  inputChar: '',
  selected: ''
};
export var actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus') //onInputClicked: action('onInputClicked')

};
export var Primary = function Primary() {
  return React.createElement(Dropdown, Object.assign({
    data: _objectSpread({}, Data)
  }, actionsData));
};
export var PrimaryRequired = function PrimaryRequired() {
  return React.createElement(Dropdown, Object.assign({
    data: _objectSpread({}, Data, {
      labelFlag: "(Required)"
    })
  }, actionsData));
};
export var PrimaryRequiredSelected = function PrimaryRequiredSelected() {
  return React.createElement(Dropdown, Object.assign({
    data: _objectSpread({}, Data, {
      labelFlag: "(Optional)",
      selected: 2
    })
  }, actionsData));
};
export var PrimaryRequiredChar20 = function PrimaryRequiredChar20() {
  return React.createElement(Dropdown, Object.assign({
    data: _objectSpread({}, Data, {
      inputChar: 20,
      labelFlag: "(Required)"
    })
  }, actionsData));
};
export var PrimaryRequiredHint = function PrimaryRequiredHint() {
  return React.createElement(Dropdown, Object.assign({
    data: _objectSpread({}, Data, {
      labelFlag: "(Required)",
      hintText: "This is easy just - just click and dropdown"
    })
  }, actionsData));
};
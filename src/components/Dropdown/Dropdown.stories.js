import React from 'react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';
import './Dropdown.css';

export default {
  component: Dropdown,
  title: 'Dropdown',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  id: 'ontario-select-example-1',
  name: 'ontario-select-example-1',
  placeholder: "Select an option",
  options: [
    { id: 0, value: 'Left' },
    { id: 1, value: 'Right' },
    { id: 2, value: 'Ambidextrous' },
  ],
  labelText: 'Label Dropdown',
  labelType: '',
  labelFlag: '',
  hintText: '',
  hintId: '',
  inputChar: '',
  selected: '',
};

export const actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus'),
  //onInputClicked: action('onInputClicked')
};

export const Primary = () => {
  return <Dropdown data={{ ...Data }} {...actionsData} />;
};

export const PrimaryRequired = () => {
  return <Dropdown data={{ ...Data, labelFlag: "(Required)" }} {...actionsData} />;
};

export const PrimaryRequiredSelected = () => {
  return <Dropdown data={{ ...Data, labelFlag: "(Optional)", selected: 2 }} {...actionsData} />;
};



export const PrimaryRequiredChar20 = () => {
  return <Dropdown data={{ ...Data, inputChar: 20, labelFlag: "(Required)" }} {...actionsData} />;
};

export const PrimaryRequiredHint = () => {
  return <Dropdown data={{ ...Data, labelFlag: "(Required)", hintText: "This is easy just - just click and dropdown"  }} {...actionsData} />;
};

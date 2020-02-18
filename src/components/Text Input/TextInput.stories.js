import React from 'react';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';
import './TextInput.css';

export default {
  component: TextInput,
  title: 'TextInput',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  id: 'ontario-textinput-example-1',
  inputChar: '',
  labelText: 'Label Text',
  labelType: '',
  labelFlag: '',
  hintText: '',
  hintId: ''
};

export const actionsData = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
};

export const Default = () => {
  return <TextInput data={{ ...Data }} {...actionsData} />;
};


export const DefaultChar20 = () => {
  return <TextInput data={{ ...Data, inputChar: 20, id: "ontario-textinput-example-2" }} {...actionsData} />;
};


export const DefaultWithHint = () => {
  return <TextInput data={{ ...Data, hintText: "This info is on the back of your card", id: "ontario-textinput-example-3", hintId: "hint3" }} {...actionsData} />;
};

export const DefaultWithHintLarge = () => {
  return <TextInput data={{ ...Data, hintText: "This info is on the back of your card",  hintId: "hint4",  id: "ontario-textinput-example-infoOnCardLarge", labelType: "large"}} {...actionsData} />;
};

export const DefaultWithHintAndFlag = () => {
  return <TextInput data={{ ...Data, hintText: "This info is on the back of your card",  hintId: "hint5", id: "ontario-textinput-example-infoOnCard",  labelFlag: "(required)"  }} {...actionsData} />;
};

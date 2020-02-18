import React from 'react';
import Input from '../Input/Input';
import Label from '../label/Label';
import Hint from '../Hint/Hint';
export default function TextInput(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      labelText = _ref$data.labelText,
      labelType = _ref$data.labelType,
      labelFlag = _ref$data.labelFlag,
      inputChar = _ref$data.inputChar,
      hintText = _ref$data.hintText,
      hintId = _ref$data.hintId,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur;
  return React.createElement("div", {
    "class": "ontario-form-group"
  }, React.createElement(Label, {
    data: {
      id: id,
      text: labelText,
      type: labelType,
      flag: labelFlag
    }
  }), hintText && React.createElement(Hint, {
    data: {
      hintId: hintId,
      hintText: hintText
    }
  }), React.createElement(Input, {
    data: {
      "char": inputChar,
      id: id,
      hintId: hintId
    },
    onChange: function onChange(e) {
      return _onChange(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e);
    }
  }));
}
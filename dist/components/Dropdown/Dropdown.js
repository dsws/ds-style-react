import React from "react";
import Label from "../label/Label";
import Hint from "../Hint/Hint";
export default function Dropdown(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      name = _ref$data.name,
      placeholder = _ref$data.placeholder,
      options = _ref$data.options,
      labelText = _ref$data.labelText,
      labelType = _ref$data.labelType,
      labelFlag = _ref$data.labelFlag,
      inputChar = _ref$data.inputChar,
      hintText = _ref$data.hintText,
      hintId = _ref$data.hintId,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      _onFocus = _ref.onFocus;
  return React.createElement("div", {
    className: "ontario-form-group"
  }, React.createElement(Label, {
    data: {
      id: id,
      name: name,
      text: labelText,
      type: labelType,
      flag: labelFlag
    }
  }), hintText && React.createElement(Hint, {
    data: {
      hintId: hintId,
      hintText: hintText
    }
  }), React.createElement("select", {
    className: "ontario-input".concat(inputChar && "--" + inputChar + "-char-width", " ontario-dropdown"),
    id: id,
    name: name,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e);
    },
    onFocus: function onFocus(e) {
      return _onFocus(e);
    }
  }, options && options.map(function (item, idx) {
    return React.createElement("option", {
      key: idx,
      value: item.id
    }, item.value);
  })));
}
// src/components/Task.js
import React from 'react';
export default function Button(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      text = _ref$data.text,
      skin = _ref$data.skin,
      onClickHandler = _ref.onClickHandler;
  return React.createElement("button", {
    id: id,
    "class": "ontario-button--".concat(skin),
    onClick: function onClick() {
      return onClickHandler();
    }
  }, text);
}
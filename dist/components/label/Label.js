// src/components/Task.js
import React from "react";
export default function Label(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      text = _ref$data.text,
      type = _ref$data.type,
      flag = _ref$data.flag,
      onClickHandler = _ref.onClickHandler;
  return React.createElement("label", {
    "class": "ontario-label".concat(type && "--" + type),
    "for": id
  }, text, flag && React.createElement("span", {
    "class": "ontario-label__flag"
  }, " ", flag, " "));
}
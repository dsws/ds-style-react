// src/components/Task.js
import React from "react";
export default function Hint(_ref) {
  var _ref$data = _ref.data,
      hintId = _ref$data.hintId,
      hintText = _ref$data.hintText,
      onClickHandler = _ref.onClickHandler;
  return React.createElement("p", {
    id: "ontario-hint-".concat(hintId),
    "class": "ontario-hint"
  }, hintText);
}
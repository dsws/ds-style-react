import React from "react";
export default function Input(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      _char = _ref$data["char"],
      hintId = _ref$data.hintId,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur;
  return React.createElement("input", {
    className: "ontario-input".concat(_char && "--" + _char + "-char-width"),
    "aria-describedby": hintId && "ontario-hint-".concat(hintId),
    type: "text",
    id: id,
    onBlur: function onBlur(e) {
      return _onBlur(e);
    },
    onChange: function onChange(e) {
      return _onChange(e);
    }
  });
}
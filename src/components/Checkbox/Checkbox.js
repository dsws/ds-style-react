import React from "react";

export default function Input({
  data: { id, name, value },
  onChange,
  onBlur
}) {
  return (
    <input
    class="ontario-checkboxes__input"
      type="checkbox"
      value={value}
      name={name}
      id={id}
      onBlur={e => onBlur(e)}
      onChange={e => onChange(e)}
    />
  );
}

// <input class="ontario-checkboxes__input" id="{{this.checkboxId}}" name="{{this.checkboxName}}" type="checkbox" value="{{this.checkboxValue}}">

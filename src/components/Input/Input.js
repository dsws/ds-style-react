import React from "react";

export default function Input({
  data: { id, char, hintId },
  onChange,
  onBlur
}) {
  return (
    <input
      className={`ontario-input${char && "--" + char + "-char-width"}`}
      aria-describedby={hintId && `ontario-hint-${hintId}`}
      type="text"
      id={id}
      onBlur={e => onBlur(e)}
      onChange={e => onChange(e)}
    />
  );
}

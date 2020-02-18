// src/components/Task.js

import React from 'react';

export default function Button({ data: { id, text, skin }, onClickHandler }) {
  return (
<button id={id} class={`ontario-button--${skin}`} onClick={() => onClickHandler()}>
    {text}
</button>

  );
}
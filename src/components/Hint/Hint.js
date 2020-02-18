// src/components/Task.js

import React from "react";
import PropTypes from "prop-types";

export default function Hint({
  data: { hintId, hintText },
  onClickHandler
}) {
  return (
    <p id={`ontario-hint-${hintId}`} class="ontario-hint">{hintText}</p>
  );
}

Hint.propTypes = {
  data: PropTypes.shape({
    hintId: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired
  })
};

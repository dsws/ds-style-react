// src/components/Task.js

import React from "react";
import PropTypes from "prop-types";

export default function Label({
  data: { id, text, type, flag },
  onClickHandler
}) {
  return (
    <label class={`ontario-label${type && "--" + type}`} for={id}>
      {text}

      {flag && <span class={`ontario-label__flag`}> {flag} </span>}
    </label>
  );
}

Label.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    flag: PropTypes.string,
  })
};

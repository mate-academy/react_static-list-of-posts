import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

export const Text = (props) => {
  const { title, text } = props;

  return (
    <p className="comment-body">
      <b>{title}</b>
      <br />
      {text}
    </p>
  );
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

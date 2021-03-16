import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export function Comment({ name, body, email }) {
  return (
    <>
      <div className="comment__title">{`Comment title: ${name}`}</div>
      <div className="comment__body">{`Comment: ${body}`}</div>
      <div className="comment__email">{`User email: ${email}`}</div>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

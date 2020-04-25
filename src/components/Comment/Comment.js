import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ commentInfo: { name, email, body } }) => (
  <div>
    <span role="img" aria-label="pspeech baloon">💬</span>
    <h4>{ name }</h4>
    <p>{ email }</p>
    <p className="comment__body">{ body }</p>
  </div>
);

Comment.propTypes = {
  commentInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

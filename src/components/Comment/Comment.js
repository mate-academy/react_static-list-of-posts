import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = (props) => {
  const { comment: { name, email, body } } = props;

  return (
    <li className="comment">
      <p className="comment__autor">
        <span>{`autor: ${name} `}</span>
        <span>{`e-mail: ${email}`}</span>
      </p>
      <p className="comment__text">{body}</p>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

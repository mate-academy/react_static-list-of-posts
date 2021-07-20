import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p>
      <strong>{'Name: '}</strong>
      {name}
    </p>
    <p>
      <strong>{`Content: `}</strong>
      {body}
    </p>
    <p>
      <strong>{`Email: `}</strong>
      {email}
    </p>
  </div>
);

export const TypeComment = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Comment.propTypes = TypeComment;

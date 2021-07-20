import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p>
      <b>{'Name: '}</b>
      {name}
    </p>
    <p>
      <b>{`Content: `}</b>
      {body}
    </p>
    <p>
      <b>{`Email: `}</b>
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

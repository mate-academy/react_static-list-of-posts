import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ body, name, email }) => (
  <>
    <div className="comment__user">
      <p className="comment__userName">{name}</p>
      <p className="comment__email">{email}</p>
    </div>
    <div className="comment__body">{body}</div>
  </>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

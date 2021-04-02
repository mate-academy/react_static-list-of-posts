import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <p className="comment__name">{name}</p>
    <p className="comment__body">{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

export const commentType = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Comment.propTypes = commentType;

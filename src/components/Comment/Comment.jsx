import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="Comment">
    <p className="Comment__name">{name}</p>
    <p className="Comment__body">{body}</p>
    <p className="Comment__email">{email}</p>
  </div>
);

export const CommentType = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Comment.propTypes = CommentType;

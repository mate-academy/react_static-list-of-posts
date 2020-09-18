import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Comment = ({ comment }) => (
  <div className="comment">
    <User user={comment.user} />
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ),
};

Comment.defaultProps = {
  comment: [],
};

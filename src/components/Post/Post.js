import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ title, body, user, comment }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comment={comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

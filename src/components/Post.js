import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ title, body, user, comments }) => (
  <li className="post">
    <h3 className="post__title">{title}</h3>
    <p className="post__body">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.shape().isRequired,
};

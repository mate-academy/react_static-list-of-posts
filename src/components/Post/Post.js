import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.css';

export const Post = ({ user, title, body, commentsList }) => (
  <div className="post__wrapper">
    <User currentUser={user} />
    <h3>{title}</h3>
    <div>{body}</div>
    <CommentList comments={commentsList} />
  </div>
);

Post.propTypes = {
  user: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentsList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

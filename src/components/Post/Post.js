import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { CommentList } from '../CommentList/CommentList';
import { User, userTypes } from '../User/User';
import { commentTypes } from '../Comment/Comment';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="post">
      <div className="post__block">
        <h3 className="post__title">{title}</h3>
        <p className="post__body">{body}</p>
      </div>
      <User user={user} />
      <CommentList comments={comments} />
    </div>
  );
};

export const postTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(userTypes),
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentTypes),
  ),
};

Post.propTypes = {
  post: PropTypes.shape(postTypes).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { CommentList } from '../CommentList/CommentList';
import { User, userData } from '../User/User';
import { commentData } from '../Comment/Comment';

export const Post = ({ post }) => (
  <div className="post">
    <div className="post__block">
      <h3 className="post__title">{post.title}</h3>
      <p className="post__body">{post.body}</p>
    </div>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);

export const postData = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  user: PropTypes.shape(userData),
  comments: PropTypes.arrayOf(PropTypes.shape(commentData)),
};

Post.propTypes = {
  post: PropTypes.shape(postData).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape().isRequired,
    ).isRequired,
  }).isRequired,
};

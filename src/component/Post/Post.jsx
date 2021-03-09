import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User';
import { postsType, commentsType } from '../../types';

export const Post = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape(postsType).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentsType),
  ),
};

Post.defaultProps = {
  comments: null,
};

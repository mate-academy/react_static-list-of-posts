/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import comments from '../api/comments';
import users from '../api/users';

import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User post={post} newUsers={users} />
    Comments:
    <CommentList post={post} newComments={comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

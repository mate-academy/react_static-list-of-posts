import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';

import { Post } from './Post';
import { User } from './User';

export const PostList = ({ post }) => (
  <div className="posts-list">
    <User {...post.user} />
    <Post {...post} />
  </div>
);

PostList.propTypes = {
  post: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired,
};

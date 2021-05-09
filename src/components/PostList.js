import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <Post key={post.key} {...post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.shape().isRequired,
};

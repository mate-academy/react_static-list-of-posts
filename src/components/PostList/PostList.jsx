import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

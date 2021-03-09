import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { postsType } from '../../types';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(postsType).isRequired,
  ).isRequired,
};

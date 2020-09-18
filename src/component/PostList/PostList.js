import React from 'react';
import './PostList.scss';

import PropTypes from 'prop-types';
import { Post } from '../Post';

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
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

PostList.defaultProps = {
  posts: [],
};

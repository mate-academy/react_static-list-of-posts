import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './post';

export const PostsList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

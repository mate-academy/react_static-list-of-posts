import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './post';

export function PostsList({ posts }) {
  return (
    <ul>

      {posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

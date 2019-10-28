import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

export default function PostsList({ posts }) {
  return (
    <ul>
      { posts.map(post => <Post post={post} key={post.id} />) }
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};

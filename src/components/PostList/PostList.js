import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';

export function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

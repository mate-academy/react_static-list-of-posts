import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export function PostList({ posts }) {
  return (
    <div className="post-list">
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </div>

  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

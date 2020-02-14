import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';

import { Post } from '../Post/Post';

export function PostList({ allPosts }) {
  return (
    <div className="post-list">
      {allPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape.isRequired,
    comments: PropTypes.array.isRequired,
  })).isRequired,
};

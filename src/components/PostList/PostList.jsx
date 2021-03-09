import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { postType } from '../../types';

import './PostList.css';

export function PostList({ posts }) {
  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.id} className="post-list__post post">
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(postType).isRequired,
};

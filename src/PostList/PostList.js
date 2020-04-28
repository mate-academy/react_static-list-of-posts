import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <li key={post.id} className="posts-list__post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id} className="post-list__item post">
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

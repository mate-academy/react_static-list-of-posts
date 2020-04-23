import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <li key={post.id} className="post__item">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

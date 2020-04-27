import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

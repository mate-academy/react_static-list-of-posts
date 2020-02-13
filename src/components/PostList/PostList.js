import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (<Post postInfo={post} key={post.id} />))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
};

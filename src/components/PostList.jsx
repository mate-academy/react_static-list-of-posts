import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { TypePost } from '../types';

export const PostList = ({ posts }) => (
  <ul className="list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(TypePost).isRequired,
};

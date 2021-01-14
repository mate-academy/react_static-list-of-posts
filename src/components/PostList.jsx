import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { TypePost } from '../types';

export const PostList = ({ preparedPosts }) => (
  <ol className="list">
    {preparedPosts.map(post => (
      <Post singlePost={post} key={post.id} />
    ))}
  </ol>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(TypePost).isRequired,
};

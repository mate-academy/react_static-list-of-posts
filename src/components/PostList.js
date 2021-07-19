import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostPropTypes } from './PropsTypes';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostPropTypes).isRequired,
};

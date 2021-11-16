import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { postShape } from '../../types';

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
  posts: PropTypes.arrayOf(postShape).isRequired,
};

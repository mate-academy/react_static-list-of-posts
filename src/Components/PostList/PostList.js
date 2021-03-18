import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostType } from '../../Types';

export const PostList = ({ posts }) => (
  <ul>
    {
      posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostType),
  ).isRequired,
};

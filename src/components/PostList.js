import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostShape } from '../shapes/PostShape';

export const PostList = ({ posts }) => (
  <ul>
    <li>
      {
        posts.map(post => (
          <Post {...post} key={post.id} />
        ))
      }
    </li>
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

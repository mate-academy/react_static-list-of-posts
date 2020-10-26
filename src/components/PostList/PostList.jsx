import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';
import { PostShape } from '../../shapes/PostShape';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (
        <Post key={post.id} {...post} />
      ))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

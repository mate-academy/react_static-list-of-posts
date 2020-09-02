import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => <Post {...post} />)}
  </ul>

);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

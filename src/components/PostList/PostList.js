import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.css';

export const PostList = ({ posts }) => (
  <ul className="postsWrapper">
    {posts.map(post => <Post key={post.id} post={post} />)}
  </ul>

);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

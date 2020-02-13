import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.css';

export const PostList = ({ postList }) => (
  <ul className="postsWrapper">
    {postList.map(post => <Post key={post.id} {...post} />)}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

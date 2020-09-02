import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

import './PostList.css';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => <Post key={post.id} {...post} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

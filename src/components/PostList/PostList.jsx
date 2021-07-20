import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="list">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

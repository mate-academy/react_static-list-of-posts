import React from 'react';
import './PostList.css';

import PropTypes from 'prop-types';

import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(current => (
      <Post
        key={current.post.id}
        data={current}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.objectOf(
    PropTypes.shape(),
  ).isRequired,
};

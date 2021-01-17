import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <main className="PostList">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </main>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

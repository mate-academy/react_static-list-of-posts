import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

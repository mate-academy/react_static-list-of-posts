import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

PostList.defaultProps = {
  posts: [],
};

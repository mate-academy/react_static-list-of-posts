import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from './Post';
import { PostType } from '../types/types';

export const PostList = ({ posts }) => (
  <div className="post-list">
    { posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostType),
  ).isRequired,
};

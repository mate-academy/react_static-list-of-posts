import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostTypes } from '../types';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <div className="posts__item" key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostTypes).isRequired,
};

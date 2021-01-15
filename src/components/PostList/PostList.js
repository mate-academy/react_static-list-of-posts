import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostTypes } from '../../types';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostTypes).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostType } from '../types';

export const PostList = ({ posts }) => (
  <div className="App__posts">
    {posts.map(post => <Post key={post.id} {...post} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};

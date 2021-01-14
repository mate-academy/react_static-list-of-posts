import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostShape } from './shapes/PostShape';

export const PostList = ({ posts }) => (
  <div className="App__posts">
    {
      posts.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

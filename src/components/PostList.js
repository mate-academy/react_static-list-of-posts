import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostShape } from './shapes/PostShape';

export const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

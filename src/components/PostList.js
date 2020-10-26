import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostShape } from '../shapes/PostShape';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <Post post={post} key={post.id} />
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Post, postTypes } from '../Post/Post';

export const PostList = ({ posts }) => posts.map(post => (
  <Post key={post.id} post={post} />
));

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(postTypes),
  ).isRequired,
};

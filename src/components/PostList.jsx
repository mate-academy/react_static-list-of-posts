import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostType } from './Types';

export const PostList = ({ posts }) => posts.map(post => (
  <div key={post.id}>
    <Post {...post} />
  </div>
));

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostType).isRequired,
  ).isRequired,
};

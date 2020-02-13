import React from 'react';
import PropTypes from 'prop-types';
import { PostList } from '../PostList/PostList';

export const PostLists = ({ posts }) => (
  <PostList postList={posts} />
);

PostLists.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

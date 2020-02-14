import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ preparedPosts }) => (
  preparedPosts.map(post => (
    <Post post={post} key={post.id} />
  ))
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

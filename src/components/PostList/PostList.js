import React from 'react';
import PropTypes from 'prop-types';
import { Post, postData } from '../Post/Post';

export const PostList = ({ posts }) => posts.map(
  post => <Post key={post.id} post={post} />,
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(postData)).isRequired,
};

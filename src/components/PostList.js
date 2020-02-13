import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const PostList = ({ postList }) => (
  <div>
    { postList.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.shape(Post)).isRequired,
};

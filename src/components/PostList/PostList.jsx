import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export function PostList({ post, comment, user }) {
  return (
    <>
      <Post />
    </>
  );
}

PostList.propTypes = {
  post: PropTypes.arrayOf(PropTypes.object).isRequired,
  comment: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

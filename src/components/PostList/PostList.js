import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ preparedListOfPosts }) => (
  preparedListOfPosts.map(
    item => (<Post {...item} key={item.id} />),
  )
);

PostList.propTypes = {
  preparedListOfPosts: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

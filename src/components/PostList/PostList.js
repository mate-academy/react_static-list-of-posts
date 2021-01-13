import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ postCommentUser }) => (
  postCommentUser.map(
    item => (<Post {...item} key={item.id} />),
  )
);

PostList.propTypes = {
  postCommentUser: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

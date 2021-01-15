import React from 'react';
import PropTypes from 'prop-types';
import { commentType, userType } from '../../types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  posts.map(
    post => (
      <div key={post.id}>
        <Post {...post} />
      </div>
    ),
  )
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      user: userType.isRequired,
      comment: PropTypes.arrayOf(commentType).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

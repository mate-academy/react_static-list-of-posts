import React from 'react';
import PropTypes from 'prop-types';
import { usersType,
  commentType }
  from '../types/propTypesCollection';

import './Post.scss';

export const Post = ({ post }) => (
  <div className="post">
    <h1>
      {post.title}
    </h1>

    <p>
      {post.body}
    </p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    users: usersType.isRequired,
    comments: PropTypes.arrayOf(commentType).isRequired,
  }).isRequired,
};

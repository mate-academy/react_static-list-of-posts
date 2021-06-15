import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={post.user} />
    Comments:
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
};

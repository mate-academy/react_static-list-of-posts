import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';

import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ post }) => (
  <div className="post">
    <strong>{post.title}</strong>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.object.isRequired,
    comments: PropTypes.object,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

Post.defaultProps = {
  post: [],
};

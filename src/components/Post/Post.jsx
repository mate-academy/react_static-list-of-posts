import React from 'react';
import { userPostCommentType } from '../../types';

import './Post.scss';

export const Post = ({ post }) => (
  <div className="post">
    <h3 className="post__title">{post.title}</h3>
    <p className="post__text">{post.body}</p>
  </div>
);

Post.propTypes = {
  post: userPostCommentType.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { PostListType } from '../../types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ post }) => (
  <li className="posts__item post">
    <div className="post__title">
      {post.title}
    </div>

    <div className="post__body">
      {post.body}
    </div>

    <User user={post.user} />

    <CommentList comments={post.comments} />
  </li>
);

Post.propTypes = {
  post: PropTypes.shape(PostListType).isRequired,
};

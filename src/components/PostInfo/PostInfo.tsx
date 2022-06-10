import React from 'react';
import { PostInfoProps } from '../../types/PostInfoProps';
import './PostInfo.scss';

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="post">
    <span className="post__title" data-cy="title">
      {post.title[0].toUpperCase() + post.title.slice(1)}
    </span>
    <p className="post__body" data-cy="post-body">
      {post.body[0].toUpperCase() + post.body.slice(1)}
    </p>
  </div>
);

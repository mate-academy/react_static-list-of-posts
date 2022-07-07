import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';

export const PostInfo: React.FC<Post> = ({ title, body }) => (
  <div data-cy="post-info">
    <h2 className="post__title" data-cy="post-title">{title}</h2>
    <p className="post__body" data-cy="post-body">{body}</p>
  </div>
);

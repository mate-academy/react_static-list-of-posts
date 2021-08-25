import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  reviews,
}) => (
  <div className="post__content">
    <UserInfo {...user} />
    <h3 className="post__title">{title}</h3>
    <p className="post__text">{body}</p>
    <CommentList reviews={reviews} />
  </div>
);

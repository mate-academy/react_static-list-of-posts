import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../types/Post';

export const PostInfo: React.FC<Post> = ({
  body,
  id,
  title,
  user,
  comments,
}) => (
  <div className="posts__item" key={id} data-cy="post-info">
    <h1 className="posts__title" data-cy="post-title">{title}</h1>
    {user
      ? <UserInfo name={user.name} email={user.email} />
      : ''}
    <p className="posts__body" data-cy="post-body">{body}</p>
    <h2 className="posts__main-title"> Comments: </h2>
    {comments
      ? <CommentList comments={comments} />
      : ''}
  </div>
);

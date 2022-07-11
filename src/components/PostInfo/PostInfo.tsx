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
  <div
    className="post__element"
    key={id}
    data-cy="post-info"
  >
    <h1 className="post__title" data-cy="post-title">
      {title}
    </h1>
    {user
      ? <UserInfo name={user.name} email={user.email} />
      : ''}
    <p className="post__body" data-cy="post-body">{body}</p>
    <h2 className="post__comment-title"> Comments: </h2>
    {comments
      ? <CommentList comments={comments} />
      : ''}
  </div>
);

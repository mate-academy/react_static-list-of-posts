import React from 'react';
import './PostInfo.scss';
import { CommentsList } from '../CommentsList/CommentsList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="post-info">
    <h1 className="post-info__title">{title}</h1>
    <p className="post-info__body">{body}</p>
    {user && (<UserInfo user={user} />)}
    <CommentsList postComments={comments} />
  </div>
);

import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post-item__title">{title}</h2>
    <div className="user">{user && <UserInfo {...user} />}</div>
    <p className="post-item__body">{body}</p>
    <CommentList comments={comments} />
  </>
);

import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = Post;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comment,
}) => (
  <>
    {user && (
      <div className="post__header">
        <UserInfo name={user.name} email={user.email} />
      </div>
    )}
    <div className="post__content">
      <div className="post__content-box">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>

    {comment && (
      <div className="post__comments">
        <CommentList comments={comment} />
      </div>
    )}
  </>
);

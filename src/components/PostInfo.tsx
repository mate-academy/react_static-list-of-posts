import React from 'react';

import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = Omit<Post, 'id'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  commentsList,
}) => {
  const date = new Date();
  const dateFormat = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;

  return (
    <div className="post">
      <div className="user-header">
        {user && <UserInfo name={user.name} email={user.email} />}
        <span>{dateFormat}</span>
      </div>
      <div className="post__body">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <h2>Comments:</h2>
      <CommentList comments={commentsList} />
    </div>
  );
};

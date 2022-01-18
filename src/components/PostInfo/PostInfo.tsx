import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo: React.FC<Posts> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
    {user && (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    )}

    <CommentList comments={comments} />
  </div>
);

import React from 'react';
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
    <h1 className="post-title">{title}</h1>
    {user && (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    )}
    <p className="post-text">{body}</p>
    <h2 className="post-comments">Comments:</h2>
    <CommentList comments={comments} />
  </>
);

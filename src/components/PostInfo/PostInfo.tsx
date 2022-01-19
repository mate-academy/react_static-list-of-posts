import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo: React.FC<PreparedPost> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div>
    <div className="block">
      <h2 className="subtitle">{title}</h2>
      <p>{body}</p>
    </div>
    {user && <UserInfo user={user} />}
    <CommentList comments={comments} />
  </div>
);

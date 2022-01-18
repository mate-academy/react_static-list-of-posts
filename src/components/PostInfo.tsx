import React from 'react';

import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="ui piled segments">
    <div className="ui segment">
      <h1 className="header">{title}</h1>
      <p className="description">{body}</p>
      {user && <UserInfo {...user} />}
    </div>
    <div className="ui secondary segment">
      {comments && <CommentList comments={comments} />}
    </div>
  </div>
);

import React from 'react';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { PostListType } from '../../types/PostListType';

export const PostInfo: React.FC<PostListType> = ({
  title,
  user,
  body,
  comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && (
        <UserInfo
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />
      )}

    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length > 0 && (
      <CommentList commentsArr={comments} />
    )}

  </div>
);

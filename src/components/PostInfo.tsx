import React from 'react';
import { PostType } from '../types/PostType';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

export const PostInfo: React.FC<PostType> = ({
  title,
  body,
  user,
  id,
  comments,
}) => (
  <div
    key={id}
    className="post"
  >
    <div className="post__content">
      <h2 className="post__title">
        {title}
      </h2>
      <div className="post__body">
        <p>
          {body}
        </p>
      </div>
    </div>
    <UserInfo {...user} />
    <CommentList coms={comments} />
  </div>
);

import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { PostInfoType } from '../types/PostInfoType';

export const PostInfo: React.FC<PostInfoType> = props => {
  const {
    post: {
      title, body, user, comments,
    },
  } = props;

  return user && (
    <div className="post">
      <div className="post__user">
        <UserInfo name={user.name} email={user.email} />
      </div>
      <div className="post__body">
        <h3 className="post__title">{title}</h3>
        <span className="post__subtitle">{body}</span>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};

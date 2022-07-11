import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Prop = {
  title: string;
  body: string;
  user: User | null;
  comments: Comments[];
};

export const PostInfo: React.FC<Prop> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="postInfo" data-cy="post-info">
    <h2 className="postInfo__title" data-cy="post-title">{title}</h2>
    <p className="postInfo__header" data-cy="post-body">{body}</p>
    {user && (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    )}
    <CommentList comments={comments} />
  </div>
);

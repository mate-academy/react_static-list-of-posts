import React from 'react';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';
import { Comment } from '../../types/Comment';
import { CommentsList } from '../CommentsList';
import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
  user: User | undefined;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="post-info">
    {user && (
      <UserInfo user={user} />
    )}

    <h1 className="post-info__title">
      {title}
    </h1>

    <p className="post-info__body">
      {body}
    </p>

    <CommentsList comments={comments} />
  </div>
);

import React from 'react';
import { Users } from '../../types/Users';
import { UserInfo } from '../UserInfo';
import { Comments } from '../../types/Comments';
import { CommentsList } from '../CommentsList';
import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
  user: Users | undefined;
  comments: Comments[];
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

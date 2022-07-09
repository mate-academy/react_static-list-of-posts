import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="post">
    <h2
      className="post__title"
      data-cy="post-title"
    >
      {title}
    </h2>

    <p
      className="post__body"
      data-cy="post-body"
    >
      {body}
    </p>

    {user && (
      <UserInfo user={user} />
    )}

    <CommentList comments={comments} />
  </div>
);

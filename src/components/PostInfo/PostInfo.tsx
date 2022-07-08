import React from 'react';
import './PostInfo.scss';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

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
  <>
    <div data-cy="post-info">
      <h1 data-cy="post-title">
        {title}
      </h1>

      <p data-cy="post-body">
        {body}
      </p>
    </div>

    <UserInfo user={user} />

    <CommentList comments={comments} />
  </>
);

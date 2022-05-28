import React from 'react';
import './PostInfo.scss';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div data-cy="post-info" className="post__item">
    <h3 data-cy="post-title" className="post__item-title">
      {title}
    </h3>
    <p data-cy="post-body" className="post__item-body">
      {body}
    </p>
    {user
      ? <UserInfo {...user} />
      : 'No user found'}
    <CommentList comments={comments} />
  </div>
);

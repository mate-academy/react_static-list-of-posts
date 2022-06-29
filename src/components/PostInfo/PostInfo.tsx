import React from 'react';
import { Comment, User } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

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
    <h1 className="title">{title}</h1>
    <p>{body}</p>
    <div>
      <UserInfo user={user} />
    </div>
    <CommentList comments={comments} />
  </>
);

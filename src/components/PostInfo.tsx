import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

import { Post } from '../types/Post';

type Props = Omit<Post, 'id'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <UserInfo user={user} />
    <CommentList comment={comments} />
  </>
);

import React from 'react';
import { User } from '../types/UserTypes';
import { Comment } from '../types/CommentsTypes';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | null;
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 data-cy="post-title">{title}</h2>
    <em data-cy="post-body">{body}</em>
    <br />
    {user && <UserInfo {...user} />}
    {comments && <CommentList allComments={comments} />}
  </>
);

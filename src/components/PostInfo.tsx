import React from 'react';
import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <>
      <h1>{title}</h1>
      <div>{body}</div>
      {user && <UserInfo user={user} />}
      {comment && <CommentList comments={comment} />}
    </>
  );
};

import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { PreparedPost } from './interface';

type Prepared = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Prepared> = ({ post }) => {
  const {
    autor,
    postComments,
    title,
    body,
  } = post;

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      {autor && <UserInfo info={autor} />}
      <CommentList comments={postComments} />
    </>
  );
};

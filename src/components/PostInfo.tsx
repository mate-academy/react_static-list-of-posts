import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { User, Comment } from './interface';

type PreparePost = {
  userId: number,
  id: number,
  title: string,
  body: string,
  autor: User | null,
  postComments: Comment[],
};

type Prepared = {
  post: PreparePost;
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

import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { User, Comment } from './interface';

type PreparePost = {
  userId: number,
  id: number,
  title: string,
  body: string,
  autor: User,
  autorComments: Comment[],
};

type Prepared = {
  post: PreparePost;
};

export const PostInfo: React.FC<Prepared> = ({ post }) => {
  const { autor, autorComments } = post;

  return (
    <>
      <UserInfo
        info={autor}
      />
      {autorComments.map((comment) => {
        return (
          <CommentList
            comment={comment}
          />
        );
      })}
    </>
  );
};

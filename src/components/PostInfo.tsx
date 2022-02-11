import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

type PreparePost = {
  userId: number,
  id: number,
  title: string,
  body: string,
  autor: User | undefined,
  autorComments: Comment | undefined,
};

type Prepared = {
  post: PreparePost | undefined;
};

export const PostInfo: React.FC<Prepared> = ({ post = {} }) => {
  return (
    <>
      <UserInfo
        info={post.autor}
      />
      <CommentList
        comments={post.autorComments}
      />
    </>
  );
};

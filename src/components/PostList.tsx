import React from 'react';
import { PostInfo } from './PostInfo';

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
  posts: PreparePost[];
};

export const PostList: React.FC<Prepared> = ({ posts }) => {
  return (
    <ul className="container">
      {posts.map((post: PreparePost) => {
        let autoComments = -1;

        if (post.autorComments !== null && post.autorComments !== undefined) {
          autoComments = post.autorComments.id;
        }

        return (
          <li key={autoComments} className="item">
            <PostInfo
              post={post}
            />
          </li>
        );
      })}
    </ul>
  );
};

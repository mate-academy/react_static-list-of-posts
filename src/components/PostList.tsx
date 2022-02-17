import React from 'react';
import { PostInfo } from './PostInfo';
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
  posts: PreparedPost[];
};

export const PostList: React.FC<Prepared> = ({ posts }) => {
  return (
    <ul className="container">
      {posts.map((post) => {
        return (
          <li className="item" key={post.id}>
            <PostInfo
              post={post}
            />
          </li>
        );
      })}
    </ul>
  );
};

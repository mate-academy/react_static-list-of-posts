import React from 'react';
import { PostInfo } from './PostInfo';
import { PreparedPost } from './interface';

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

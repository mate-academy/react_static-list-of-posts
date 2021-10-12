import React from 'react';
import { PostInfo } from '../PostInfo/postInfo';
import { Post } from '../types/Post';
import './postList.scss';

type Props0 = {
  posts: Post[];
};

export const PostList: React.FC<Props0> = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo posts2={post} />
        </li>
      ))}
    </ul>
  );
};

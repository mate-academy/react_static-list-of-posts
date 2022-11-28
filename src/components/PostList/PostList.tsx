import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post) => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type PostListProps = {
  posts: Post[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

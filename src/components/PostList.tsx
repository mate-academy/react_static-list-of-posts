import React from 'react';
import { PostInfo } from './PostInfo';
import { Post } from '../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo posts={post} />
      </li>
    ))}
  </ul>
);

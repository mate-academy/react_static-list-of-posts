import React from 'react';
import { Post } from '../type/Post';
import '../App.scss';
import { PostInfo } from './PostInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="app">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

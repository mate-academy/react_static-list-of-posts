import React from 'react';
import { Posts } from '../type/Post';
import '../App.scss';
import { PostInfo } from './PostInfo';

type PostListItem = {
  postItems: Posts[],
};

export const PostList: React.FC<PostListItem> = ({ postItems }) => (
  <ul>
    {postItems.map(post => (
      <li key={post.id} className="app">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

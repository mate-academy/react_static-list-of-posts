import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostsForProps } from '../../types/posts';

export const PostList: React.FC<PostsForProps> = ({ postsItems }) => (
  <ul className="PostList">
    {postsItems.map(postItem => (
      <PostInfo {...postItem} />
    ))}
  </ul>
);

import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export type Props = {
  posts: Posts[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id} className="posts__item">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);

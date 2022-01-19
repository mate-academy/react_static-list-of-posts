import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id} className="posts__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

import React from 'react';
import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: FullPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

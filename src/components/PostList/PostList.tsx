import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);

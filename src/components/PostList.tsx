import React from 'react';

import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="Post-list">
    {posts.map(post => (
      <li className="Post" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

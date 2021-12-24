import React from 'react';

import { PostInfo } from '../PostInfo';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

type Post = {
  id: number,
  title: string,
  body: string,
  user: User | undefined,
  comment: Comment[],
};

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

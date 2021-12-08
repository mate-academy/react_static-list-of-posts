import React from 'react';
import { Post } from '../types/Post';

import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          commentsList={post.commentsList}
        />
      </li>
    ))}
  </ul>
);

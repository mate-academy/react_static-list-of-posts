import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  preparedPosts: Post[];
};

export const PostList:React.FC<Props> = ({ preparedPosts }) => (
  <ol>
    {preparedPosts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ol>
);

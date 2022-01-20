import React from 'react';
import { PostInfo } from '../PostInfo';
import { PreparedPost } from '../../types/PreparedPost';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <li
        key={post.id}
      >
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

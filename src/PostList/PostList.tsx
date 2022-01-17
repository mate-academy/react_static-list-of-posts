import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(preparedPost => (
      <li key={preparedPost.id}>
        <PostInfo preparedPost={preparedPost} />
      </li>
    ))}
  </ul>
);

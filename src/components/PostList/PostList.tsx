import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: Post[]
};
export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>

);

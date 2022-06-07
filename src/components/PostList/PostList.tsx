import React from 'react';
import './PostList.scss';
import { Post } from '../../Types/Types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: Post[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <li>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

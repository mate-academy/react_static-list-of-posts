import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  preparedPosts: PreparedPosts[];
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ol>
    {preparedPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </ol>
);

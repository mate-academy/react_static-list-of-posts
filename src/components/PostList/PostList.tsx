import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPost[];
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul className="post-list page__post-list">
    {posts.map(post => (
      <PostInfo {...post} />
    ))}
  </ul>
);

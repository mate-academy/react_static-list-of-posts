import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="posts">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);

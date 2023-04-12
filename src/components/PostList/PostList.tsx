import React from 'react';
import { ExtendedPost } from '../../types/ExtendedPost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: ExtendedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);

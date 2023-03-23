import React from 'react';
import { PostInfo } from '../PostInfo';
import { FullPost } from '../../types/fullPost';

type Props = {
  posts: FullPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

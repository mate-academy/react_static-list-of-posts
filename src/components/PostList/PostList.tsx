import React from 'react';
import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: FullPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

import React from 'react';
import { FullPost } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: FullPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post: FullPost) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

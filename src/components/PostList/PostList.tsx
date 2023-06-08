import React from 'react';
import { PostInfo } from '../PostInfo';
import { CompletePost } from '../../types/CompletePost';

interface Props {
  posts: CompletePost[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

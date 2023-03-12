import React from 'react';
import { OnePost } from '../../types/OnePost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: OnePost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </div>

);

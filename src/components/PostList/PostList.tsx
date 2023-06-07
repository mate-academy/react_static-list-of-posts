import React from 'react';
import { FullPostInfo } from '../../types/FullPostInfo';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: FullPostInfo[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
      />
    ))}

  </div>

);

import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';

type Props = {
  post: Posts[];
};

export const PostList: React.FC<Props> = ({ post }) => (
  <div className="PostList">
    {post.map(item => (
      <PostInfo key={item.id} post={item} />
    ))}
  </div>
);

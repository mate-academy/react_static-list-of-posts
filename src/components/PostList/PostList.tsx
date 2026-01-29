import React from 'react';
import { PostWithDetails } from '../../types/PostWithDetails';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PostWithDetails[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

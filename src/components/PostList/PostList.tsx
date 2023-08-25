import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostData } from '../../types/PostData';

type PostsProp = {
  posts: PostData[]
};

export const PostList: React.FC<PostsProp> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => <PostInfo key={post.post.id} post={post} />)}
  </div>
);

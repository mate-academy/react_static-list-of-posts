import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Posts } from '../../types/Posts';

type PostType = {
  posts: Posts[];
};

export const PostList: React.FC<PostType> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => <PostInfo key={post.id} post={post} />)}
  </div>
);

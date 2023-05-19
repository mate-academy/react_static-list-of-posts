import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type PropsPostList = {
  posts: Post[];
};

export const PostList: React.FC<PropsPostList> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type TypePosts = {
  posts: Post[];
};

export const PostList: React.FC<TypePosts> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post: Post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

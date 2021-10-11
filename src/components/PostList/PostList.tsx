import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../Types/Post';
import './PostList.scss';

export const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div className="post-list">
    {posts.map((post) => (
      <PostInfo postInfo={post} key={post.id} />
    ))}
  </div>
);

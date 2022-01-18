import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Posts = {
  posts: Post[],
};

export const PostList: React.FC<Posts> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="post__list">
        <PostInfo post={post} />
      </div>
    ))}
  </>
);

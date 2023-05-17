import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';

type PostType = {
  posts: Post[];
};

export const PostList: React.FC<PostType> = ({ posts }) => (
  <>
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  </>
);

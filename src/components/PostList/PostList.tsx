import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type PostListProp = {
  posts: Post[];
};

export const PostList: React.FC<PostListProp> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </>
);

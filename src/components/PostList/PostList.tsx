import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type PostFromServer = {
  posts: Post[];
};

export const PostList: React.FC<PostFromServer> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

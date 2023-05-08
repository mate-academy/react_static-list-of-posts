import React from 'react';
import { Posts } from '../../types/posts';
import { PostInfo } from '../PostInfo';

interface PostListProps {
  posts: Posts[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => <PostInfo key={post.id} post={post} />)}
    </div>
  );
};

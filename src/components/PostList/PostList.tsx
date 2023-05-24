import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC <PostListProps> = ({ posts }) => (
  <>
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  </>
);

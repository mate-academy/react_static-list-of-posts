import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type PostListProps = {
  posts: Post[],
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {
      posts.map((post) => (
        <PostInfo
          key={post.id}
          post={post}
        />
      ))
    }
  </div>
);

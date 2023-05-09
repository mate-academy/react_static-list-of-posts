import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../Types/post';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(
        post => (<PostInfo post={post} key={post.id} />),
      )}
    </div>
  );
};

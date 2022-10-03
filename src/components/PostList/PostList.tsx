import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../Interfaces/Posts';

type PostsProps = {
  posts: Post[];
};

export const PostList: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (<PostInfo post={post} />))}
    </div>
  );
};

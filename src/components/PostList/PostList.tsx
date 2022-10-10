import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../Interfaces/Posts';

type PostsProps = {
  posts: Post[];
};

export const PostList: React.FC<PostsProps> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map((post) => (<PostInfo post={post} key={post.id} />))}
    </ul>
  );
};

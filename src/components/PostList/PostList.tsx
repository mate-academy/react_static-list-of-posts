import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type TypePostList = {
  posts: Post[],
};

export const PostList: React.FC<TypePostList> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => <PostInfo post={post} key={post.id} />)}
    </div>
  );
};

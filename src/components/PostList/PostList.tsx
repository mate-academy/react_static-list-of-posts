import React from 'react';
import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo';

type ListOfpostProps = {
  posts: FullPost[];
};

export const PostList: React.FC<ListOfpostProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

import React from 'react';
import { PostToRender } from '../../types/PostToRender';
import { PostInfo } from '../PostInfo';

export type Props = {
  posts: PostToRender[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

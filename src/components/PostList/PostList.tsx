import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostsToRender } from '../../types/posts';

type Props = {
  posts: PostsToRender[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

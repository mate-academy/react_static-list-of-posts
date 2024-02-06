import React from 'react';
import { Post } from '../../Types/post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

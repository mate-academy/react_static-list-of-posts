import React from 'react';
import { PostWithComments } from '../../types/PostWithComments';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostWithComments[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post: PostWithComments) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

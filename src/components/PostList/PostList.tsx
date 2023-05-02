import React from 'react';
import { PostData } from '../../react-app-env';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: PostData[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

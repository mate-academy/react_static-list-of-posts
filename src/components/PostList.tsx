import React from 'react';
import { PreparedPost } from '../types';
import { PostInfo } from './PostInfo';

interface Props {
  posts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map((post) => (
        <li key={post.id} className="PostItem">
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};

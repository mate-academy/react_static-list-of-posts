import React from 'react';
import { Post } from '../../types';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </ul>
  );
};

import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(({ id, ...post }) => (
        <PostInfo post={post} key={id} />
      ))}
    </div>
  );
};

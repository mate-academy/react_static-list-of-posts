import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};

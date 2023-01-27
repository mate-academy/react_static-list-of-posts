import React from 'react';
import { PostType } from '../../types/PostType';
import { PostInfo } from '../PostInfo';

type PostListProps = {
  posts: PostType[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};

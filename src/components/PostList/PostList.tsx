import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../Types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};

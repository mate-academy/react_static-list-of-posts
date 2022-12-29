import React from 'react';
import { Post } from '../../Types/post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </ul>
  );
};

import React from 'react';
import { FullInfo } from '../../types/FullInfo';
import { PostInfo } from '../PostInfo';

interface Prop {
  posts: FullInfo[];
}

export const PostList: React.FC<Prop> = ({ posts }) => {
  const list = posts.map((post) => (<PostInfo key={post.id} post={post} />));

  return (
    <div className="PostList">
      {list || null}
    </div>
  );
};

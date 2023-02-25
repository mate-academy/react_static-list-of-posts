import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(curr => {
        return (
          <PostInfo key={curr.id} post={curr} />
        );
      })}
    </div>
  );
};

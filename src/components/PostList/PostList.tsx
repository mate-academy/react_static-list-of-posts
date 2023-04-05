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
        const { id } = curr;

        return (
          <PostInfo key={id} post={curr} />
        );
      })}
    </div>
  );
};

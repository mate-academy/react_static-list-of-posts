import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map(post => {
        const { id } = post;

        return (
          <li key={id}>
            <PostInfo post={post} />
          </li>
        );
      })}
    </ul>
  );
};

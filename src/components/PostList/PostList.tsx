import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <ul>
        {posts.map(post => {
          return (
            <li
              key={post.id}
            >
              <PostInfo post={post} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

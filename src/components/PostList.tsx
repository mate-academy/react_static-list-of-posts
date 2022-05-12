import React from 'react';
import { Post } from './types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(item => (
        <li className="post" key={item.id}>
          <PostInfo post={item} />
        </li>
      ))}
    </ul>
  );
};

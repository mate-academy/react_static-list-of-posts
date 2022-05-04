import React from 'react';
import { Post } from './types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  post: Post[],
};

export const PostList: React.FC<Props> = ({ post }) => {
  return (
    <ul>
      {post.map(item => (
        <li className="post">
          <PostInfo posts={item} />
        </li>
      ))}
    </ul>
  );
};

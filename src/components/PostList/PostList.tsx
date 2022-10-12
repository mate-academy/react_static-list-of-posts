import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../react-app-env';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post: Post) => (
      <li>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

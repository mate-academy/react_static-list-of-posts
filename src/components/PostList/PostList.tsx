import React from 'react';
import { Post } from '../../react-app-env';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map((post: Post) => (
        <li key={post.id}>
          <PostInfo
            post={post}
          />
        </li>
      ))}
    </ul>
  );
};

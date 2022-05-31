import React from 'react';
import './PostList.scss';
import { PreparedPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: PreparedPost[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <li
        className="posts-item"
        key={post.id}
        data-cy="post-info"
      >
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul data-cy="post-info" className="post-list">
    {posts.map(post => (
      <li key={post.id} className="post-list__item">
        <PostInfo
          post={post}
        />
      </li>
    ))}
  </ul>
);

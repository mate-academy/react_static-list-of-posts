import React from 'react';
import './PostList.scss';
import { Post } from '../../Types/post';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul data-cy="post-info" className="post-list">
    {posts.map((post) => (
      <li className="post-list__item" key={post.id}>
        <PostInfo
          post={post}
        />
      </li>
    ))}
  </ul>
);

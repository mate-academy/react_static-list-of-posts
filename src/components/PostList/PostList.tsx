import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts__list">
    {posts.map(post => (
      <li className="posts__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

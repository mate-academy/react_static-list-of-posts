import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
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

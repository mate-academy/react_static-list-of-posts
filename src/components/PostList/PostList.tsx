import React from 'react';
import './PostList.scss';
import { UnitedPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: UnitedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id} className="PostList__item">
        <PostInfo currentPost={post} />
      </li>
    ))}
  </ul>
);

import React from 'react';
import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id} className="posts__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';
import './Post.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post">
    {posts.map(post => (
      <li key={post.id} className="post__list">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

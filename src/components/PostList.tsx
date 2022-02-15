import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';
import './Post.scss';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post">
    {preparedPosts.map(post => (
      <li key={post.id} className="post__list">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

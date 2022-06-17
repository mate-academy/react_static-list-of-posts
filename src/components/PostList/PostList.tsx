import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../react-app-env';
import './PostList.scss';

interface Props {
  posts: Post[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

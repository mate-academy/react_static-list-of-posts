import React from 'react';
import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

export type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-info" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

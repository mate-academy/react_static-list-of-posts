import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../types/types';
import './PostList.scss';

interface Props {
  posts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (post.user && (
      <li key={post.id} className="post-list__post">
        <PostInfo post={post} />
      </li>
    )))}
  </ul>
);
